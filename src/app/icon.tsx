import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 48, height: 48 };
export const contentType = "image/png";

export default async function Icon() {
  const mark = await readFile(
    join(process.cwd(), "public", "assets", "kimori-mark.png")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: 48,
          height: 48,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Full bleed: with no badge behind it there is nothing to inset
            against, and the mark needs every pixel it can get at tab size. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`data:image/png;base64,${mark.toString("base64")}`}
          alt=""
          width={48}
          height={48}
        />
      </div>
    ),
    size
  );
}
