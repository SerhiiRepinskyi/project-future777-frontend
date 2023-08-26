import { styled } from "@mui/material/styles";

export const SidebarLogoLink = styled("a")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "8px",
  width: "110px",
  textDecoration: "none",
});

export const SidebarLogoIconWrap = styled("div")({
  width: "32px",
  height: "32px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#1f1f1f",
  borderRadius: "8px",
});

export const SidebarLogoIcon = styled("svg")({
  fill: "#ffffff",
  width: "12px",
  height: "16px",
});

export const SidebarLogoText = styled("p")({
  margin: "0px",
  color: "#ffffff",
  fontFamily: "Poppins",
  fontSize: "16px",
  fontWeight: 600,
  letterSpacing: "-0.64px",
});

export const StartPageLogoWrap = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "14px",
});

export const StartPageLogoIconWrap = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#161616",
  borderRadius: "8px",
});

export const StartPageLogoIcon = styled("svg")({
  fill: "#ffffff",
});

export const StartPageLogoText = styled("p")({
  margin: "0px",
  color: "#ffffff",
  fontFamily: "Poppins",
  fontWeight: 600,
  letterSpacing: "-0.64px",
});
