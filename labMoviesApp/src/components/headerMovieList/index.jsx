import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

const styles = {
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: 1.5,
  },
};

const Header = ({ title, setPage, page, totalPages }) => {
  return (
    <Paper component="div" sx={styles.root}>
      <IconButton
        aria-label="go back"
        onClick={() => setPage((prevState) => prevState - 1)}
        disabled={page === 1}
      >
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>

      <Typography variant="h4" component="h3">
        {title}
      </Typography>
      <IconButton
        aria-label="go forward"
        onClick={() => setPage((prevState) => prevState + 1)}
        disabled={page === totalPages}
      >
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default Header;
