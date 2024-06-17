
import { useTranslation } from 'react-i18next';
import Header from './components/header/Header';
import Home from './components/home/Home';
import { ThemeProvider, createTheme, styled } from '@mui/material';
import Practice from './components/practice/practice';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalStyles } from '@mui/material';
import Blog from './components/blog/blog';
import { blogData } from './blogJson/intro';
import Dsa from './components/dsa/dsa';



const globalStyles = (
  <GlobalStyles
    styles={{
      a: {
        textDecoration: 'none',
        color: 'inherit',
      },
    }}
  />
);

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

const HEADER_HEIGHT = 65;

const Root = styled('div')({
  marginTop: `${HEADER_HEIGHT}px`,

});
function App() {
  const { t } = useTranslation();
  return (
    <ThemeProvider theme={theme}>
      {globalStyles}
       <Router>
       <Header/>
       <Root>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/practice" element={<Practice />} />
        <Route path='/blog' element={<Blog blogData={blogData}/>}/>
        <Route path='/dsa' element={<Dsa/>}/>
      </Routes>
       </Root>
      
    </Router>
    </ThemeProvider>
  );
}

export default App;
