import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import GitHub from "@material-ui/icons/GitHub";
import { LinkedIn } from "@material-ui/icons";
import { useHistory } from "react-router-dom";


const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();
  const history = useHistory();

  const linkedInClick = (e) => {
    e.stopPropagation()
    history.push("https://www.linkedin.com/in/gabriel-harris-249231208/")
  }

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <BottomNavigationAction onClick={(e) => linkedInClick(e)} icon={<LinkedIn />} className={classes.root} />
      <BottomNavigationAction icon={<GitHub />} className={classes.root} />
    </BottomNavigation>
  );
};
export default Footer;
