import { createStyles, Image, Accordion, Grid, Col, Container, Title } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import { IconMinus } from '@tabler/icons-react';
import { ActionIcon } from '@mantine/core';
import { FaqHeader } from './FaqHeader';

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
  },

  title: {
    marginBottom: theme.spacing.md,
    paddingLeft: theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  item: {
    fontSize: theme.fontSizes.sm,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
  },
}));

const placeholder =
  'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.';
/* Rectangle 68 */
 
/* Button color */
 
export function FaqWithImage() {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <Container size="lg">
        <div style={{width:"90%", margin:"auto"}}> 
                <FaqHeader/>
            <Accordion chevronPosition="right" defaultValue="reset-password" variant="separated"
            style={{width:"100%", margin:"auto"}}
            radius="md"
            disableChevronRotation 
            chevron={<ActionIcon variant="filled" color='violet'><IconPlus size="1rem" /></ActionIcon>}
      styles={{
        chevron: {
          '&[data-rotate]': {
            transform: 'rotate(45deg)',
          },
        },
        panel:{width:"100%",
            background: "linear-gradient(176deg, #ce13ff30 0%, #7000ff5c 109.46%);" 
        },
        control:{width:"100%",
            color: "#fff",
            background: "linear-gradient(1deg, #c60fff52 0%, #7001ff 109.46%)"
        }
      }}
      
      >
              <Accordion.Item className={classes.item} value="reset-password">
                <Accordion.Control style={{width:"100%", margin:"auto"}}>How can I reset my password?</Accordion.Control>
                <Accordion.Panel>{placeholder}</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="another-account">
                <Accordion.Control>Can I create more that one account?</Accordion.Control>
                <Accordion.Panel>{placeholder}</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="newsletter">
                <Accordion.Control>How can I subscribe to monthly newsletter?</Accordion.Control>
                <Accordion.Panel>{placeholder}</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="credit-card">
                <Accordion.Control>
                  Do you store credit card information securely?
                </Accordion.Control>
                <Accordion.Panel>{placeholder}</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="payment">
                <Accordion.Control>What payment systems to you work with?</Accordion.Control>
                <Accordion.Panel>{placeholder}</Accordion.Panel>
              </Accordion.Item>
            </Accordion>
            </div>
      </Container>
    </div>
  );
}