import {
    createStyles,
    Image,
    Container,
    Title,
    Button,
    Group,
    Text,
    List,
    ThemeIcon,
    rem,
  } from '@mantine/core';
  import { IconCheck } from '@tabler/icons-react';
  import btnAsvg from '../assets/images/btn.svg';
  import btnBsvg from '../assets/images/ButtonOutline.svg';
import top from "../assets/images/textTopBorderNFT.png";

  const useStyles = createStyles((theme) => ({
    inner: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: `calc(${theme.spacing.xl} * 4)`,
      paddingBottom: `calc(${theme.spacing.xl} * 4)`,
     },
  
    content: {
      maxWidth: "110rem",
      marginRight: `calc(${theme.spacing.md} * 3)`,
  
      [theme.fn.smallerThan('md')]: {
        maxWidth: '100%',
        marginRight: 0,
      },
    },
  
    title: {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      fontFamily: `Chakra Petch, ${theme.fontFamily}`,
      fontSize: rem(44),
      lineHeight: 1.2,
      fontWeight: 900,
        
      [theme.fn.smallerThan('xs')]: {
        fontSize: rem(28),
      },
    },
  
    control: {
      [theme.fn.smallerThan('xs')]: {
        flex: 1,
      },
    },
  
    image: {
      flex: 1,
  
      [theme.fn.smallerThan('md')]: {
        display: 'none',
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
        border: "10px double orange",
        borderImage: `url(${top}) 25 0 0 0 repeat`
    },
  }));
  
  export function HeroBullets() {
    const { classes } = useStyles();
    return (
      
        <Container>
          <div className={classes.inner}>
            <div className={classes.content}>
              <Title className={classes.title}>
                <span className={classes.highlight}> NFT </span>Sell it in the marketplace and make money
              </Title>
              <Text color="dimmed" mt="md">
              Creating and selling NFTs in the marketplace has become a popular way to monetize digital creations. To get started, you first need to create your own NFT (Non-Fungible Token), 
              </Text>
   
              <Group mt={30}>
              <Button
                component="a"
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/mantinedev"
                styles={(theme) => ({
                  root: {
                    backgroundImage: `url(${btnAsvg}) !important`,
                    backgroundColor: "transparent",
                    backgroundRepeat: "no-repeat",
                    border: 0,
                    height: rem(42),

                    width: "8.5rem",
                    '&:not([data-disabled])': theme.fn.hover({
                      backgroundColor: "transparent",
                    }),
                  },
                  inner: {
                    margin: "auto",
                  }
                })}
              >
                Explore
              </Button>
              <Button
                component="a"
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/mantinedev"
                styles={(theme) => ({
                  root: {
                    backgroundImage: `url(${btnBsvg}) !important`,
                    backgroundColor: "transparent",
                    backgroundRepeat: "no-repeat",
                    marginTop:"3px",
                    border: 0,
                    height: "2.75rem",
                    backgroundSize:"contain",

                    width: "10.5rem",
                    '&:not([data-disabled])': theme.fn.hover({
                      backgroundColor: "transparent",
                    }),
                  },
                  inner: {
                    margin: "auto",
                  }
                })}
              >
                Go To Market
              </Button>
              </Group>
            </div>
           </div>
        </Container>
     );
  }