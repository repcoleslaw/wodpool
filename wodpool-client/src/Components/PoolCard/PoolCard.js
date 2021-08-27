import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//MUI
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Modal from "@material-ui/core/Modal";
// assets
import { useStyles } from "../../util/MakeStyles";
import placeholder from "../../assets/placeholder.png";
import ShareIcon from "@material-ui/icons/Share";

//components
import Share from "../ShareCard/ShareModal";

// MODAL STYLE CONSTRUCTION
const getModalStyle = () => {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

export default function Poolcard(props) {
  const classes = useStyles();
  const [isRegistered, setRegistered] = React.useState(true);
  const [openModal, setOpenModal] = React.useState(false);
  const [modalStyle] = React.useState(getModalStyle)



  const handleModal = (props) => {
    setOpenModal(true)
    console.log(openModal)
  };
  const handleClose = () => {
    setOpenModal(false)
  };

  const displayModal = (props) => {
    const {pool} = props
    if (openModal) {
      return(
        <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        >
        <Share pool={pool} handler={handleClose} style={modalStyle} />
      </Modal>
      )
    }
   
  }

  const displayPools = (props) => {
    const { pools } = props;
    console.log(pools);

    return pools.map((pool, index) => {
      // joining pool function
      const join = () => {
        return axios
          .post(`/registration?pool=${pool.id}`)
          .then(() => {
            alert("SUCCESS");
          })
          .catch((err) => {
            alert("You've already registered");
            console.log(err);
          });
      };


        return (
          <Grid item key={index}>
            <Card className={classes.cardBase}>
              <CardActionArea
                component={Link}
                to={`pools/${pool.id}`}
                className={classes.cardActionArea}
              >
                {pool?.price ? 
                <Typography variant="caption" className={classes.premiumPool}>
                  PREMIUM: ${pool.price}
                </Typography> :
                <Typography variant="caption" className={classes.freePool}>
                  WODPOOL
                </Typography>  }

                <CardMedia className={classes.cardMedia}></CardMedia>
                <CardContent>
                  <Typography variant="h5">{pool.name}</Typography>
                  <Typography variant="subtitle1">
                    {pool.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardAction}>
                <Button
                  size="small"
                  color="primary"
                  variant="outlined"
                  component={Link}
                  to={`pools/${pool.id}`}
                >
                  View Pool
                </Button>

                <Button
                  size="small"
                  color="primary"
                  variant="outlined"
                  onClick={join}
                >
                  Join Pool
                </Button>

                <Button size="small" color="primary" onClick={handleModal}>
                  <ShareIcon style={{ padding: "0em 0.25em" }} />
                  Share
                </Button>
              </CardActions>
            </Card>
          </Grid>
        );
      } 
        )};


    return <>{displayPools(props)}</>;
  };

 

