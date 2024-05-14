import { Box, Button, Container, Typography } from "@mui/material"
import { useState } from "react"

export const School = () => {

    const [schoolCreated, setSchoolCreated] = useState<boolean>(false);

    const baseUrl =  import.meta.env.VITE_BACKEND_API_URL

    // try{
    // const response = await fetch(`${baseUrl}/school`, {
    //     method: "GET",
    //     credentials: 'include',
    //     headers: {
    //     'Content-Type': 'application/json'
    //     },
    //     });
    //     if (response.ok) {
    //         console.log('School created')
    //         setSchoolCreated(true)
    //     }
    // } catch (error) {
    //     console.log('Fetch error:', error);
    //     setSchoolCreated(false)
    //   }
    
    return (
        <>
        <Empty></Empty>
        <InfoBlock></InfoBlock>
        </>
    )
}

export const Empty = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%', 
                margin: '0 50px'
            }}
        >
            <Box sx={{maxWidth: 800, width: '100%', margin: '0 auto', display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',}}>
                <Typography variant='h3' sx={{color: '#000', textAlign: 'center'}}>Школа не зареєстрована</Typography>
                <Typography align="center" sx={{padding: '20px 0'}}>Ви можете створити школу в системі та запросити до неї викладачів. Вони в свою чергу створюють класи та предмети та завдання для учнів.</Typography>
                <Button sx={{maxWidth: '210px', alignSelf: 'center', backgroundColor: '#423A34', borderRadius: '50px', color:'white', padding: '8px 30px', textTransform: 'none'}}>
                    <Typography>Зареєструвати школу</Typography>
                </Button>
            </Box>
        </Box>
    )
}

export const InfoBlock = () => {
    return (
        <Container>
            <Typography variant='h3' color='black'>Nazva</Typography>
            <Box sx={{display: 'flex', flexDirection: 'row', margin: '25px 0'}}>
                <Typography width= '150px' color='black'>Телефон контактної особи:</Typography>
                <Typography color='black'>Telefone</Typography>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'row', margin: '25px 0'}}>
                <Typography width= '150px' color='black'>Електронна пошта:</Typography>
                <Typography color='black'>Telefone</Typography>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'row', margin: '25px 0'}}>
                <Typography width= '150px' color='black'>Область</Typography>
                <Typography color='black'>Telefone</Typography>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'row', margin: '25px 0'}}>
                <Typography width= '150px' color='black'>Населений пункт</Typography>
                <Typography color='black'>Telefone</Typography>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'row', margin: '25px 0'}}>
                <Typography width= '150px' color='black'>Індекс</Typography>
                <Typography color='black'>Telefone</Typography>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'row', margin: '25px 0'}}>
                <Typography width= '150px' color='black'>Опис</Typography>
                <Typography width= '800px' color='black'>
                Наша школа "Соняшник" - це сучасний навчальний заклад, який дбає про гармонійний розвиток кожного учня. Ми віримо, що кожна дитина має великий потенціал і ми допомагаємо йому розкритися.

Наша освітня програма поєднує в собі традиційні методи навчання з сучасними підходами, що дозволяє нам створити стимулююче середовище для кожного учня. Ми прагнемо розвивати креативне мислення, лідерські якості та соціальну відповідальність.

Наші вчителі - це висококваліфіковані фахівці, які мають багатий досвід роботи з дітьми. Вони створюють індивідуальний підхід до кожного учня, допомагаючи їм досягти найкращих результатів.

У нашій школі "Соняшник" ви знайдете затишну атмосферу, де кожен учень може відчути себе частиною великого та дружнього колективу. Наші учні регулярно беруть участь у різноманітних заходах та конкурсах, що сприяє їхньому загальному розвитку та самореалізації.

Обираючи школу "Соняшник", ви обираєте високу якість освіти та затишну атмосферу, де ваша дитина зможе розкрити свій потенціал та стати успішним у майбутньому.
                </Typography>
            </Box>
        </Container>
    )
}