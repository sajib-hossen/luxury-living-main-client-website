import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import tion from "../../../Image_Icon/Icon/Group 33011.png";

const Project = ({ project }) => {
  const { name, img, location } = project;
  return (
    <Grid item xs={4} sm={4} md={4}>
      <Card sx={{ minWidth: 275 }}>
        <CardMedia component="img" height="294" image={img} alt="Paella dish" />
        <CardContent>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <img style={{ width: "30px" }} src={tion} alt="" /> {location}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Project;
