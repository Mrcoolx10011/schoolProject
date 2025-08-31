import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.secondary};
  padding: 2rem;
  margin-top: auto;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr; /* Stack items vertically on mobile */
    gap: 1.5rem; /* Adjust gap for mobile */
    padding: 0 1rem; /* Add horizontal padding */
  }
`;

const FooterSection = styled.div`
  h3 {
    color: ${({ theme }) => theme.colors.text};
    font-size: 0.875rem;
    font-weight: 500;
    margin-bottom: 1rem;
    font-family: 'Google Sans', Roboto, sans-serif;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin: 0.5rem 0;
  }

  a {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
    font-size: 0.875rem;
    
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    text-align: center; /* Center text on mobile */
  }
`;

const BottomBar = styled.div`
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  text-align: center;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>About Us</h3>
          <ul>
            <li><Link to="/school-info">School History</Link></li>
            <li><Link to="/school-info">Mission & Vision</Link></li>
            <li><Link to="/facilities">Campus</Link></li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h3>Academics</h3>
          <ul>
            <li><Link to="/academics">Programs</Link></li>
            <li><Link to="/academics">Curriculum</Link></li>
            <li><Link to="/facilities">Facilities</Link></li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h3>Admissions</h3>
          <ul>
            <li><Link to="/admissions">How to Apply</Link></li>
            <li><Link to="/admissions">Requirements</Link></li>
            <li><Link to="/contact-us">Contact</Link></li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h3>Connect</h3>
          <ul>
            <li><Link to="/contact-us">Contact Us</Link></li>
            <li><Link to="/news-events">News & Events</Link></li>
            <li><Link to="/careers">Career</Link></li>
          </ul>
        </FooterSection>
      </FooterContent>
      <BottomBar>
        <p>&copy; 2025 Samkay Public School. All rights reserved.</p>
      </BottomBar>
    </FooterContainer>
  );
};

export default Footer;