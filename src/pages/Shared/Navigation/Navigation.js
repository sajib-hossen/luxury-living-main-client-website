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
import { useTheme } from "@mui/material";
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
  });
  const { navItem, navIcon, navItemContainer, navLogo, phoneItem } = useStyle();

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
              About
            </Link>
          </ListItemText>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText>
            <Link className={phoneItem} to="/service">
              Service
            </Link>
          </ListItemText>
        </ListItem>
        <Divider />
      </List>
    </Box>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: "white" }}>
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
                  About
                </Button>
              </Link>
              <Link className={navItem} to="/services">
                <Button className={navItem} color="inherit">
                  Services
                </Button>
              </Link>
            </Box>
          </Toolbar>
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
