import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Facilities from './pages/Facilities';
import SchoolInfo from './pages/SchoolInfo';
import ContactUs from './pages/ContactUs';
import NewsEvents from './pages/NewsEvents';
import Careers from './pages/Careers';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyles isOpen={isMenuOpen} />
        <Header isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/school-info" element={<SchoolInfo />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/news-events" element={<NewsEvents />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;