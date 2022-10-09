import React from "react";
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";

// @mui material components
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import post1 from "assets/images/examples/testimonial-6-2.jpg";

function Rooms() {
  return (
    <MKBox pt={3} px={3}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} lg={3}>
          <TransparentBlogCard
            image={post1}
            title="Double Bedroom"
            description="1 king size bed"
            action={{
              type: "internal",
              route: "/pages/blogs/author",
              color: "info",
              label: "read more",
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <TransparentBlogCard
            image={post1}
            title="Suite Room"
            description="1 king size bed. 1 sofa cum king size bed"
            action={{
              type: "internal",
              route: "/pages/blogs/author",
              color: "info",
              label: "read more",
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <TransparentBlogCard
            image={post1}
            title="2 BHK"
            description="2 king size bed. 1 sofa cum king size bed"
            action={{
              type: "internal",
              route: "/pages/blogs/author",
              color: "info",
              label: "read more",
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <TransparentBlogCard
            image={post1}
            title="4 BHK"
            description="4 king size bed. 3 sofa cum king size bed"
            action={{
              type: "internal",
              route: "/pages/blogs/author",
              color: "info",
              label: "read more",
            }}
          />
        </Grid>
      </Grid>
    </MKBox>
  );
}

export default Rooms;
