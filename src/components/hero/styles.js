import { styled } from "@mui/system";

export const StyledImage = styled("img")(({ theme }) => ({
  display: "block",
  margin: "0 0 0 auto",
  borderRadius: "8px",

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    margin: 0,
  },
}));

export const StyledHeader = styled("h2")(({ theme }) => ({
  width: "441px",
  fontWeight: 500,
  fontSize: 48,
  lineHeight: "57px",
  paddingLeft: 20,
  [theme.breakpoints.down("lg")]: {
    paddingLeft: 25,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 36,
    lineHeight: "40px",
    paddingLeft: 0,
    width: "100%",
    textAlign: "center",
  },
  [theme.breakpoints.down(450)]: {
    width: "100%",
    textAlign: "left",
  },
}));

export const StyledText = styled("p")(({ theme }) => ({
  width: "441px",
  fontWeight: 400,
  fontSize: 16,
  marginTop: "2rem",
  lineHeight: "26px",
  paddingLeft: 20,
  [theme.breakpoints.down("lg")]: {
    paddingLeft: 25,
    marginTop: "1rem",
  },
  [theme.breakpoints.down("sm")]: {
    paddingLeft: 0,
    width: "420px",
    margin: "1rem auto 0 auto",
  },
  [theme.breakpoints.down(450)]: {
    width: "100%",
    textAlign: "left",
  },
}));

export const StyledNameTag = styled("p")(({ theme }) => ({
  fontWeight: 500,
  fontSize: 16,
  lineHeight: "26px",
  marginTop: "1rem",
  paddingLeft: 20,
  [theme.breakpoints.down("lg")]: {
    paddingLeft: 30,
  },
  [theme.breakpoints.down("sm")]: {
    paddingLeft: 0,
    textAlign: "center",
  },

  [theme.breakpoints.down(450)]: {
    width: "100%",
    textAlign: "left",
  },
}));

export const PaginationWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "6px",

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    margin: 0,
  },
}));

export const PaginationItem = styled("div")(({ theme }) => ({
  width: "9px",
  height: "9px",
  borderRadius: "100px",
  background: "#C0CBD8",
}));

export const PilotWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "6px",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: "1rem",
  },
}));

export const TrustPilotDiv = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.3rem",
}));
