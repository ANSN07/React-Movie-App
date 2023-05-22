import React, { useEffect, useState } from "react";
import { Paper, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { getUserReviews } from "../api/tmdb-api";
import { useQuery } from "react-query";

const MyReviewsPage = () => {
  const { data, error, isLoading, isError } = useQuery(
    ["myReviews", { id: window.localStorage.getItem("id") }],
    getUserReviews
  );

  console.log(data);
  let myReviews = data;

  return (
    <>
      <br />
      <br />
      <br />

      <br />
      {!myReviews.length ? (
        <h4>
          No Reviews created yet! Add new reviews for your favourite movies{" "}
        </h4>
      ) : (
        <>
          <br />
          <br />
          <Typography variant="h5" component="h3" sx={{ margin: 1 }}>
            My Movie Reviews
          </Typography>
          <TableContainer component={Paper}>
            <Table aria-label="details table">
              <TableBody>
                {myReviews.map((row) => (
                  <TableRow
                    key={row._id}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {row.author}
                    </TableCell>
                    <TableCell align="left">{row.description}</TableCell>
                    {/* <TableCell align="left">{row.rating}</TableCell> */}
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

export default MyReviewsPage;
