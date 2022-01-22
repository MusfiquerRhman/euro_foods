import React from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import style from '../styles/homePageSytle'
import ProductsList from "./productList";
import {freshWaterFish, seaFood} from "../productItesms"
import Footer from "./footer";

const HomePage = () => {
    const classes = style()

    return (
        <React.Fragment>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: '100%',
                        height: '25vh',
                    },
                }}
            >
                <Paper elevation={5} sx={{ width: "100%" }} className={classes.banner}>
                    <Typography variant="h1"
                        gutterBottom
                        component="div"
                        className={classes.heading}
                        align="center"
                        sx={{ margin: "auto 0", marginTop: "1rem" }}
                    >
                        EuroFood Products
                    </Typography>
                </Paper>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: '100%',
                    },
                }}
            >
                <Paper elevation={0} sx={{ width: "100%" }} className={classes.categoryBanner}>
                    <Typography variant="h3"
                        gutterBottom
                        component="div"
                        className={classes.headingSecondary}
                        align="center"
                        sx={{ margin: "auto 0", marginTop: "1rem" }}
                    >
                        Fresh Water Fishes
                    </Typography>
                    <ProductsList  listOfItems={freshWaterFish}/>
                </Paper>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: '100%',
                    },
                }}
            >
                <Paper elevation={0} sx={{ width: "100%" }} className={classes.categoryBanner}>
                    <Box sx={{ height: "10vh"}}>
                        <Typography variant="h3"
                            gutterBottom
                            component="div"
                            className={classes.headingSecondary}
                            align="center"
                            sx={{ margin: "auto 0", marginTop: "1rem" }}
                        >
                            Fresh Seafood
                        </Typography>
                    </Box>
                    <ProductsList listOfItems={seaFood}/>
                </Paper>
            </Box>

            <Footer />
        
        </React.Fragment>
    )
}

export default HomePage;