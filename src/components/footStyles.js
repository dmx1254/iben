import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  footer: {
    display: "flex",
    flexDirection: "column",
    marginTop: "60px",
    alignItems: "center",
    background: "#000000",
    justifyContent: "center",
    color: "white",
    left: 0,
    bottom: 0,
    position: "static",
    width: "100%",
    gap: "10px",
    padding: "20px 0px",
  },

  footerImageWrapper: {
    display: "flex",
    gap: "7px",
    alignItems: "center",
    flexWrap: "wrap",
    cursor: "pointer",
  },

  copiright: {
    color: "#cccccc",
    fontSize: "16px",
    textAlign: "center",
  },

  footerConditions: {
    display: "flex",
    flexWrap: "wrap",
    gap: "5px",
  },

  btnPartnership: {
    fontSize: "17px",
    padding: "10px",
    fontFamily: "Roboto, sans-serif",
    cursor: "pointer",
    background: "#e2a301",
    color: "#fff",
    borderRadius: "5px",
    transition: "0.5s ease-in-out",
    outline: "none",
    "&:hover": {
      background: "#e7c80b",
    },
  },

  termsandconditiontoffoter: {
    color: "#9ca2a7",
    margin: "0px 5px",
    transition: "0.5s ease-in-out",
    fontSize: "15px",
    "&:hover": {
      color: "white",
    },
  },
}));
