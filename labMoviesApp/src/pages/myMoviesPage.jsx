import React, { useContext } from "react";
import { Button, Paper, Typography } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Link } from "react-router-dom";
import { MoviesContext } from "../contexts/moviesContext";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";

const MyMoviesPage = () => {
  const context = useContext(MoviesContext);
  const { myMovies } = context;
  return (
    <>
      <br />
      <br />
      <br />
      <Link style={{ textDecoration: "none" }} to={`/myMovies/create`}>
        <Button
          variant="contained"
          size="small"
          sx={{
            textTransform: "none",
            marginLeft: 2,
            backgroundColor: "rgb(3, 37, 65)",
          }}
        >
          Create Movie
          <KeyboardDoubleArrowRightIcon
            sx={{ color: "#bfbfbf" }}
            fontSize="small"
          />
        </Button>
      </Link>
      <br />
      {!myMovies.length ? (
        <h4>No Movies created yet! Add new movies </h4>
      ) : (
        <>
          <br />
          <br />
          <Typography variant="h5" component="h3" sx={{ margin: 1 }}>
            My Fantasy Movies
          </Typography>
          <TableContainer component={Paper}>
            <Table aria-label="details table">
              <TableBody>
                {myMovies.map((row) => (
                  <TableRow
                    key={row.title}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {row.title}
                    </TableCell>
                    <TableCell align="left">{row.overview}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </>
  );
};

export default MyMoviesPage;
