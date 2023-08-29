import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  homeSlider: {
    display: "flex",
    width: "100vw",
  },

  container: {
    margin: "20px 0px",
  },

  homeSliderImage: {
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  howtowork: {
    display: "flex",
    aignItems: "center",
  },

  paymentMethode: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    flexWrap: "wrap",
    margin: "0px auto",
    justifyContent: "center",
    padding: "40px 0px",
    // maxWidth: "500px",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  },

  media: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "150px",
  },
  partnerConatainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    // margin: "20px 0px",
    border: "4px solid #e6e6e6",
    marginBottom: "20px",
  },
  partnership: {
    display: "flex",
    width: "100vw",
  },
  partnershipImage: {
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
}));
