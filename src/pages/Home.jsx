import React, { memo } from 'react';
import { Container, Grid, Box, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import {
    FoodBankOutlined, SpaOutlined, CoffeeMakerOutlined, PhoneAndroidOutlined, LaptopWindowsOutlined,
    LiveTvOutlined, CheckroomOutlined, SportsEsportsOutlined, ChildCareOutlined, FitnessCenterOutlined,
    GrassOutlined, CategoryOutlined, HelpOutlined, Inventory2Outlined, CurrencyExchangeOutlined,
} from '@mui/icons-material';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

import { ListComponent, CardComponent } from '../components';
import { images } from '../assets';

const useStyles = makeStyles(theme => ({
    root: {
        height: '100%',
        paddingTop: 0,
    },
}));

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const Home = () => {
    const classes = useStyles();

    return (
        <Container maxWidth='lg' disableGutters className={classes.root}>
            <Box my={6}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <ListComponent
                            listItems={[
                                {
                                    title: 'Supermarket',
                                    icon: <FoodBankOutlined fontSize='small' />,
                                },
                                {
                                    title: 'Health & Beauty',
                                    icon: <SpaOutlined fontSize='small' />,
                                },
                                {
                                    title: 'Home & Office',
                                    icon: <CoffeeMakerOutlined fontSize='small' />,
                                },
                                {
                                    title: 'Phones & Tablets',
                                    icon: <PhoneAndroidOutlined fontSize='small' />,
                                },
                                {
                                    title: 'Computing',
                                    icon: <LaptopWindowsOutlined fontSize='small' />,
                                },
                                {
                                    title: 'Electronics',
                                    icon: <LiveTvOutlined fontSize='small' />,
                                },
                                {
                                    title: 'Fashion',
                                    icon: <CheckroomOutlined fontSize='small' />,
                                },
                                {
                                    title: 'Gaming',
                                    icon: <SportsEsportsOutlined fontSize='small' />,
                                },
                                {
                                    title: 'Baby Products',
                                    icon: <ChildCareOutlined fontSize='small' />,
                                },
                                {
                                    title: 'Sporting Goods',
                                    icon: <FitnessCenterOutlined fontSize='small' />,
                                },
                                {
                                    title: 'Garden & Outdoors',
                                    icon: <GrassOutlined fontSize='small' />,
                                },
                                {
                                    title: 'Other categories',
                                    icon: <CategoryOutlined fontSize='small' />,
                                },
                            ]}
                        />
                    </Grid>
                    <Grid item xs={7}>
                        <Paper style={{ height: '100%', display: 'flex' }}>
                            <Carousel
                                style={{ height: '100%' }}
                                className="carousel-container"
                                swipeable={true}
                                draggable={true}
                                showDots={true}
                                responsive={responsive}
                                ssr={true} // means to render carousel on server-side.
                                infinite={true}
                                autoPlay={true}
                                autoPlaySpeed={2000}
                                keyBoardControl={true}
                                customTransition="transform 500ms ease-in-out"
                                transitionDuration={2000}
                                containerClass="carousel-container"
                                removeArrowOnDeviceType={["tablet", "mobile"]}
                                dotListClass="custom-dot-list-style"
                            // itemClass="carousel-item-padding-10-px"
                            >
                                <img src={images.carousel1} height="100%" alt="" />
                                <img src={images.carousel3} height="100%" alt="" />
                                <img src={images.carousel4} height="100%" alt="" />
                            </Carousel>
                        </Paper>
                    </Grid>
                    <Grid container item xs={2} spacing={3}>
                        <Grid item xs={12}>
                            <CardComponent
                                cardItems={[
                                    {
                                        title: 'Help Center',
                                        subtitle: 'Guide To Customer Care',
                                        icon: <HelpOutlined />,
                                    },
                                    {
                                        title: 'Easy Return',
                                        subtitle: 'Quick Refund',
                                        icon: <Inventory2Outlined />,
                                    },
                                    {
                                        title: 'Sell on Jumia',
                                        subtitle: 'Millions Of Visitors',
                                        icon: <CurrencyExchangeOutlined />,
                                    },
                                ]}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <CardComponent
                                gif={images.carousel2}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Container >
    );
}

export default memo(Home);
