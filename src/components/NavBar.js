import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { Button, Menu, AppBar, Box, Toolbar, IconButton, Typography, InputBase, Badge, MenuItem } from '@mui/material';
import { HelpOutline, More, Search, AccountCircleOutlined, ShoppingCartOutlined, BookmarkBorderOutlined, CreditCardOutlined, ExitToAppOutlined, LocalShippingOutlined, CancelOutlined, ChatOutlined } from '@mui/icons-material';

import MenuComponent from './MenuComponent';
import { images } from '../assets';

const SearchDiv = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    border: `1px solid ${alpha(theme.palette.grey[300], 0.35)}`,
    // backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '100ch',
        },
    },
}));

export default function NavBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <HelpOutline />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <ShoppingCartOutlined />
                    </Badge>
                </IconButton>
                <p>ShoppingCartOutlined</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircleOutlined />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={{ p: 1 }} >
                    <Box sx={{ flexGrow: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        <img src={images.logo} alt="logo" />
                    </Typography>
                    <SearchDiv >
                        <SearchIconWrapper>
                            <Search />
                        </SearchIconWrapper>
                        <StyledInputBase
                            variant="outlined"
                            fullWidth
                            placeholder="Search products, brands and categories"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </SearchDiv>
                    <Button
                        variant="contained"
                        color="secondary"
                    >
                        <Typography variant="body1" >
                            <strong>SEARCH</strong>
                        </Typography>
                    </Button>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton disableRipple disableFocusRipple>
                            <MenuComponent
                                buttonTitle="HI, BRIAN"
                                buttonIcon={AccountCircleOutlined}
                                MenuItems={[
                                    {
                                        title: "My Account",
                                        icon: <AccountCircleOutlined />,
                                    },
                                    {
                                        title: "My Orders",
                                        icon: <ShoppingCartOutlined />,
                                    },
                                    {
                                        title: "Saved Items",
                                        icon: < BookmarkBorderOutlined />,
                                    },
                                    {
                                        title: "Jumia Credit",
                                        icon: <CreditCardOutlined />
                                    },
                                    {
                                        title: "LOGOUT",
                                        icon: <ExitToAppOutlined />,
                                    }
                                ]}
                            />
                        </IconButton>
                        <IconButton disableFocusRipple disableRipple>
                            <MenuComponent
                                buttonTitle="Help"
                                buttonIcon={HelpOutline}
                                MenuItems={[
                                    {
                                        title: "Help Center",
                                        icon: <HelpOutline />,
                                    },
                                    {
                                        title: "Place and Track Order",
                                        icon: <LocalShippingOutlined />,
                                    },
                                    {
                                        title: "Order Cancellation",
                                        icon: <CancelOutlined />,
                                    },
                                    {
                                        title: "Returns & Refunds",
                                        icon: <LocalShippingOutlined />,
                                    },
                                    {
                                        title: "Payment and Jumia Account",
                                        icon: <CreditCardOutlined />,
                                    },
                                    {
                                        title: "Live Help",
                                        icon: <ChatOutlined />,
                                    },
                                ]}
                            />
                        </IconButton>
                        <IconButton disableRipple disableFocusRipple color='inherit'>
                            <ShoppingCartOutlined />
                            <Typography variant="h6" noWrap>Cart</Typography>
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <More />
                        </IconButton>
                    </Box>
                    <Box sx={{ flexGrow: 1 }} />
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}
