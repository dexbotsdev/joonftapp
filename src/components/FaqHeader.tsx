import { useState } from 'react';
 import { createStyles, Title, Text, Paper, Group, rem } from '@mantine/core';
 import b1 from "../assets/images/b2.png";



const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 1, 
    marginTop: "4rem !important",
    maxWidth: "55rem  !important",  
    width: "100%",
    borderBottom:"20px solid green",
    borderImage: `url(${b1}) 0 0 310 0 repeat`
  },
  textX: {
    position: 'relative',
    zIndex: 1, 
    margin: "auto !important", 
     textAlign:"center",
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
      fontSize: rem(21),
    },
    
  },
  
  highlight: {
    position: 'relative',
    fontFamily: `Chakra Petch, ${theme.fontFamily}`,
    fontSize: rem(34),
    lineHeight: 1.2,
    fontWeight: 900,  
      background: "linear-gradient(194.66deg, #CE13FF 29.51%, #7000FF 52.26%)", 
      backgroundClip: "text", 
      textFillColor: "transparent", 
  },
  
}));
 
export function FaqHeader() {
  const { classes } = useStyles();
  
  return (
    <div className={classes.root}>  
    <div className={classes.textX}>
                <Title className={classes.title}> Frequently Asked  <span className={classes.highlight}> Questions </span></Title>  
    </div>
    </div>
  );
}