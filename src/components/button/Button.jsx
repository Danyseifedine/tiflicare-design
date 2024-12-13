import { Button } from "@mui/material";
import PropTypes from "prop-types";

function DefaultButton({
  contained,
  text,
  color = "#674387",
  textColor = "white",
  width = "100%",
  classe = "",
  styles = {},
}) {
  return contained ? (
    <Button
      className={classe}
      sx={{
        backgroundColor: color,
        borderRadius: "35px",
        height: "58px",
        width: width,
        minWidth: width,
        fontWeight: "normal",
        fontFamily: "Poppins",
        textTransform: "none",
        fontSize: {
          xs: "12px", // Extra-small screens
          sm: "14px", // Small screens
          md: "16px", // Medium screens and up
        },
        color: textColor,
        "@media (max-width:600px)": {
          height: "54px", // Reduce height on small screens
        },
      }}
      style={{ ...styles }}
      variant="contained"
    >
      {text}{" "}
    </Button>
  ) : (
    <Button
      variant="outlined"
      sx={{
        height: "58px",
        minWidth: width,
        width: width,
        borderRadius: "35px",
        borderColor: color,
        fontWeight: "normal",
        textTransform: "none",
        fontSize: {
          xs: "12px", // Extra-small screens
          sm: "14px", // Small screens
          md: "16px", // Medium screens and up
        },
        color: color,
        "@media (max-width:600px)": {
          height: "54px", // Reduce height on small screens
        },
        "&:hover": {
          borderColor: color,
          backgroundColor: color,
          color: "white",
        },
      }}
      style={{ ...styles }}
      className={classe}
    >
      {text}
    </Button>
  );
}

// Define prop validation
DefaultButton.propTypes = {
  contained: PropTypes.bool.isRequired, // 'contained' must be a boolean
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  textColor: PropTypes.string,
  width: PropTypes.string,
  classe: PropTypes.string,
  styles: PropTypes.any,
};

export default DefaultButton;
