import { Grid, rem, Text, Paper, createStyles, Stack, Button } from '@mantine/core';
import bg from "../assets/images/cardbg.png"
import metamask from "../assets/images/metamask.png"

const useStyles = createStyles((theme) => ({
    root: {
        position: 'relative',
        zIndex: 1,
        justifyContent: "space-between",
        maxWidth: "64rem  !important",
        padding: '1rem !important',
        width: "100%",
    },

    stat: {
        minWidth: rem(98),
        paddingTop: theme.spacing.xl,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: "transparent",
    },


}));

export function CardPartners() {
    const { classes } = useStyles();
    return (
        <div className={classes.root}>

            <Grid justify="space-between" grow mt="5rem">
                <Grid.Col span={2}>
                    <Paper style={{ backgroundImage: `url(${bg})`, backgroundSize: "contain", height: "15rem", backgroundRepeat: "no-repeat", padding: "1.75rem" }}>
                        <Stack align="center" spacing="lg" >
                            <img src={metamask} />
                            <Text>Metamask</Text>
                        </Stack>
                    </Paper>
                </Grid.Col>
                <Grid.Col span={2}>
                    <Paper style={{ backgroundImage: `url(${bg})`, backgroundSize: "contain", height: "15rem", backgroundRepeat: "no-repeat", padding: "1.75rem" }}>
                        <Stack align="center" spacing="lg" >
                            <img src={metamask} />
                            <Text>Metamask</Text>
                        </Stack>
                    </Paper>
                </Grid.Col>
                <Grid.Col span={2}>
                    <Paper style={{ backgroundImage: `url(${bg})`, backgroundSize: "contain", height: "15rem", backgroundRepeat: "no-repeat", padding: "1.75rem" }}>
                        <Stack align="center" spacing="lg" >
                            <img src={metamask} />
                            <Text>Metamask</Text>
                        </Stack>
                    </Paper>
                </Grid.Col>
                <Grid.Col span={2}>
                    <Paper style={{ backgroundImage: `url(${bg})`, backgroundSize: "contain", height: "15rem", backgroundRepeat: "no-repeat", padding: "1.75rem" }}>
                        <Stack align="center" spacing="lg" >
                            <img src={metamask} />
                            <Text>Metamask</Text>
                        </Stack>
                    </Paper>
                </Grid.Col>


            </Grid>
        </div>
    );
}