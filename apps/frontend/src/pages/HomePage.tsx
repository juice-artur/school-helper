import { Box, Button, Typography } from '@mui/material';
import Logo from '../assets/img/Logo.jpg'
import school from '../assets/img/shool.jpg'
import { useAppDispatch, useAppSelector } from '../hooks';
import { increment } from '../store/reducers/tokenSlice';
import { Link } from 'react-router-dom';

export const HomePage = ():JSX.Element => {
    const test = useAppSelector(state => state.token)
    console.log(test)
    const dispatch = useAppDispatch()
    return(
        <Box style={{width: '100%', height: '100vh', position: 'absolute', top: '0px', overflow: "hidden", backgroundColor: 'black'}}>
            <img src={Logo} style={{width: '100%', top: '0px'}}/>
            <Button sx={{position: 'absolute', top: '70vh', right: '10vw', maxWidth: '340px', backgroundColor: '#F5DD84', borderRadius: '50px', padding: '25px 52px'}}>
                <Typography variant='h2' sx={{textTransform: 'none'}}>
                Приєднатися
                </Typography>
            </Button>
        </Box>
    )
};
