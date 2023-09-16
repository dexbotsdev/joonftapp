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
  import image from '../assets/images/slowmist.png';
import { BorderedHeader3 } from './BorderedHeader3';
import btnsvg from '../assets/images/btn.svg';

  const useStyles = createStyles((theme) => ({
    inner: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: `calc(${theme.spacing.xl} * 4)`,
      paddingBottom: `calc(${theme.spacing.xl} * 4)`,
    },
  
    content: {
      maxWidth: rem(480),
      marginRight: `calc(${theme.spacing.xl} * 3)`,
  
      [theme.fn.smallerThan('md')]: {
        maxWidth: '100%',
        marginRight: 0,
      },
    },
  
    title: {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
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
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      borderRadius: theme.radius.sm,
      padding: `${rem(4)} ${rem(12)}`,
    },
  }));
  
  export function SlowMist() {
    const { classes } = useStyles();
    return (
      <div>
        <Container>
          <div className={classes.inner}>
            <div className={classes.content}>
               <BorderedHeader3/>
              <Text color="dimmed" mt="md">
              Slowmist is a well-known cybersecurity firm specializing in blockchain security and auditing. When it comes to conducting a marketplace security audit, Slowmist brings a wealth of expertise.
Experience to the table. Their comprehensive approach focuses on identifying potential vulnerabilities, weaknesses, and risks within the marketplace's infrastructure and smart contracts. Slowmist's team meticulously examines the codebase, architecture.
              </Text>
  
           
              <Group mt={30}>
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
                    marginTop:rem(20),
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
                Read More
              </Button>
              </Group>
            </div>
            <Image src={image} className={classes.image} />
          </div>
        </Container>
      </div>
    );
  }