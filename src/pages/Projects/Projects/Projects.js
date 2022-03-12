import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import wash from "../../../Image_Icon/Image/bernard-hermant-6ftZuO_-b64-unsplash 1.png";
import luxury from "../../../Image_Icon/Image/Mask Group-1.png";
import gorgeous from "../../../Image_Icon/Image/Mask Group.png";
import Project from "../Project/Project";

const projects = [
  {
    id: 0,
    name: "Villa on Washingtion Avenue",
    img: wash,
    location: "Dhaka,Bangladesh",
  },
  {
    id: 1,
    name: "Luxury villa in Rego Park",
    img: luxury,
    location: "Dhaka,Bangladesh",
  },
  {
    id: 2,
    name: "Gorgeous house",
    img: gorgeous,
    location: "Dhaka,Bangladesh",
  },
];

const Projects = () => {
  return (
    <Container sx={{ flexGrow: 1, textAlign: "center", mt: 5 }}>
      <Typography variant="h6" sx={{ my: 2, fontWeight: 800 }}>
        Projects
      </Typography>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 700 }}>
        Discover the latest Interior Design available today
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {projects.map((project) => (
          <Project key={project.id} project={project}></Project>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
