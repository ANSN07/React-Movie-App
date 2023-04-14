import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ImageListComponent from "../imageList";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import InstagramIcon from "@mui/icons-material/Instagram";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";

const styles = {
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "left",
    flexWrap: "wrap",
    padding: 1.5,
    marginTop: "25px",
  },
};
const gender = {
  0: "Not specified",
  1: "Female",
  2: "Male",
};
function createData(name, value) {
  if (name === "Gender" && value) value = gender[value];
  if (name === "Also known as" && !value.length) value = "NA";
  value = value ?? "NA";
  return { name, value };
}
const rows = (actor) => [
  createData("Known for", actor.known_for_department),
  createData("Birthday", actor.birthday),
  createData("Deathday", actor.deathday),
  createData("Also known as", actor.also_known_as),
  createData("Gender", actor.gender),
  createData("Place of birth", actor.place_of_birth),
];

const ActorDetails = ({ actor, images, externalIds }) => {
  
  return (
    <>
      {externalIds && images && (
        <>
          <Paper component="div" sx={styles.root}>
            <Typography variant="h4" component="h3">
              {actor.name}
            </Typography>
            <div>
              {externalIds.facebook_id && (
                <a
                  href={`https://facebook.com/${externalIds.facebook_id}`}
                >
                  <FacebookSharpIcon
                    fontSize="large"
                    color="primary"
                    sx={{ marginRight: "20px" }}
                  />
                </a>
              )}
              {externalIds.twitter_id && (
                <a href={`https://twitter.com/${externalIds.twitter_id}`}>
                  <TwitterIcon fontSize="large" sx={{ marginRight: "20px" }} />
                </a>
              )}
              {externalIds.instagram_id && (
                <a
                  href={`https://instagram.com/${externalIds.instagram_id}`}
                >
                  <InstagramIcon fontSize="large" color="secondary" />
                </a>
              )}
            </div>
          </Paper>
          <Grid container spacing={5} style={{ padding: "15px" }}>
            <ImageListComponent images={images.profiles} />
            <Grid item xs={9}>
              <Typography variant="h5" component="h3">
                Biography
              </Typography>
              <Typography variant="subtitle2" component="h6">
                {actor.biography}
              </Typography>
            </Grid>
          </Grid>
        </>
      )}
      <Typography variant="h5" component="h3" sx={{ margin: 1 }}>
        Personal details
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="details table">
          <TableBody>
            {rows(actor).map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default ActorDetails;
