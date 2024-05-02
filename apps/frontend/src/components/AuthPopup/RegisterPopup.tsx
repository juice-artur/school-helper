import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material"
import { useState } from 'react'
import { UserRegisterValues } from "../../TypesAndInterfaces"


export const RegisterPopup = () => {
    const [isValidEmail, setIsValidEmail] = useState<boolean>(true)
    const [isValidPassword, setIsValidPassword] = useState<boolean>(true)
    const [error, setError] = useState<string|null>(null)


    const [formState, setFormState] = useState<UserRegisterValues>({
        email: "",
        password: "",
        firstname: "",
        lastname: "",
    });

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const response = await fetch(`http://localhost:3005/auth/signin`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formState)
        });

        const res = await response.json();

        console.log(response);

        if (response.ok) {
            localStorage.setItem('token', res.accessToken);
            window.location.reload();
        } else {
            setError(response.statusText);
        }

    };

    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.name === 'email') {
            setIsValidEmail(/@/.test(event.target.value))
        }

        setFormState({
        ...formState,
        [event.target.name]: event.target.value,
        });

        console.log('Input!')
    };
return (
    <Box>
                {/* <Typography variant='h3' sx={{fontSize: 16, color: '#000', fontWeight: 500}}>Реєстрація</Typography> */}
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: 2,
                    borderRadius: '50px'
                    }}>
                    <form style={{display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center'}}
                        onSubmit={(event: React.FormEvent<HTMLFormElement>) => handleSubmit(event)}>                        
                        <TextField
                            fullWidth
                            id="email"
                            name="email"
                            label="Електронна пошта"
                            onChange={handleFormChange}
                            sx={{marginTop: "25px"}}
                        />
                        <TextField
                            fullWidth
                            id="password"
                            name="password"
                            label="Пароль"
                            type={'password'}
                            onChange={handleFormChange}
                            sx={{marginTop: '25px'}}
                        />
                        <TextField
                            fullWidth
                            id="firstname"
                            name="firstname"
                            label="Ім'я"
                            onChange={handleFormChange}
                            sx={{marginTop: '25px'}}
                        />
                        <TextField
                            fullWidth
                            id="lastname"
                            name="lastname"
                            label="Прізвище"
                            onChange={handleFormChange}
                            sx={{marginTop: '25px'}}
                        />
                    <FormControlLabel control={<Checkbox />} label="Я директор" />          
                    <Button color="primary" variant="contained" fullWidth type="submit" sx={{
                        width: 200,
                        height: 40,
                        margin: "25px 0",
                        borderRadius: '10px',
                    }}>
                    Зареєструватись
                    </Button>
                </form>
                </Box>
            </Box>
)
}