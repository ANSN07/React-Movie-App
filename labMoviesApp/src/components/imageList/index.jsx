import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Grid from "@mui/material/Grid";

const styles = {
  gridListRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  gridList: {
    width: 450,
    height: "100vh",
  },
};
const ImageListComponent = ({ images }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Grid item xs={3}>
      <div sx={styles.gridListRoot}>
        <ImageList
          sx={{ width: isMobile ? 150 : 300, height: 350 }}
          cols={1}
          rowHeight={350}
        >
          {images.map((image) => (
            <ImageListItem
              key={image.file_path}
              sx={styles.gridListTile}
              cols={1}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                alt={image.poster_path ? image.poster_path : image.file_path}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </Grid>
  );
};

export default ImageListComponent;
