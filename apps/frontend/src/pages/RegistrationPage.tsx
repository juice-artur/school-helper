import { Box, Button, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { UserRegisterValues } from "../TypesAndInterfaces"
import { Navigate } from "react-router-dom";

export const RegistrationPage = () => {

    const [isValidEmail, setIsValidEmail] = useState<boolean>(true)
    const [isValidPassword, setIsValidPassword] = useState<boolean>(true)
    // const [error, setError] = useState<string|null>(null)
    const [isSuccessReg, setIsSuccessReg] = useState<boolean>(false)
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<null|string>(null);
    const [showPassword, setShowPassword] = useState(false);


    const [formState, setFormState] = useState<UserRegisterValues>({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
    });

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
            console.log(formState)
        const response = await fetch(`http://localhost:3005/user/activate/teacher`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formState)
        });

        // const res = await response.json();

        console.log(response);

        if (response.ok) {
            setSuccess(true);
            setError(null)
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

    
    return(
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                marginTop: 2,
                borderRadius: '50px',
                maxWidth: '1200px',
                margin: '50px auto'
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
                        id="firstName"
                        name="firstName"
                        label="Ім'я"
                        onChange={handleFormChange}
                        sx={{marginTop: '25px'}}
                    />
                    <TextField
                        fullWidth
                        id="lastName"
                        name="lastName"
                        label="Прізвище"
                        onChange={handleFormChange}
                        sx={{marginTop: '25px'}}
                    />
                <Button color="primary" variant="contained" fullWidth type="submit" sx={{
                    width: 200,
                    height: 40,
                    margin: "25px 0",
                    borderRadius: '10px',
                }}>
                Зареєструватись
                </Button>
            </form>
            {success ?
            <Navigate replace to="/user" />
                :
                <Typography>{error}</Typography>}
            </Box>
    )
}