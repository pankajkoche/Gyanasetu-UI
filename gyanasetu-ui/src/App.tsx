
import { useTranslation } from 'react-i18next';
import Header from './components/header/Header';
import Home from './components/home/Home';
import { ThemeProvider, createTheme } from '@mui/material';

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

function App() {
  const { t } = useTranslation();
  return (
    <ThemeProvider theme={theme}>
    <Header/>
    <Home/>
    <h2>{t('welcome')}</h2>
  
    </ThemeProvider>
  );
}

export default App;
