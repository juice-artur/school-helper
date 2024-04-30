import { Box, Button, TextField, Typography } from "@mui/material"

export const LoginPopup = () => {
    return(
            <Box>
                {/* <Typography variant='h3' sx={{fontSize: 16, color: '#000', fontWeight: 500}}>Вхід</Typography> */}
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
                    margin: "25px 0",
                    borderRadius: '10px',
                    }}>
                    Увійти
                    </Button>
                </form>
                </Box>
            </Box>
    )
    
}