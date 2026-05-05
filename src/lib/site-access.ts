const encoder = new TextEncoder();

export const ACCESS_COOKIE_NAME = "kimori_preview_access";
export const ACCESS_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;

export function isPublicSite() {
  return process.env.KIMORI_PUBLIC_SITE === "true";
}

export function getAccessPasskey() {
  return process.env.KIMORI_ACCESS_PASSKEY?.trim() ?? "";
}

async function sha256Hex(value: string) {
  const digest = await crypto.subtle.digest("SHA-256", encoder.encode(value));

  return Array.from(new Uint8Array(digest), (byte) =>
    byte.toString(16).padStart(2, "0")
  ).join("");
}

export async function createAccessToken() {
  const passkey = getAccessPasskey();

  if (!passkey) {
    return "";
  }

  return sha256Hex(`kimori-preview:${passkey}`);
}

export function timingSafeEqual(left: string, right: string) {
  const leftBytes = encoder.encode(left);
  const rightBytes = encoder.encode(right);
  const length = Math.max(leftBytes.length, rightBytes.length);
  let mismatch = leftBytes.length ^ rightBytes.length;

  for (let index = 0; index < length; index += 1) {
    mismatch |= (leftBytes[index] ?? 0) ^ (rightBytes[index] ?? 0);
  }

  return mismatch === 0;
}

export async function isValidPasskey(candidate: string) {
  const passkey = getAccessPasskey();

  if (!candidate || !passkey) {
    return false;
  }

  const [candidateHash, passkeyHash] = await Promise.all([
    sha256Hex(`kimori-passkey-check:${candidate}`),
    sha256Hex(`kimori-passkey-check:${passkey}`),
  ]);

  return timingSafeEqual(candidateHash, passkeyHash);
}

export function sanitizeRedirectPath(value: unknown, fallback = "/") {
  if (typeof value !== "string") {
    return fallback;
  }

  const trimmed = value.trim();

  if (!trimmed || !trimmed.startsWith("/") || trimmed.startsWith("//")) {
    return fallback;
  }

  try {
    const url = new URL(trimmed, "https://kimori.local");

    if (
      url.origin !== "https://kimori.local" ||
      url.pathname === "/auth" ||
      url.pathname.startsWith("/api/auth")
    ) {
      return fallback;
    }

    return `${url.pathname}${url.search}${url.hash}`;
  } catch {
    return fallback;
  }
}
