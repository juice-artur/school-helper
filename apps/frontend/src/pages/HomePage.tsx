// import React from "react";
import { Box } from '@mui/material';
import Logo from '../assets/img/Logo.jpg'

export const HomePage = ():JSX.Element => {
    return(
        <Box style={{width: '100%', height: '100vh', position: 'absolute', top: '0px', overflow: "hidden", backgroundColor: 'black'}}>
            <img src={Logo} style={{width: '100%', position: 'absolute', top: '0px'}}/>
        </Box>
    )
};
