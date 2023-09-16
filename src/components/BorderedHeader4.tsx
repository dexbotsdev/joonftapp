import { useState } from 'react';
 import { createStyles, Title, Text, Paper, Group, rem } from '@mantine/core';
 import b1 from "../assets/images/b2.png";



const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 1, 
    marginTop: "4rem !important",
    maxWidth: "80rem  !important",  
    width: "100%",
  },
  text: {
    position: 'relative',
    zIndex: 1, 
    margin: "auto !important", 
    width: "60%", 
  },
 
  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Chakra Petch, ${theme.fontFamily}`,
    fontSize: rem(34), 
    margin:"auto",
    lineHeight: 1.2,
    fontWeight: 900,
    marginTop:"3rem",  
    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
    },
  },
  
  highlight: {
    position: 'relative',
    fontFamily: `Chakra Petch, ${theme.fontFamily}`,
    fontSize: rem(44),
    lineHeight: 1.2,
    fontWeight: 900,  
      background: "linear-gradient(194.66deg, #CE13FF 29.51%, #7000FF 52.26%)", 
      backgroundClip: "text",
      textFillColor: "transparent", 
  },

  bottom: {
    position: 'relative',
    zIndex: 1, 
    margin: "auto !important",
    maxWidth: "50rem  !important",  
    width: "80%",
    borderBottom:"20px solid green",
    borderImage: `url(${b1}) 0 0 100 0 repeat`
  },
  
}));
 
export function BorderedHeader4() {
  const { classes } = useStyles();
  const [date, setDate] = useState(new Date(2021, 9, 24));
 
  return (
    <div className={classes.root}>  
    <div className={classes.text}>
                <Title className={classes.title}> Partnerships , Associations & <span className={classes.highlight}> Alliances </span></Title>  
    </div>
    <div className={classes.bottom}> </div>

    </div>
  );
}