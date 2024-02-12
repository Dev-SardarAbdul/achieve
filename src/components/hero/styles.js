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
    paddingLeft: 0,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 36,
    lineHeight: "40px",
    width: "100%",
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
    paddingLeft: 0,
    marginTop: "1rem",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export const StyledNameTag = styled("p")(({ theme }) => ({
  fontWeight: 500,
  fontSize: 16,
  lineHeight: "26px",
  marginTop: "1rem",
  paddingLeft: 20,
  [theme.breakpoints.down("lg")]: {
    paddingLeft: 0,
  },
}));
