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
import image from "../assets/images/mintNFTImg.png";
import { BorderedHeader } from './BorderedHeader';
import { BorderedHeader2 } from './BorderedHeader2';
import btnsvg from '../assets/images/btn.svg';

const useStyles = createStyles((theme) => ({
    inner: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: `calc(${theme.spacing.xl} * 4)`,
        paddingBottom: `calc(${theme.spacing.xl} * 4)`,
    },

    content: {
        width: "40%",
        marginLeft: "4rem",
        marginRight: `calc(${theme.spacing.xl} * 3)`,

        [theme.fn.smallerThan('md')]: {
            maxWidth: '100%',
            marginRight: 0,
        },
    },

    title: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Chakra Petch, ${theme.fontFamily}`,
        fontSize: rem(24),
        margin: "auto",
        lineHeight: 1.2,
        fontWeight: 900,
        marginTop: "3rem",
        [theme.fn.smallerThan('xs')]: {
            fontSize: rem(18),
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

export function MintNFT() {
    const { classes } = useStyles();
    return (
        <div>
            <Container>
                <div className={classes.inner}>
                    <Image src={image} className={classes.image} />
                    <div className={classes.content}>
                        <BorderedHeader2 />
                        <Text color="dimmed" mt="md"> 

                            As an AI language model, I don't have the capability to mint or create NFTs. Minting an NFT involves the process of tokenizing a unique digital asset and recording it on a blockchain, such as Ethereum.
                            This process is typically done by artists, creators, or individuals who want to establish ownership and authenticity of their digital works. To mint your first NFT, you would need to utilize a platform or marketplace that supports NFT creation and trading.
                        </Text>  
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
                Mint NFT
              </Button></div>
                </div>
            </Container>
        </div>
    );
}