import React from 'react';
import { Container, Box, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { LocalMallOutlined, FlightTakeoffOutlined, Stars, ConfirmationNumberOutlined } from '@mui/icons-material';

import { CardComponent } from '../components';

const useStyles = makeStyles(theme => ({
    root: {
        height: '100%',
    },
    icons: {
        width: '100%',
        height: '100%',
        padding: theme.spacing(1),
        borderRadius: '50%',
        color: '#fff',
    },
    cardStyleText: {
        textTransform: 'capitalize',
    },
}))

const Page2 = () => {
    const classes = useStyles();

    return (
        <Container maxWidth="xl" disableGutters className={classes.root}>
            <Box >
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={3}>
                        <CardComponent
                            cardItems={[
                                {
                                    title: 'Office Stores',
                                    icon: <LocalMallOutlined fontSize='large'
                                        className={classes.icons}
                                        style={{ backgroundColor: '#276076' }}
                                    />,

                                }
                            ]}
                            cardStyle={classes.cardStyleText}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <CardComponent
                            cardItems={[
                                {
                                    title: 'Jumia Global',
                                    icon: <FlightTakeoffOutlined fontSize='large'
                                        className={classes.icons}
                                        style={{ backgroundColor: '#0141CE' }}
                                    />,
                                }
                            ]}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <CardComponent
                            cardItems={[
                                {
                                    title: 'Jumia Food',
                                    icon: <Stars fontSize='large'
                                        className={classes.icons}
                                        style={{ backgroundColor: '#FF9900' }}
                                    />,
                                }
                            ]}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <CardComponent
                            cardItems={[
                                {
                                    title: 'Bus Tickets',
                                    icon: <ConfirmationNumberOutlined fontSize='large'
                                        className={classes.icons}
                                        style={{ backgroundColor: '#498E0E' }}
                                    />,
                                }
                            ]}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );

    // return React.createElement('div', {}, React.createElement('h1', {}, 'Page 2'));
};

export default Page2;