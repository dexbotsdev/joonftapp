import { useState } from 'react';
 import { createStyles, UnstyledButton, Text, Paper, Group, rem } from '@mantine/core';
 

import a from "../assets/images/opensea.png";
import b from "../assets/images/binance.png"
import c from "../assets/images/Bitmex.png"
import d from "../assets/images/coinbase.png"
import e from "../assets/images/solana.png"


const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 1,
    justifyContent:"space-between",
    backgroundColor: "#ffffff1c !important",
    marginTop: "4rem !important",
    maxWidth: "64rem  !important", 
    padding:'1rem !important',
    borderRadius: "10px", 
    width: "100%",
  },
 
  stat: {
    minWidth: rem(98),
    paddingTop: theme.spacing.xl,  
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between', 
    backgroundColor:"transparent",
  },
 
  
}));

const data = [
  { icon: a, label: 'Running' },
  { icon: b, label: 'Swimming' },
  { icon: c, label: 'Bike' },
  { icon: d, label: 'Bike' },
  { icon: e, label: 'Bike' },
];

export function Partners() {
  const { classes } = useStyles();
  const [date, setDate] = useState(new Date(2021, 9, 24));

  const stats = data.map((stat) => (
       <img  src={stat.icon}  />  
  ));

  return (
    <div className={classes.root}> 
      <Group sx={{ flex: 1 }}  position="center" grow>{stats}</Group>
    </div>
  );
}