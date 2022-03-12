import React from "react";
import "./Navigation.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Container, useTheme } from "@mui/material";
import logo from "../../../Image_Icon/Group 33069.png";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";

import ListItemText from "@mui/material/ListItemText";

const Navigation = () => {
  const theme = useTheme();
  const useStyle = makeStyles({
    navItem: {
      color: "black !important",
      textDecoration: "none !important",
      fontSize: "16px !important",
    },
    navIcon: {
      [theme.breakpoints.up("sm")]: {
        display: "none !important",
        color: "red !important",
      },
    },
    navItemContainer: {
      [theme.breakpoints.down("sm")]: {
        display: "none !important",
        fontSize: "58px !important",
      },
    },
    navLogo: {
      [theme.breakpoints.down("sm")]: {
        textAlign: "right",
      },
    },
    phoneItem: {
      textDecoration: "none",
      color: "black",
    },
    phoneBtn: {
      width: "100%",
    },
  });
  const { navItem, navIcon, navItemContainer, navLogo, phoneItem, phoneBtn } =
    useStyle();

  const [state, setState] = React.useState(false);

  const list = (
    <Box sx={{ width: 200 }} role="presentation">
      <List>
        <ListItem button>
          <ListItemText>
            <Link className={phoneItem} to="/home">
              Home
            </Link>
          </ListItemText>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText>
            <Link className={phoneItem} to="/about">
              About Us
            </Link>
          </ListItemText>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText>
            <Link className={phoneItem} to="/projects">
              Projects
            </Link>
          </ListItemText>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText>
            <Link className={phoneItem} to="/contacts">
              Contacts
            </Link>
          </ListItemText>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText>
            <Link className={phoneItem} to="/admin">
              Admin
            </Link>
          </ListItemText>
        </ListItem>
        <Divider />
        <Button className={phoneBtn} variant="contained">
          Login
        </Button>
      </List>
    </Box>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          style={{ background: "#ECF0F1", boxShadow: "none" }}
        >
          <Container>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                sx={{ mr: 2 }}
                className={navIcon}
                onClick={() => setState(true)}
              >
                <MenuIcon />
              </IconButton>

              <Typography
                className={navLogo}
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
              >
                <img
                  src={logo}
                  style={{ width: "120px", color: "white" }}
                  alt=""
                />
              </Typography>
              <Box className={navItemContainer}>
                <Link className={navItem} to="/">
                  <Button className={navItem} color="inherit">
                    Home
                  </Button>
                </Link>
                <Link className={navItem} to="/about">
                  <Button className={navItem} color="inherit">
                    About us
                  </Button>
                </Link>

                <Link className={navItem} to="/projects">
                  <Button className={navItem} color="inherit">
                    Projects
                  </Button>
                </Link>
                <Link className={navItem} to="/contacts">
                  <Button className={navItem} color="inherit">
                    Contacts
                  </Button>
                </Link>
                <Link className={navItem} to="/admin">
                  <Button className={navItem} color="inherit">
                    Admin
                  </Button>
                </Link>
                <Button sx={{ px: 4 }} variant="contained">
                  Login
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>

      <div>
        <React.Fragment>
          <Drawer open={state} onClose={() => setState(false)}>
            {list}
          </Drawer>
        </React.Fragment>
      </div>
    </>
  );
};

export default Navigation;
