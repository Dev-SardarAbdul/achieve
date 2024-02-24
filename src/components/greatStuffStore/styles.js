import { styled } from "@mui/system";


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
      zIndex:-2,
      
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