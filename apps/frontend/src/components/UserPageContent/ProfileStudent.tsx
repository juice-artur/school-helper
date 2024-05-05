import { Box, Button, TextField, Typography } from "@mui/material"
import { useState } from "react"
import school from '../../assets/img/shool.jpg'


export const ProfileStudent = () => {

    const [ profilePhoto, setProfilePhoto ] = useState<boolean>(false)

    return (
        <>
        <Typography variant='h4'>Профіль</Typography>
        <Box sx = {{boxShadow: '0px 4px 15px rgba(3, 2, 2, 0.25)',
                    borderRadius: '15px'}} 
                    maxWidth={800} 
                    border={'none'} 
                    margin={'20px'} 
                    display="flex" 
                    flexDirection={'column'} 
                    justifyContent={'space-between'}
                    padding={'30px'}>
            <Box sx={{display:"flex",
                    flexDirection:'row',
                    justifyContent: 'space-between'}}>
                
            <Box sx={{width: '200px', height: '200px', borderRadius: '50%', backgroundColor: 'black', color: 'white', overflow: 'hidden', position: 'relative'}}>
                <img src={school} alt="" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%'}} />
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '10px 50px'}}>
                <Typography>Прізвище</Typography>
                <Typography>Ім'я</Typography>
                <Typography>По батькові</Typography>
                <Typography>Телефон</Typography>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                <TextField size="small" ></TextField>
                <TextField size="small"></TextField>
                <TextField size="small"></TextField>
                <TextField size="small"></TextField>
            </Box>
            </Box>

            <Button sx={{maxWidth: '210px', alignSelf: 'flex-end', backgroundColor: '#423A34', borderRadius: '50px', color:'white', padding: '8px 30px', textTransform: 'none'}}>
      <Typography>Зберегти</Typography>
    </Button>        </Box>
        </>
    )
}