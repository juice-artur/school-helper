import { Box, Button, Typography } from "@mui/material"

export const Class = () => {
    return (
        <Empty/>
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
                <Typography variant='h3' sx={{color: '#000', textAlign: 'center'}}>У Вас поки що немає класів</Typography>
                <Typography align="center" sx={{padding: '20px 0'}}>Ви можете створити клас,якщо його ще немає в системі та приєднати до нього учнів. Якщо клас уже створено, ви можете додати свій предмет до у розділі "Предмети" для подальшої публікації завдань та тестів</Typography>
                <Button sx={{maxWidth: '210px', alignSelf: 'center', backgroundColor: '#423A34', borderRadius: '50px', color:'white', padding: '8px 30px', textTransform: 'none'}}>
                    <Typography>Створити клас</Typography>
                </Button>
            </Box>
        </Box>
    )
}