import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./Styles.css";

import groovetubeVideoPage from "../images/video-page-groovetube.PNG";
import cloudifyHomePage from "../images/cloudify-homepage.PNG";
import fretsyHomePage from "../images/homepage-fretsy.PNG";
import project5 from "../images/react-redux.jpg";
import project6 from "../images/react.png";
import { findByLabelText } from "@testing-library/dom";
import { Autorenew } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    width: "110%",
    minWidth: 350,
    margin: "4rem auto",
    marginRight: "50%",
  },
}));

const projects = [
  {
    name: "Groovetube",
    description: `Groovetube is a video sharing web application inspired by YouTube, built using Python / Flask and utilizing React.js/Redux architecture.`,
    usersCan: [
      "Create an account / profile",
      "Log in / Log out",
      "Upload / share live music videos",
      "Watch videos",
      "View user profiles",
      "Follow / unfollow other users",
      "Search for videos",
      "View video pages and comment on videos",
      " Add a video to a user's collection",
    ],
    link: "https://groovetube.herokuapp.com/",
    image: groovetubeVideoPage,
  },
  {
    name: "Cloudify",
    description: `Cloudify is a web application inspired by SoundCloud built using Python / Flask utilizing React.js/Redux architecture.`,
    usersCan: [
      "Create an account / profile",
      "Log in / Log out",
      "Upload / share music",
      "Listen to music",
      "View artist profiles",
      "Search for artists / music",
      "View song pages and comment on songs",
      "Add a like to a song",
    ],
    link: "https://cloudify-aa.herokuapp.com/",
    image: cloudifyHomePage,
  },
  {
    name: "Fretsy",
    description: `Fretsy is an e-commerce app for purchasing guitars / equipment (inspired by Etsy). It was built using Node.js / Express for the backend and React.js/Redux architecture for the frontend.`,
    usersCan: [
      "Create an account / profile",
      "Log in / Log out",
      "View product listings",
      "Add / remove musical equipment to their shopping cart",
      "Checkout / purchase items in shopping cart",
      "Search for products",
      "View Purchase history",
      "Leave reviews / ratings for purchased items",
    ],
    link: "https://etsy-clone-aa.herokuapp.com/",
    image: fretsyHomePage,
  },
  // {
  //   name: "Project 4",
  //   description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
  //   consequatur magni quod nesciunt necessitatibus molestiae non\
  //   eligendi, magnam est aliquam recusandae? Magnam soluta minus\
  //   iste alias sunt veritatis nisi dolores!`,
  //   image: project4,
  // },
  // {
  //   name: "Project 5",
  //   description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
  //   consequatur magni quod nesciunt necessitatibus molestiae non\
  //   eligendi, magnam est aliquam recusandae? Magnam soluta minus\
  //   iste alias sunt veritatis nisi dolores!`,
  //   image: project5,
  // },
  // {
  //   name: "Project 6",
  //   description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
  //   consequatur magni quod nesciunt necessitatibus molestiae non\
  //   eligendi, magnam est aliquam recusandae? Magnam soluta minus\
  //   iste alias sunt veritatis nisi dolores!`,
  //   image: project6,
  // },
];

const Portfolio = () => {
  const classes = useStyles();
  const history = useHistory();
  const redirect = (e) => {
    // if(e.target.className === 0)
    // history.push("https://groovetube.herokuapp.com/")
    console.log(e.target.className);
    if (e.target.className.split(" ")[1] == "Groovetube")
      window.location = "https://groovetube.herokuapp.com/";
  };
  return (
    <>
      <h1 id="projects-header">My Projects</h1>
      <Box
        id="card-container"
        component="div"
        className={classes.mainContainer}
      >
        <Grid id="card-grid" container justify="center">
          {/* Projects */}
          {projects.map((project, i) => (
            <Grid
              className={i}
              id="card-outer-grid"
              item
              xs={12}
              sm={8}
              md={3}
              key={i}
            >
              <Card className={classes.cardContainer}>
                <CardActionArea>
                  <CardMedia
                    className={project.name}
                    id="card"
                    component="img"
                    alt="Project 1"
                    height="300"
                    image={project.image}
                  />
                  <CardContent className={project.name} id="card-content">
                    <Typography variant="h5" gutterBottom>
                      {project.name}
                    </Typography>
                    <Typography variant="body3" color="textSecondary">
                      {project.description}
                      <h3>Users Can</h3>
                      <ul>
                        {project?.usersCan?.map((item) => (
                          <li>{item}</li>
                        ))}
                      </ul>
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <a className="card-link" href={project.link}>
                    <Button
                      size="small"
                      color="primary"
                    >
                      Live Demo
                    </Button>
                  </a>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Portfolio;
