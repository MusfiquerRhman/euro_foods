import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import { DrawerHeader } from '../styles/drawerStyles';
import Typography from '@mui/material/Typography';
import style from "../styles/drawerStyle"

const drawerWidth = 300;

export default function PersistentDrawerLeft({ handleDrawerClose, open }) {
    const theme = useTheme();
    const classes = style();
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    <ListItem button key={"Producs"}>
                        <ListItemIcon>
                            <img src="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-fish-animals-victoruler-flat-victoruler.png" className={classes.icon} />
                        </ListItemIcon>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ display: { sm: 'block' } }}
                        >
                            <Link to="/" >Fresh Water Fishes</Link>
                        </Typography>
                    </ListItem>
                    <ListItem button key="fish">
                        <ListItemIcon>
                            <img src="https://img.icons8.com/plasticine/100/000000/seafood.png" className={classes.icon} />
                        </ListItemIcon>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ display: { sm: 'block' } }}
                        >
                            <Link to="/" >Frozen Finger Food</Link>
                        </Typography>
                    </ListItem>
                    <ListItem button key="seafood">
                        <ListItemIcon>
                            <img src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-sea-landscape-justicon-flat-justicon.png" className={classes.icon} />
                        </ListItemIcon>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ display: { sm: 'block' } }}
                        >
                            <Link to="/" >Frozen Seafood</Link>
                        </Typography>
                    </ListItem>
                    <ListItem button key="veg">
                        <ListItemIcon>
                            <img src="https://img.icons8.com/external-filled-outline-satawat-anukul/64/000000/external-food-food-filled-outline-filled-outline-satawat-anukul-12.png" className={classes.icon} />
                        </ListItemIcon>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ display: { sm: 'block' } }}
                        >
                            <Link to="/" >Frozen Vegetable</Link>
                        </Typography>
                    </ListItem>
                    <Divider />
                    <ListItem button key="Bakery">
                        <ListItemIcon>
                            <img className={classes.icon} src="https://img.icons8.com/external-icongeek26-flat-icongeek26/64/000000/external-pastry-food-levitation-icongeek26-flat-icongeek26.png"/>
                        </ListItemIcon>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ display: { sm: 'block' } }}
                        >
                            <Link to="/" >Bakery and pastry</Link>
                        </Typography>
                    </ListItem>
                    <ListItem button key="Yogurt">
                        <ListItemIcon>
                            <img className={classes.icon} src="https://img.icons8.com/external-others-rabbit-jes/62/000000/external-sweet-birthday-and-party-filled-outline-others-rabbit-jes-2.png"/>
                        </ListItemIcon>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ display: { sm: 'block' } }}
                        >
                            <Link to="/" >Yogurt and Sweet</Link>
                        </Typography>
                    </ListItem>
                    <ListItem button key="Fruits">
                        <ListItemIcon>
                            <img className={classes.icon} src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-fruits-nature-resource-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"/>
                        </ListItemIcon>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ display: { sm: 'block' } }}
                        >
                            <Link to="/" >Fresh Fruits</Link>
                        </Typography>
                    </ListItem>
                    <ListItem button key="Masala">
                        <ListItemIcon>
                            <img className={classes.icon} src="https://img.icons8.com/external-icongeek26-flat-icongeek26/64/000000/external-spices-india-icongeek26-flat-icongeek26.png"/>
                        </ListItemIcon>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ display: { sm: 'block' } }}
                        >
                            <Link to="/" >Masala Items</Link>
                        </Typography>
                    </ListItem>
                </List>
                <Divider />
            </Drawer>
        </Box>
    );
}
