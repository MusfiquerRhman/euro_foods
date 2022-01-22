import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
// MaterialUI Elements
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ListItemText from "@mui/material/ListItemText";
import Input from '@mui/material/Input';
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import CardHeader from '@mui/material/CardHeader';
import CardActionArea from '@mui/material/CardActionArea';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import style from "../styles/productStyle"

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Product(props) {
    const { 
        name, 
        waight, 
        pkt, 
        price, 
    } = props;
    
    const [value, setValue] = useState("")
    const [totalPrice, setTotalPrice] = useState("Enter Amount")
    const [snakeBarOpen, setSnakebarOpen] = useState(false)
    const [flashMessage, setFlashMEssage] = useState("");
    const [snakeBarType, setSnakeBarType] = useState("success");

    const handleChange = (event) => {
        setValue(Math.abs(event.target.value));
        if(event.target.value !== ""){
            setTotalPrice(`Price: ${price * Math.abs(event.target.value)}`);
        } else {
            setSnakeBarType("error")
            setTotalPrice("Add to cart")
        }
    };

    const photo = `fish.png`;
    const classes = style();

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnakebarOpen(false);
    };

    const handleClick = () => {
        if(value > 0){
            setSnakebarOpen(true);
            setSnakeBarType("success")
            setFlashMEssage(`Added ${name} to cart`)
        }
        else {
            setSnakebarOpen(true);
            setSnakeBarType("error")
            setFlashMEssage(`Enter a valid amount`)
        }
    }


    return (
        <div>
            <Snackbar 
                open={snakeBarOpen} 
                autoHideDuration={6000} 
                onClose={handleCloseSnackbar}
            >
                <Alert 
                    onClose={handleCloseSnackbar} 
                    severity={snakeBarType} 
                    sx={{ width: '100%' }}
                >
                    {flashMessage}
                </Alert>
            </Snackbar>
            <Paper elevation={6}>
                <CardActionArea>
                    <CardHeader
                        title={`🥗 ${name}`}
                        subheader={`${pkt} - ${waight}`}
                    />
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="120"
                        image={photo}
                    />
                    <CardContent  className={classes.offer}>
                        <Typography 
                            gutterBottom 
                            variant="subtitle1" 
                            component="div"
                        >
                            <ListItemText primary={`${price} Taka / pkt`}/>
                        </Typography>
                    </CardContent>
                </CardActionArea>

                    <CardActions>
                        <FormControl sx={{ marginRight: 1, marginLeft: 1, width: "25ch" }} variant="outlined" focused>
                            <Input
                                id="outlined-adornment-weight"
                                value={value}
                                color= "secondary"
                                onChange={(e) => {handleChange(e)}}
                                
                                endAdornment={
                                    <InputAdornment position="end">
                                        pkt
                                    </InputAdornment>
                                }
                                aria-describedby="outlined-weight-helper-text"    
                                type="number"                    
                            />
                            <FormHelperText id="outlined-weight-helper-text">
                                {totalPrice}
                            </FormHelperText>
                        </FormControl>
                        <Button 
                            size="small" 
                            variant="contained"
                            onClick={handleClick}
                        >
                            Add to cart
                        </Button>
                    </CardActions>
            </Paper>
        </div>
   );
}
