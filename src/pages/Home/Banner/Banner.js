import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import "./Banner.css";
import bannerimg from "../../../Image_Icon/Image/banner.png";
import Navigation from "../../Shared/Navigation/Navigation";

const Banner = () => {
  const useStyle = makeStyles({
    banner_container: {
      background: "#ECF0F1",
      height: "100vh",
      color: "black",
    },
    bannerImg: {
      maxWidth: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    banner: {
      display: "flex",
      alignItems: "center",
      height: "700px",
      justifyContent: "center",
    },
  });
  const { banner_container, bannerImg, banner } = useStyle();
  return (
    <Box className={banner_container} sx={{ flexGrow: 1 }}>
      <Navigation />
      <Container>
        <Grid className={banner} container spacing={2}>
          <Grid item xs={12} md={6} lg={6}>
            <Typography
              style={{ fontWeight: 900, marginBottom: "20px" }}
              variant="h3"
            >
              We Build <br /> Your Dream
            </Typography>
            <Typography variant="body1" sx={{ my: 4 }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consectetur voluptates odit ullam, illum temporibus nulla cum
              eligendi maiores deleniti vel ad exercitationem nobis fugiat ut
              quos aliquam, rerum beatae dicta!
            </Typography>
            <Button variant="contained">Booking</Button>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <img className={bannerImg} src={bannerimg} alt="" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
