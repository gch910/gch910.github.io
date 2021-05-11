import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "#fff",
    background: "rgba(162, 0, 255, 0.25)",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#fff",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "tomato",
  },
  subtitle1: {
    color: "tan",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Work Experience and Education
      </Typography>
      <Box component="div" className={classes.timeLine}>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2014
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Berklee College of Music
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Bachelor's of Music
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            I began my studies in music at one of the most respected and rigorous music schools in the world.  At Berklee, I studied under and worked with numerous world class musicians, which lead me to a life as a professional musician.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2019
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Professional Musician / Retail Management
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
           Leader of Gabriel Harris Group, Session Musician, Teacher.  Assistant Manager at J. Crew.
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
             After Berklee I worked as a professional musician, playing gigs as the lead guitar player, singer and songwriter of my own band.  I also did session work for other recording artists as well as taught over 30 students guitar and music theory.  I also worked part time as an assistant manager at J. Crew during this time.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2020
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            App Academy - Full Stack Javascript & Python
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            App Academy - Full Time Immersive Bootcamp
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Before starting at App Academy I did 6 months of disciplined self study, learning the fundamentals of Javascript, including advanced data structures and algorithms.  At App Academy's 24-week immersive bootcamp, I learned to refine these skills, building 4 full stack applications in a very short period of time.  I worked on projects with some of the most talented and hard-working people I have ever met and greatly expanded my passion for software development.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2021
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Software Engineer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Currently Reviewing Job Offers
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            I am now on the rewarding path of applying for my first official Software Engineering position and I'm diligently comparing job offers to find the right fit for me.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Resume;
