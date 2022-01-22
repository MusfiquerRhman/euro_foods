import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import SearchIcon from '@mui/icons-material/Search';
import MenuItem from '@mui/material/MenuItem';
import { Search, SearchIconWrapper, StyledInputBase } from "../styles/navBarStyles"
import CategoryDrawer from "./categoryDrawer"
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Link } from 'react-router-dom';
import Style from "../styles/drawerStyle"
import List from '@mui/material/List';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const ResponsiveAppBar = () => {
    const classes = Style();
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [open, setOpen] = useState(false);
    const [aboutMe, setAboutMe] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleAboutMe = () => {
        setAboutMe(true);
    }

    const handleCloseAboutMe = () => {
        setAboutMe(false);
    };

    return (
        <div>
            <Dialog
                open={aboutMe}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleCloseAboutMe}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Made by Musfiquer Rhman"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        This FrontEnd was developed by Musfiquer Rhman as per the requirement of the assignment. <br></br><br></br>
                        <b>Email:</b> musfiquerrhman@gmail.com <br></br>
                        <b>Phone:</b> 01959793534
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseAboutMe}>Disagree</Button>
                    <Button onClick={handleCloseAboutMe}>Agree</Button>
                </DialogActions>
            </Dialog>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        >
                            EuroFoods
                        </Typography>

                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                <MenuItem key="nav-Cate" onClick={handleCloseNavMenu}>
                                    <Button
                                        key="nav-category"
                                        onClick={handleDrawerOpen}
                                        sx={{ my: 0.25, color: 'black', display: 'block' }}
                                    >
                                        Categories
                                    </Button>
                                </MenuItem>
                                <MenuItem key="mav-me" onClick={handleCloseNavMenu}>
                                    <Button
                                        key="nav-category"
                                        onClick={handleAboutMe}
                                        sx={{ my: 0.25, color: 'black', display: 'block' }}
                                    >
                                        About Me
                                    </Button>
                                </MenuItem>
                            </Menu>
                        </Box>
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <Button
                                key="Categories"
                                onClick={handleDrawerOpen}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Categories
                            </Button>
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Button
                                key="About"
                                onClick={handleAboutMe}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                About Me
                            </Button>
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                <List>
                                    <ListItem button key="setting">
                                        <ListItemIcon>
                                            <img className={classes.icon} src="https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/64/000000/external-setting-user-interface-kmg-design-detailed-outline-kmg-design.png" />
                                        </ListItemIcon>
                                        <Typography
                                            variant="h6"
                                            component="div"
                                            sx={{ display: { sm: 'block' } }}
                                        >
                                            <Link to="/" >Settings</Link>
                                        </Typography>
                                    </ListItem>
                                    <ListItem button key="profile">
                                        <ListItemIcon>
                                            <img className={classes.icon} src="https://img.icons8.com/ios/50/000000/user-male-circle.png" />
                                        </ListItemIcon>
                                        <Typography
                                            variant="h6"
                                            component="div"
                                            sx={{ display: { sm: 'block' } }}
                                        >
                                            <Link to="/" >Profile</Link>
                                        </Typography>
                                    </ListItem>
                                    <ListItem button key="history">
                                        <ListItemIcon>
                                            <img className={classes.icon} src="https://img.icons8.com/ios/50/000000/reminders.png" />
                                        </ListItemIcon>
                                        <Typography
                                            variant="h6"
                                            component="div"
                                            sx={{ display: { sm: 'block' } }}
                                        >
                                            <Link to="/" >Purchase History</Link>
                                        </Typography>
                                    </ListItem>
                                </List>
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <CategoryDrawer handleDrawerClose={handleDrawerClose} open={open} />
        </div>
    );
};

export default ResponsiveAppBar;
