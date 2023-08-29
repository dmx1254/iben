import React from "react";
import { Grid, Card, CardMedia, CardActions, Button } from "@mui/material";

import { Link } from "react-router-dom";
import useStyles from "./single";

const SingleProduct = ({ data }) => {
  const classes = useStyles();
  return (
    <Grid item xl={4} lg={6} sx={{ border: "2px solid #000" }}>
      <Card
        sx={{
          maxWidth: 400,
          borderRadius: "0px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Link to={`/dofus/${data?.category}`}>
          <CardMedia component="img" height="250" image={data?.image} />
        </Link>
        <CardActions sx={{ background: "#fff", color: "#3f3f3f" }}>
          <Link
            to={`/dofus/${data?.category}`}
            style={{
              color: "#3f3f3f",
            }}
          >
            <Button
              size="full"
              sx={{
                color: "#3f3f3f",
                fontWeight: 600,
                fontFamily: "inherit",
                margin: "0px auto",
              }}
              className={classes.singleProductHover}
            >
              {data.title}
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>

    // <div className="product">
    //   <Link to={`/dofus/${data?.category}`}>
    //     <img src={data?.image} alt={data?.title} />
    //   </Link>
    //   <Link to={`/dofus/${data?.category}`}>
    //     <button>{data?.title}</button>
    //   </Link>
    // </div>
  );
};

export default SingleProduct;
