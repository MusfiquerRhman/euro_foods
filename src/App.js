import './App.css'
import React from 'react';
import NavBar from "./components/navbar"
import Grid from '@mui/material/Grid';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/homepage';

function App() {
    return (
        <BrowserRouter>
            <Grid container direction="column">
                <Grid item><NavBar/></Grid>
                    <Grid item container justifyContent={"center"}>
                        <Grid item xs={12} sm={10} lg={8}>
                        <Routes >
                            <Route exact path='/' element={<HomePage/>} />
                        </Routes >
                        </Grid>
                    </Grid>
                </Grid>
        </BrowserRouter>
    )
}

export default App;
