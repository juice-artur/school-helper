import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material"
import { useState } from 'react'
import { UserRegisterValues } from "../../TypesAndInterfaces"

interface RegisterPopupProps{
    backToLoginPopup: () => void  
}

export const RegisterPopup = ({ backToLoginPopup }: RegisterPopupProps) => {
    const [isValidEmail, setIsValidEmail] = useState<boolean>(true)
    const [isValidPassword, setIsValidPassword] = useState<boolean>(true)
    // const [error, setError] = useState<string|null>(null)
    const [isSuccessReg, setIsSuccessReg] = useState<boolean>(false)
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [iamDirector, setIamDirector] = useState(false)


    const [formState, setFormState] = useState<UserRegisterValues>({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const checked = event.target.checked;
        setIamDirector(checked);
      };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        const baseUrl =  import.meta.env.VITE_BACKEND_API_URL
        let link = baseUrl + ( iamDirector ? '/auth/signup/director' :  '/auth/signup' )

        event.preventDefault();
        console.log(formState)
        console.log (link)
        const response = await fetch(link, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formState)
        });
    
        console.log(response);
    
        if (response.ok) {
            setSuccess(true);
            setError(false)
            setTimeout(() => {
            backToLoginPopup();
            }, 1000)
        } else {
            setError(true);
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
                    <FormControlLabel control={<Checkbox checked={iamDirector}
      onChange={handleChange} />} label="Я директор" />          
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