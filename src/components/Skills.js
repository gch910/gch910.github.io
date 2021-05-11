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

import javascript from "../images/javascript-fullstack.jpg";
import htmlCss from "../images/html-css-image.png";
import python from "../images/python-image.png";
import react from "../images/react-redux.jpg";
import postgres from "../images/postgres-image.jpeg";
import sqlAlchemy from "../images/sql-alchemy-image.jpg";
import sequelize from "../images/sequelize-image.png";
import flask from "../images/flask-image-3.png";
import express from "../images/express-image.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "Full Stack Javascript",
    description: ``,
    image: javascript,
  },
  {
    name: "HTML & CSS",
    description: ``,
    image: htmlCss,
  },
  {
    name: "Python",
    description: ``,
    image: python,
  },
  {
    name: "React JS and Redux",
    description: ``,
    image: react,
  },
  {
    name: "PostgreSQL",
    description: ``,
    image: postgres,
  },
  {
    name: "Flask + SQL Alchemy",
    description: ``,
    image: sqlAlchemy,
  },
  {
    name: "Sequelize",
    description: ``,
    image: sequelize,
  },
  {
    name: "Flask",
    description: ``,
    image: flask,
  },
  {
    name: "Express",
    description: ``,
    image: express,
  },
];

const Skills = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;