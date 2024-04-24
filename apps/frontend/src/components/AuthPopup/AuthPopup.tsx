import React, {useState, useEffect} from "react";
import Close from '../../assets/img/Close icon.svg'
import {
  Box,
  Dialog,
  DialogContent,
  TextField,
  Button,
  Typography
} from '@mui/material';

export const AuthPopup = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 return(
  <Box>
    <Button 
      onClick={handleClickOpen}
      sx={{maxWidth: '210px', backgroundColor: '#423A34', borderRadius: '50px', color:'white', padding: '18px 84px', textTransform: 'none'}}>
      <Typography variant='h3'>Вхід</Typography>
    </Button> 
    <Dialog open={open} 
            onClose={handleClose}>
      <Box sx={{
          position: 'relative',
          width: 400,
          padding: '30px'
          }}>
        <Button onClick={handleClose} sx={{
            position: 'absolute',
            right: 30,
            minWidth: 20,
            color: "inherit"
          }}>
            <img src={Close} alt="" width='20px' />
          </Button>
          <Box sx={{
          }}>
            <Typography variant='h3' sx={{fontSize: 16, color: '#000', fontWeight: 500}}>Вхід</Typography>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              marginTop: 2,
              borderRadius: '50px'
            }}>
              <form style={{display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center'}}>
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  label="Електронна пошта"
                  sx={{marginTop: "25px"}}
                />
                <Box sx={{
                  width: '100%',
                  position: 'relative'
                }}>
                  <TextField
                    fullWidth
                    id="password"
                    name="password"
                    label="Пароль"
                    type={'password'}
                    sx={{marginTop: '25px'}}
                  />
                </Box>
                <Button color="primary" variant="contained" fullWidth type="submit" sx={{
                  width: 200,
                  height: 40,
                  marginTop: "25px",
                  borderRadius: '10px',
                }}>
                  Вхід
                </Button>
              </form>
      </Box>
    </Box>

      </Box>
    </Dialog>
  </Box>
 )
}