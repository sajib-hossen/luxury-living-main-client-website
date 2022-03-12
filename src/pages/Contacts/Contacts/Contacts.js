import { Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useForm } from "react-hook-form";
import contactimg from "../../../Image_Icon/Image/contacts.svg";

const Contacts = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const useStyle = makeStyles({
    contact_container: {
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    contact: {
      height: "700px",
      alignItems: "center",
    },
  });

  const { contact_container, contact } = useStyle();
  return (
    <Container className={contact_container} sx={{ flexGrow: 1 }}>
      <Typography
        variant="h5"
        style={{ textAlign: "center", fontWeight: 900, marginTop: "10px" }}
      >
        Contacts
      </Typography>
      <Typography
        variant="h4"
        style={{ textAlign: "center", fontWeight: 900, marginTop: "10px" }}
      >
        Let Us handle your project ,professionally
      </Typography>
      <Grid className={contact} container spacing={2}>
        <Grid item xs={12} md={7} lg={6}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Enter You First Name"
              style={{
                width: "80%",
                height: "40px",
                fontSize: "15px",
                padding: "10px",
                margin: "10px 0",
              }}
              {...register("name", { required: true })}
            />
            <input
              placeholder="Enter You last Name"
              style={{
                width: "80%",
                height: "40px",
                fontSize: "15px",
                padding: "10px",
                margin: "10px 0",
              }}
              {...register("name")}
            />
            <input
              placeholder="Enter You Email"
              style={{
                width: "80%",
                height: "40px",
                fontSize: "15px",
                padding: "10px",
                margin: "10px 0",
              }}
              {...register("email")}
            />
            <input
              placeholder="Enter You Phone"
              style={{
                width: "80%",
                height: "40px",
                fontSize: "15px",
                padding: "10px",
                margin: "10px 0",
              }}
              type="number"
              {...register("phone")}
            />
            <textarea
              placeholder="Your Messages"
              style={{
                width: "80%",
                height: "80px",
                fontSize: "15px",
                padding: "10px",
                margin: "10px 0",
              }}
              type="text"
              {...register("text")}
            />
            <input
              style={{
                width: "80%",
                height: "40px",
                fontSize: "15px",
                margin: "10px 0",
              }}
              type="submit"
            />
          </form>
        </Grid>
        <Grid item xs={12} md={7} lg={6}>
          <img src={contactimg} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contacts;
