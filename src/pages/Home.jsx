import React, { memo } from 'react';
import { Container, Typography, Grid, Box, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import {
    FoodBankOutlined, SpaOutlined, CoffeeMakerOutlined, PhoneAndroidOutlined, LaptopWindowsOutlined,
    LiveTvOutlined, CheckroomOutlined, SportsEsportsOutlined, ChildCareOutlined, FitnessCenterOutlined,
    GrassOutlined, CategoryOutlined
} from '@mui/icons-material';

import { List } from '../components';
import { images } from '../assets';

const useStyles = makeStyles(theme => ({
    root: {
        // backgroundColor: 'yellow',
        height: '100%',
        paddingTop: 0,
    },
}));

const Home = () => {
    const classes = useStyles();

    return (
        <Container maxWidth='xl' disableGutters className={classes.root}>
            <Box my={6}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <List
                            listItems={[
                                {
                                    title: 'Supermarket',
                                    icon: <FoodBankOutlined />,
                                },
                                {
                                    title: 'Health & Beauty',
                                    icon: <SpaOutlined />,
                                },
                                {
                                    title: 'Home & Office',
                                    icon: <CoffeeMakerOutlined />,
                                },
                                {
                                    title: 'Phones & Tablets',
                                    icon: <PhoneAndroidOutlined />,
                                },
                                {
                                    title: 'Computing',
                                    icon: <LaptopWindowsOutlined />,
                                },
                                {
                                    title: 'Electronics',
                                    icon: <LiveTvOutlined />,
                                },
                                {
                                    title: 'Fashion',
                                    icon: <CheckroomOutlined />,
                                },
                                {
                                    title: 'Gaming',
                                    icon: <SportsEsportsOutlined />,
                                },
                                {
                                    title: 'Baby Products',
                                    icon: <ChildCareOutlined />,
                                },
                                {
                                    title: 'Sporting Goods',
                                    icon: <FitnessCenterOutlined />,
                                },
                                {
                                    title: 'Garden & Outdoors',
                                    icon: <GrassOutlined />,
                                },
                                {
                                    title: 'Other categories',
                                    icon: <CategoryOutlined />,
                                },
                            ]}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Paper style={{ height: '100%' }}>
                            <img src={images.image1} height="100%" width="100%" alt="" />
                        </Paper>
                    </Grid>
                    <Grid container item xs={3} spacing={2}>
                        <Grid item xs={12}>
                            <Paper>
                                <Typography variant='h4'>
                                    Hello
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper>
                                <Typography variant='h4'>
                                    Hello
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default memo(Home);
