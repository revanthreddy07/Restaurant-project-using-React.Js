import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
          Welcome to the website for our eatery! We are excited to show you around our culinary universe while you are here. 
          When it comes to fine dining and exquisite flavors, our eatery is the ideal destination. 
          Fresh ingredients are meticulously selected for our menu, which is then expertly prepared by our chefs. 
          We provide a cozy, welcoming setting that is ideal for a family reunion, a work lunch, or a romantic dinner. 
          Our welcoming staff is committed to giving you outstanding service and making sure that your dining experience is one to remember.
           We cordially welcome you to look around our website, discover more about our offerings,
           and book a table for a memorable dining experience. I appreciate you selecting us, and I'm looking forward to
        </p>
      </Box>
    </Layout>
  );
};

export default About;
