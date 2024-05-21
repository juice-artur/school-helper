import { Box, Typography } from "@mui/material"
import chnu from '../assets/img/chnu.jpg'
import us from '../assets/img/us.jpg'

export const AboutPage = () => {

    return(
        <Box sx={{}}>
            <Typography variant='h2' color='black' sx={{padding: '20px 0'}}>Про нас</Typography>
            <img src={us} style={{width: '500px'}}/>
            <Typography variant='h3' color='black'>{aboutDescription}</Typography>
        </Box>
    )
}

const aboutDescription = `Ми — команда ентузіастів, які прагнуть зробити освіту доступнішою та ефективнішою для всіх. Наша мета — створити інноваційну платформу для навчальних закладів, яка полегшить управління освітніми процесами та забезпечить комфортну взаємодію між вчителями, студентами та батьками.
Ми маємо талановитих програмістів, які спеціалізуються на сучасних веб-технологіях. Вони створюють надійну та безпечну інфраструктуру платформи, забезпечуючи її стабільну роботу.
Наші креативні дизайнери працюють над тим, щоб платформа була не лише функціональною, а й естетично привабливою та зручною у використанні. Вони створюють інтуїтивно зрозумілий інтерфейс для користувачів різного віку.
Команда аналітиків досліджує потреби навчальних закладів та їхніх учасників, щоб наша платформа відповідала найвищим стандартам та вимогам сучасної освіти.
`