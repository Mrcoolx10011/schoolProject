import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.primary}; // Dark Blue
  color: ${({ theme }) => theme.colors.white}; // White
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-wrap: wrap;
    padding: 1rem;
  }
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.25rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    margin-top: 1rem;
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.white}; // White
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent}; // Yellow
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0.5rem 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.white}; // White
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer>
      <Logo>School Name</Logo>
      <MenuButton onClick={toggleMenu}>
        {isOpen ? '✕' : '☰'}
      </MenuButton>
      <Nav isOpen={isOpen}>
        <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
        <NavLink to="/school-info" onClick={() => setIsOpen(false)}>School Info</NavLink>
        <NavLink to="/contact-us" onClick={() => setIsOpen(false)}>Contact Us</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;