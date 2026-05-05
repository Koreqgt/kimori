import { NextResponse, type NextRequest } from "next/server";
import {
  ACCESS_COOKIE_MAX_AGE,
  ACCESS_COOKIE_NAME,
  createAccessToken,
  getAccessPasskey,
  isPublicSite,
  isValidPasskey,
  sanitizeRedirectPath,
} from "@/lib/site-access";

function redirectToAuth(request: NextRequest, error: string, from: string) {
  const url = new URL("/auth", request.url);
  url.searchParams.set("error", error);
  url.searchParams.set("from", from);

  return NextResponse.redirect(url, { status: 303 });
}

function redirectTo(request: NextRequest, path: string) {
  return NextResponse.redirect(new URL(path, request.url), { status: 303 });
}

export function GET(request: NextRequest) {
  return redirectTo(request, isPublicSite() ? "/" : "/auth");
}

export async function POST(request: NextRequest) {
  if (isPublicSite()) {
    return redirectTo(request, "/");
  }

  let formData: FormData;

  try {
    formData = await request.formData();
  } catch {
    return redirectToAuth(request, "invalid", "/");
  }

  const intent = formData.get("intent");
  const from = sanitizeRedirectPath(formData.get("from"));

  if (intent === "logout") {
    const response = redirectTo(request, "/auth");
    response.cookies.delete(ACCESS_COOKIE_NAME);
    return response;
  }

  const submittedPasskey = formData.get("passkey");

  if (!getAccessPasskey()) {
    return redirectToAuth(request, "missing", from);
  }

  if (
    typeof submittedPasskey !== "string" ||
    !(await isValidPasskey(submittedPasskey))
  ) {
    return redirectToAuth(request, "invalid", from);
  }

  const response = redirectTo(request, from);
  response.cookies.set({
    name: ACCESS_COOKIE_NAME,
    value: await createAccessToken(),
    httpOnly: true,
    sameSite: "lax",
    secure: request.nextUrl.protocol === "https:" || process.env.NODE_ENV === "production",
    path: "/",
    maxAge: ACCESS_COOKIE_MAX_AGE,
  });

  return response;
}
