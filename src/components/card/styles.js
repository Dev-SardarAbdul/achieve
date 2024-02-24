import { styled } from "@mui/system";

export const ContactCardWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "0.5rem",
  width: "400px",
  marginTop: "2rem",
  marginBottom: "2rem",
  [theme.breakpoints.down(400)]: {
    width: "100%",
  },
}));

export const ContactCard = styled("div")(({ theme }) => ({
  boxShadow: "0px 3px 18px #10182817",

  borderRadius: "10px",
  height: "175px",
  width: "165px",
  padding: "5px",

  "&.active": {
    border: "2px solid  #3300FF",
  },
  //
}));

export const ContactCardIcon = styled("img")(({ theme }) => ({
  paddingTop: "1.5rem",
  display: "flex",
  margin: "auto",
}));

export const ContactCardTitle = styled("p")(({ theme }) => ({
  marginTop: "1rem",
  textAlign: "center",
  fontSize: "16px",
  fontWeight: 700,
}));

export const ContactCardDesc = styled("p")(({ theme }) => ({
  marginTop: "1rem",
  textAlign: "center",
  color: "#5C708A",
  fontSize: "14px",
  width: "150px",
  paddingLeft: "7px",
}));
