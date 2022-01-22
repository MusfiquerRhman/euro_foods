import React from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import style from '../styles/footerSytle'

const Footer = () =>{
    const classes = style()
    return(
    <Box
        sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
                m: 1,
                width: '100%',
                height: "5vh"
            },
        }}
    >
        <Paper elevation={0} sx={{ width: "100%" }} className={classes.categoryBanner}>
            <Box sx={{ height: "100%"}}>
                <Typography variant="h5"
                    gutterBottom
                    component="div"
                    className={classes.headingSecondary}
                    align="center"
                    sx={{ margin: "auto", padding: '0.25rem'}}
                >
                    Thank You!
                </Typography>
            </Box>
        </Paper>
    </Box>
    )
}

export default Footer