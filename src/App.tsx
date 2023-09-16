import { MantineProvider, Text } from '@mantine/core';
import './App.css';
import { useState } from 'react';
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition, Button,
  rem,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantine/ds';
import btnsvg from './assets/images/btn.svg';
import { HeroBullets } from './components/Hero';
import { Partners } from './components/Partners';
import {BorderedHeader} from './components/BorderedHeader';
import { useMantineTheme } from '@mantine/core';
import { CardsCarousel } from './components/Carousel';
import { MintNFT } from './components/MintNFT';
import { SlowMist } from './components/SlowMist';
import { FaqWithImage } from './components/Faq';
import { FooterLinks } from './components/Footer';
import SmallHeaderWithBackground from './components copy/SmallHeaderWithBackground';
import PartnershipsSmall from './components copy/PartnershipsSmall';
import { BorderedHeader4 } from './components/BorderedHeader4';
import { CardPartners } from './components/CardPartners';

const HEADER_HEIGHT = rem(60);
const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 1,
    backgroundColor: "#ffffff1c !important",
    margin: "auto !important",
    maxWidth: "64rem  !important",
    marginTop: "4rem !important",

    borderRadius: "10px",
    borderBottom: "2px solid transparent",
    borderImage: "linear-gradient(0.25turn, rgba(56,2,155,0), rgba(255,0,128), rgba(56,2,155,0))",
    borderImageSlice: 1,
    width: "100%",

  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',

    alignItems: 'center',
    height: '100%',
  },

  links: {

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));

interface HeaderResponsiveProps {
  links: { link: string; label: string }[];
}
const links = [
  { "link": "/about", "label": "Features" },
  { "link": "/pricing", "label": "Pricing" },
  { "link": "/learn", "label": "Learn" },
  { "link": "/community", "label": "Community" }
];


export default function App() {

  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();


  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        close();
      }}
    >
      {link.label}
    </a>
  ));
  return (
    <MantineProvider theme={{ colorScheme: 'dark' ,fontFamily:"Chakra Petch", primaryColor:"violet"}} withGlobalStyles withNormalizeCSS>
      <Container style={{ background: "#14002e" , margin:"0px"}}fluid>
        <div className='ellipse-parent'>
        <Header height={HEADER_HEIGHT} mb={120} className={classes.root}>
          <Container className={classes.header}>
            <MantineLogo size={28} />

            <Group spacing={5} className={classes.header}>
              <Group spacing={5} className={classes.links}>
                {items}
              </Group>
              <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />

              <Transition transition="pop-top-right" duration={200} mounted={opened}>
                {(styles) => (
                  <Paper className={classes.dropdown} withBorder style={styles}>
                    {items}
                  </Paper>
                )}
              </Transition>

              <Button
                component="a"
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/mantinedev"
                styles={(theme) => ({
                  root: {
                    backgroundImage: `url(${btnsvg}) !important`,
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
                Create
              </Button>
            </Group>
          </Container>
        </Header> 
        <HeroBullets /> 
        <Partners /> 
        <BorderedHeader />   
        <CardsCarousel/>
        <MintNFT/>
        <SlowMist />
        <FaqWithImage/>
        
        <BorderedHeader4/>
        <CardPartners/>
        </div>

        <FooterLinks/>
      </Container>
    </MantineProvider>
  );
}