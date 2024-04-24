import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Logo from '../../assets/img/Logo image.svg'
import { Link, useLocation } from 'react-router-dom';
import { AuthPopup } from '../AuthPopup/AuthPopup';

export const Navbar = () => {
  const location: string = useLocation().pathname;


  return (
    <AppBar position="static" color='transparent' sx={{height:'80px', margin: '0px auto', padding: '40px 0', alignItems:'center', justifyContent: 'center', 
    backgroundColor: location.includes("schools") || location.includes("blog") || location.includes("about") || location.includes("contacts") ? "#998B71" : ''}}>
      <Container sx={{ zIndex:'2', display: 'flex', justifyContent:'space-between', fontSize: '20px', maxWidth: '1200px'}}>
        <Box sx={{ display: 'block', alignItems: 'center', justifyContent: 'center' }}>
          <Link to='/'>
          <img src={Logo} alt='Логотип "Освіта Онлайн"' />
          </Link>
        </Box>
    
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <Box sx={{ display: { xs: 'none', md: 'flex', flexDirection: 'raw', gap: '10px', marginRight: '50px' } }}>
            <Link to='/schools' style={{textDecoration: 'none'}}>
                <Typography variant='h3' textAlign="center" padding={'10px'}>Заклади освіти</Typography>
            </Link>
            <Link to='/blog' style={{textDecoration: 'none'}}>
                <Typography variant='h3' textAlign="center" padding={'10px'}>Блог</Typography>
            </Link>
            <Link to='/about' style={{textDecoration: 'none'}}>
                <Typography variant='h3' textAlign="center" padding={'10px'}>Про нас</Typography>
            </Link>
            <Link to='/contacts' style={{textDecoration: 'none'}}>
                <Typography variant='h3' textAlign="center" padding={'10px'}>Контакти</Typography>
            </Link>
          </Box>
          {/* <Button sx={{maxWidth: '210px', backgroundColor: '#423A34', borderRadius: '50px', color:'white', padding: '18px 84px', textTransform: 'none'}}>
            <Typography variant='h3'>Вхід</Typography>
          </Button>  */}
          <AuthPopup/>
        </Box>
      </Container>

    </AppBar>
  );
}
