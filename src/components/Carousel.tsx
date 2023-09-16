import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import {
    Card, createStyles, Image,
    Text, Title, Button, useMantineTheme, rem, Container, Group, Stack
} from '@mantine/core';
import bigcard from "../assets/images/BigCard.png";
import ShortInfoWithIcon from '../components copy/ShortInfoWithIcon';
import sm1 from "../assets/images/smallCard1.png";
import sm2 from "../assets/images/smallCard2.png";

const useStyles = createStyles((theme) => ({
    card: {
        height: rem(440),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 900,
        color: theme.white,
        lineHeight: 1.2,
        fontSize: rem(32),
        marginTop: theme.spacing.xs,
    },

    category: {
        color: theme.white,
        opacity: 0.7,
        fontWeight: 700,
        textTransform: 'uppercase',
    },
}));

interface CardProps {
    image: string;
    title: string;
    category: string;
}


export function CardsCarousel() {
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);


    return (
        <Container fluid>
            <Group spacing={12} mt={10}>

                <Card style={{ background: "transparent" }}>
                    <Card.Section>
                        <Image src={bigcard} alt='' height={"20rem"} />
                    </Card.Section>
                </Card>
                <Stack>
                 <ShortInfoWithIcon/>
                 <Group spacing={15} pt={20} style={{ margin: "auto" }}>

                <Card style={{ background: "transparent" }}>
                    <Card.Section>
                        <Image src={sm1} alt='' height={"14rem"} />
                    </Card.Section>
                </Card>
                <Card style={{ background: "transparent" }}>
                    <Card.Section>
                        <Image src={sm2} alt='' height={"14rem"} />
                    </Card.Section>
                </Card> 

            </Group>
                </Stack>

            </Group>
        </Container>
    );
}