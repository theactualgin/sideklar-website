import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Sideklar — Nettsider og grafisk profil for norske bedrifter";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Logo row */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "40px" }}>
          <div
            style={{
              width: 48,
              height: 48,
              background: "#3ADBA1",
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              color: "white",
              fontWeight: 900,
            }}
          >
            ✓
          </div>
          <span style={{ fontSize: 34, fontWeight: 800, color: "#0F0F0F" }}>Sideklar</span>
        </div>

        {/* Headline */}
        <div style={{ fontSize: 62, fontWeight: 800, color: "#0F0F0F", lineHeight: 1.15, marginBottom: 24 }}>
          Nettsiden din,{" "}
          <span style={{ color: "#3ADBA1" }}>klar på 3 dager.</span>
        </div>

        {/* Sub */}
        <div style={{ fontSize: 26, color: "#6B7280", maxWidth: 680, lineHeight: 1.5 }}>
          Vi lager profesjonelle nettsider, logoer og grafisk profil for norske bedrifter.
        </div>

        {/* CTA pill */}
        <div
          style={{
            marginTop: 52,
            background: "#3ADBA1",
            color: "#0F0F0F",
            padding: "16px 36px",
            borderRadius: 100,
            fontSize: 22,
            fontWeight: 700,
          }}
        >
          sideklar.no
        </div>
      </div>
    ),
    { ...size }
  );
}
