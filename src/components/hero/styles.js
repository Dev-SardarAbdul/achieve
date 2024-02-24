import { styled } from "@mui/system";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const MainWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  paddingTop:"1rem",
  paddingBottom:"1rem",

  // [theme.breakpoints.down("sm")]: {
  //   width: "100%",
  //   margin: 0,
  // },
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

export const ContactWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "6px",
  marginTop: "2rem",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: "1rem",
  },
}));

export const ContactCard = styled("div")(({ theme }) => ({
  
  boxShadow: '0px 3px 18px #10182817',

  borderRadius: "10px",
  height: "175px",
  width: "165px",
  padding: "5px",

// 
}));

export const ContactCardWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "0.5rem",
  width: "400px",
  [theme.breakpoints.down(400)]: {
    width: "100%",
  },
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

export const ContactIntroDiv = styled("div")(({ theme }) => ({
  background: "#EFF5FF",
  padding: "8px 20px 8px 20px",
  borderRadius: "16px",

  "& p": {
    color: "blue",
    margin: 0,

    fontSize: "14px",
    fontWeight: 700,
    lineHeight: "17px",
    textAlign: "center",
  },
}));

export const MainInfoDiv = styled("div")(({ theme }) => ({
  "& .helpText": {
    position: "relative",
    zIndex: 33,
    fontSize: "24px",
    fontWeight: 700,
    lineHeight: "31px",
    marginTop: "1rem",
  },

  "& .helpBootomTitle": {
    color: "#5C708A",
    fontSize: "24px",
    fontWeight: 700,
    lineHeight: "31px",
    marginTop: "2rem",
  },

  "& .helpText span": {
    color: "#5C708A",
  },
  "& .topImg": {
    position: "absolute",
    zIndex: 2,
    marginLeft: "8.5rem",
    marginTop: "-0.49rem",
  },

  "& .bottomImg": {
    position: "absolute",
    zIndex: 2,
    
    marginLeft: "1.4rem",
    marginTop: "-0.6rem",
  },

  "& .helpDesc": {
    fontSize: "18px",
    fontWeight: 500,
    lineHeight: "21px",
    textAlign: "center",
    color: "#5C708A",
    marginTop: "0.3rem",
  },

  "& .helpBottomText": {
    // zIndex: 33,
    fontSize: "24px",
    fontWeight: 700,
    lineHeight: "31px",
    marginTop: "0rem",
    textAlign: "center",
  },
  "& .reachText": {
    fontSize: "16px",
    lineHeight: "22pxpx",
    marginTop: "0.7rem",
    marginBottom: "0.7rem",
    textAlign: "center",
    fontWeight: 400,
    color: "#1D252F",
  },

  // "& p": {
  //   color: "blue",
  //   margin: 0,

  //   fontSize: "14px",
  //   fontWeight: 700,
  //   lineHeight: "17px",
  //   textAlign: "center",
  // },
}));

export const StyledInput = styled(TextField)(({ theme }) => ({
  width: '350px',
  marginBottom: '1rem',
  [theme.breakpoints.down('sm')]: {
    width: '90%',
   
  },
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#EEF0F9',
  color: '#616A7C',
  fontSize: '18px',
  textTransform: 'initial',
  fontWeight: 700,
  width: '350px',
  '&:hover': {},
  [theme.breakpoints.down('sm')]: {
    width: '90%',
    
  },
}));
