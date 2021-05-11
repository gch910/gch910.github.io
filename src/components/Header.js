import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../avatar.png";
import "./Styles.css";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
    textTransform: "uppercase",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Gabriel Harris" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Gabriel Harris"]} typeSpeed={40} />
      </Typography>

      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={["Frontend Developer", "Backend Developer", "Musician"]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </Typography>
      <div id="icon-outer">
        <div id="icon-container">
          <i id="js-icon" className="icon fab fa-js fa-5x"></i>
          <i id="node-icon" class="icon fab fa-node fa-5x"></i>
          <i id="python-icon" className="icon fab fa-python fa-5x"></i>
          <i id="react-icon" className="icon fab fa-react fa-5x"></i>
          <img id="flask-icon" className="icon" src="icons/flask-icon-2.png" />
          <img
            id="sql-alchemy-icon"
            className="icon"
            src="icons/sql-alchemy-icon.png"
          />
          <i id="aws-icon" className="icon fab fa-aws fa-5x"></i>
          <img
            id="sequelize-icon"
            className="icon"
            src="icons/sequelize-logo.png"
          />
        </div>
      </div>
    </Box>
  );
};

export default Header;
