import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box} from '@mui/material';
import {Navbar} from "../components/Navbar/Navbar";
// import {Footer} from "../../components/Footer";

const theme = createTheme({

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