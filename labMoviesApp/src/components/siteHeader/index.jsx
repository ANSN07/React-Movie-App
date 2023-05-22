import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
// import { useAuth } from "../../contexts/AuthContext";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Avatar from "@mui/material/Avatar";

const styles = {
  title: {
    flexGrow: 1,
  },
  appbar: {
    backgroundColor: "rgb(3, 37, 65)",
    boxShadow: "5px 10px 18px #888888",
  },
  cursor: { cursor: "pointer" },
  highlight: {
    color: "#FFFFFF",
    background: "linear-gradient(to right bottom, #7e57c2, rgb(3, 37, 65))",
  },
  // offset: theme.mixins.toolbar,
};

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const SiteHeader = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const [clicked, setClicked] = useState("");
  // const { user, logOut } = useAuth();

  // const handleLogout = async () => {
  //   await logOut();
  //   navigate("/login");
  // };

  const menuOptions = [
    { label: "Movies", path: "/" },
    { label: "Favorites", path: "/movies/favourites" },
  ];
  const movieOptions = [
    { label: "Popular", path: "/movies/popular" },
    { label: "Upcoming", path: "/movies/upcoming" },
    { label: "Top Rated", path: "/movies/top-rated" },
    { label: "Now Playing", path: "/movies/now-playing" },
  ];

  const handleMenuSelect = (pageURL) => {
    setClicked("");
    navigate(pageURL);
  };

  const handleMovieSelect = (key, pageURL) => {
    setClicked(key);
    navigate(pageURL);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <AppBar sx={styles.appbar} position="fixed" elevation={0}>
        <Toolbar variant="dense">
          <Stack direction={"row"}>
            <Typography
              variant="h4"
              sx={{ ...styles.cursor, ...styles.title }}
              onClick={() => handleMenuSelect("/")}
            >
              TMDB Client
            </Typography>
            <Link to="/signup">
              <Button
                variant="contained"
                size="small"
                color="secondary"
                sx={{
                  textTransform: "none",
                  marginLeft: 2,
                }}
              >
                Sign Up
              </Button>
            </Link>
            <Link to="/login">
              <Button
                variant="contained"
                size="small"
                color="secondary"
                sx={{
                  textTransform: "none",
                  marginLeft: 2,
                }}
              >
                Log In
              </Button>
            </Link>
            <Avatar
              sx={{
                cursor: "pointer",
                width: 35,
                height: 35,
                marginLeft: 2,
                marginTop: 0.5,
                marginRight: 25,
              }}
              onClick={() => handleMenuSelect("/myMovies")}
            >
              <AccountCircleIcon />
            </Avatar>
          </Stack>

          <Typography variant="p" sx={styles.title}>
            All you ever wanted to know about Movies!
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                size="large"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuOptions.map((opt) => (
                  <MenuItem
                    key={opt.label}
                    onClick={() => handleMenuSelect(opt.path)}
                  >
                    {opt.label}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <>
              {menuOptions.map((opt) => (
                <Button
                  key={opt.label}
                  color="inherit"
                  onClick={() => handleMenuSelect(opt.path)}
                >
                  {opt.label}
                </Button>
              ))}
            </>
          )}
        </Toolbar>
        <Toolbar variant="dense" style={{ justifyContent: "space-between" }}>
          <div>
            {/* {user && ( */}
            <Stack
              direction="row"
              sx={{ marginRight: "100px" }}
              spacing={1}
              divider={
                <Divider color="secondary" orientation="vertical" flexItem />
              }
            >
              {movieOptions.map((opt) => (
                <Chip
                  sx={
                    clicked && clicked === opt.label ? styles.highlight : null
                  }
                  key={opt.label}
                  label={opt.label}
                  size="small"
                  color="primary"
                  variant="outlined"
                  onClick={() => handleMovieSelect(opt.label, opt.path)}
                />
              ))}
            </Stack>
            {/* )} */}
          </div>
          {/* <div>
            {!user && (
              <Link
                to="/login"
                style={{ textDecoration: "none", marginRight: 10 }}
              >
                <Chip
                  label="Login"
                  style={{ textTransform: "none" }}
                  size="small"
                  color="primary"
                  variant="outlined"
                />
              </Link>
            )}
            {!user && (
              <Link to="/register" style={{ textDecoration: "none" }}>
                <Chip
                  style={{ textTransform: "none" }}
                  label="Register"
                  size="small"
                  color="primary"
                  variant="outlined"
                />
              </Link>
            )}
          </div> */}
          {/* {user && (
            <Chip
              label="Logout"
              size="small"
              color="primary"
              variant="outlined"
              onClick={handleLogout}
            />
          )} */}
        </Toolbar>
      </AppBar>
      <Offset />

      {/* <div className={classes.offset} /> */}
    </>
  );
};

export default SiteHeader;
