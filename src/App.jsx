import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SchoolInfo from './pages/SchoolInfo';
import ContactUs from './pages/ContactUs';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyles />
        <Header />
        <Home />
        <SchoolInfo />
        <ContactUs />
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;