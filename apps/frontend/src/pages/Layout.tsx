import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box} from '@mui/material';
import {Navbar} from "../components/Navbar/Navbar";
// import {Footer} from "../../components/Footer";

const theme = createTheme({
  palette: {
    primary: {
      main: '#423A34'
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: '1200px',
        },
      },
    },
  },
  typography: {
    h1: {
      fontFamily: 'Inter, normal',
      fontWeight: 700,
      fontSize: 58,
      color: '#FFFFFF'
    },
    h2: {
      fontFamily: 'Inter, normal',
      fontSize: 36,
      fontWeight: 400,
      color: '#fff'
    },
    h3: {
      fontFamily: 'Inter, normal',
      fontSize: 20,
      fontWeight: 300,
      color: '#fff'
    },  
    h4: {
      fontFamily: 'Inter, normal',
      fontSize: 20,
      fontWeight: 300,
      color: '#000'
    },
}
})

export const Layout = (props:any):JSX.Element => {
    return(
        <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          boxSizing: 'border-box',
        }}>
          <Navbar/>
          <Box sx={{
            minHeight: 'calc(100vh - 395px)'
          }}>
            {props.children}
          </Box>
          {/* <Footer/> */}
        </Box>
      </ThemeProvider>
    )
 }