import { NextResponse, type NextRequest } from "next/server";
import {
  ACCESS_COOKIE_NAME,
  createAccessToken,
  getAccessPasskey,
  isPublicSite,
  sanitizeRedirectPath,
  timingSafeEqual,
} from "@/lib/site-access";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function requestedPath(request: NextRequest) {
  if (request.nextUrl.pathname === "/auth") {
    return sanitizeRedirectPath(request.nextUrl.searchParams.get("from"));
  }

  return sanitizeRedirectPath(
    `${request.nextUrl.pathname}${request.nextUrl.search}`
  );
}

function authHtml(request: NextRequest, status: number) {
  const error = request.nextUrl.searchParams.get("error");
  const from = requestedPath(request);
  const missingPasskey = !getAccessPasskey() || error === "missing";
  const message =
    error === "invalid"
      ? "The passkey is not correct."
      : missingPasskey
        ? "Access passkey is not configured."
        : "";

  return new NextResponse(
    `<!doctype html>
<html lang="en-MY">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="robots" content="noindex,nofollow" />
  <title>Private Preview | KIMORI</title>
  <style>
    :root {
      color-scheme: light;
      --paper: #faf8f3;
      --ink: #2e2a22;
      --muted: #6f6758;
      --forest: #2f5a3a;
      --line: #dfd8cc;
      --gold: #a77f43;
    }

    * {
      box-sizing: border-box;
    }

    body {
      min-height: 100vh;
      margin: 0;
      display: grid;
      place-items: center;
      padding: 32px 18px;
      background:
        linear-gradient(120deg, rgba(47, 90, 58, 0.1), transparent 38%),
        var(--paper);
      color: var(--ink);
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }

    main {
      width: min(100%, 420px);
      border: 1px solid var(--line);
      background: rgba(250, 248, 243, 0.92);
      padding: 34px;
    }

    .mark {
      margin-bottom: 30px;
      color: var(--forest);
      font-family: Georgia, "Times New Roman", serif;
      font-size: 28px;
      letter-spacing: 0.24em;
    }

    p {
      margin: 0;
      color: var(--muted);
      font-size: 14px;
      line-height: 1.7;
    }

    .eyebrow {
      margin-bottom: 10px;
      color: var(--gold);
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.22em;
      text-transform: uppercase;
    }

    h1 {
      margin: 0 0 12px;
      font-family: Georgia, "Times New Roman", serif;
      font-size: clamp(34px, 9vw, 48px);
      font-weight: 400;
      line-height: 1;
      letter-spacing: 0;
    }

    form {
      margin-top: 30px;
      display: grid;
      gap: 14px;
    }

    label {
      color: var(--muted);
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.18em;
      text-transform: uppercase;
    }

    input {
      width: 100%;
      min-height: 50px;
      border: 1px solid var(--line);
      border-radius: 0;
      background: #fffdf8;
      color: var(--ink);
      font: inherit;
      font-size: 16px;
      padding: 12px 14px;
      outline: none;
    }

    input:focus {
      border-color: var(--forest);
      box-shadow: 0 0 0 3px rgba(47, 90, 58, 0.14);
    }

    button {
      min-height: 50px;
      border: 1px solid var(--forest);
      border-radius: 0;
      background: var(--forest);
      color: var(--paper);
      cursor: pointer;
      font: inherit;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.2em;
      text-transform: uppercase;
    }

    .message {
      margin-top: 18px;
      color: #8b332d;
    }
  </style>
</head>
<body>
  <main>
    <div class="mark">KIMORI</div>
    <p class="eyebrow">Private Preview</p>
    <h1>Access Required</h1>
    <p>This preview is restricted while development licensing is pending.</p>
    ${
      missingPasskey
        ? `<p class="message">${escapeHtml(message)}</p>`
        : `<form action="/api/auth" method="post">
      <input type="hidden" name="from" value="${escapeHtml(from)}" />
      <label for="passkey">Passkey</label>
      <input id="passkey" name="passkey" type="password" autocomplete="current-password" required autofocus />
      <button type="submit">Enter</button>
    </form>
    ${message ? `<p class="message">${escapeHtml(message)}</p>` : ""}`
    }
  </main>
</body>
</html>`,
    {
      status,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "no-store",
      },
    }
  );
}

export async function proxy(request: NextRequest) {
  if (isPublicSite()) {
    return NextResponse.next();
  }

  if (
    request.nextUrl.pathname === "/robots.txt" ||
    request.nextUrl.pathname.startsWith("/api/auth")
  ) {
    return NextResponse.next();
  }

  const passkey = getAccessPasskey();

  if (!passkey) {
    return authHtml(request, 503);
  }

  const cookie = request.cookies.get(ACCESS_COOKIE_NAME)?.value;
  const token = await createAccessToken();
  const authorized = cookie ? timingSafeEqual(cookie, token) : false;

  if (authorized) {
    if (request.nextUrl.pathname === "/auth") {
      return NextResponse.redirect(
        new URL(requestedPath(request), request.url),
        { status: 303 }
      );
    }

    return NextResponse.next();
  }

  return authHtml(request, 401);
}
