import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import img from "../../images/film-poster-placeholder.png";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

export default function FullCastList({ actors, title }) {
  return (
    <>
      <Typography
        variant="h5"
        component="h3"
        sx={{ marginLeft: 2, marginTop: 2 }}
      >
        {title}
      </Typography>
      <Box sx={{ width: "100%" }}>
        <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
          {actors.map((actor) => (
            <Grid item xs={6} sm={6} md={3} lg={3}>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                  marginTop: "20px",
                  boxShadow: "5px 10px 18px #888888",
                }}
              >
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      src={
                        actor.profile_path
                          ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                          : img
                      }
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={actor.name}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {actor.character ? actor.character : actor.job}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </List>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
