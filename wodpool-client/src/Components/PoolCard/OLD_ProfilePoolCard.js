import React from "react";
import axios from "axios";
//MUI
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// ASSETS
import { useStyles } from "../../util/MakeStyles";
//COMPONENTS

export default function ProfileCard(props) {

  const classes = useStyles();
  const displayPools = (props) => {
    const { pools } = props;

    if (pools.length > 0) {
      return pools.map((pool, index) => {
        const submit = () => {
          return axios
            .post(`/registration?pool=${pool.id}`)
            .then((res) => {
              alert("SUCCESS");
            })
            .catch((err) => {
              console.log(err);
            });
        };

        return (
          <div key={index}>
            <Card className={classes.cardNarrow}>
              <Typography component="h1" variant="h5" color="textPrimary">
                {pool.name}
              </Typography>
              {`To Do: Add a submit score per event`}

              <Button
                className={classes.btn}
                variant="contained"
                color="primary"
                href={`/pools/submit?id=${pool.id}`}
              >
                SUBMIT
              </Button>
              <Button
                className={classes.btn}
                variant="contained"
                color="primary"
                href={`/pools/${pool.id}`}
              >
                POOL PAGE
              </Button>
            </Card>
          </div>
        );
      });
    } else {
      return <p style={{ color: "black" }}> haven't found pools</p>;
    }
  };

  return <>{displayPools(props)}</>;
}
