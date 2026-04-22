import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";
export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#07070a",
          backgroundImage:
            "radial-gradient(circle at 15% 15%, rgba(124,58,237,0.45), transparent 45%), radial-gradient(circle at 85% 20%, rgba(6,182,212,0.35), transparent 45%), radial-gradient(circle at 50% 90%, rgba(236,72,153,0.30), transparent 55%)",
          color: "#e8e8ef",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 28, opacity: 0.85 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "linear-gradient(120deg,#a78bfa,#22d3ee,#f472b6)",
            }}
          />
          prajwalbikrambasnet.com.np
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 88, fontWeight: 700, letterSpacing: -2, lineHeight: 1 }}>
            {site.fullName}
          </div>
          <div
            style={{
              fontSize: 40,
              fontWeight: 500,
              backgroundImage: "linear-gradient(120deg,#a78bfa,#22d3ee,#f472b6)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {site.role}
          </div>
          <div style={{ fontSize: 30, opacity: 0.8, maxWidth: 900 }}>{site.tagline}</div>
        </div>
        <div style={{ display: "flex", fontSize: 24, opacity: 0.6, gap: 24 }}>
          <span>github.com/prajwalbasnet4400</span>
          <span>·</span>
          <span>linkedin.com/in/prajwalbasnet4400</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
