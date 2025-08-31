import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useTheme } from '../ThemeContext';

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${({ theme }) => theme.elevation[1]};
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-wrap: wrap;
    padding: 0.75rem 1rem;
  }
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  margin: 0;
  font-family: 'Product Sans', Arial, sans-serif;
  font-weight: 400;
  
  span {
    display: inline-block;
    &:nth-child(1) { color: #4285f4; }
    &:nth-child(2) { color: #ea4335; }
    &:nth-child(3) { color: #fbbc05; }
    &:nth-child(4) { color: #4285f4; }
    &:nth-child(5) { color: #34a853; }
    &:nth-child(6) { color: #ea4335; }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.25rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    margin-top: 1rem;
    background: ${({ theme }) => theme.colors.background};
    padding: 1rem;
    border-radius: 8px;
    box-shadow: ${({ theme }) => theme.elevation[1]};
    position: absolute; /* Position the nav absolutely */
    top: 100%; /* Position it right below the header */
    left: 0; /* Align to the left edge */
    width: 100%; /* Take full width */
    box-sizing: border-box; /* Include padding in width */
  }
`;

const NavGroup = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    width: 100%;
    gap: 0.5rem; /* Adjust gap for vertical stacking */
  }
`;

const ActionButton = styled(Link)`
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  font-family: 'Google Sans', Roboto, sans-serif;
  transition: all 0.2s ease;

  &:hover {
    background: #1557b0;
    color: #fff;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    text-align: center;
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  transition: all 0.2s ease;
  font-family: 'Google Sans', Roboto, sans-serif;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.surface};
  }

  &.active {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.hoverBackground};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0.75rem 1rem;
    width: 100%;
    border-radius: 0;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.surface};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: background-color 0.2s ease;
  margin-left: 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.surface};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-left: 0;
    margin-top: 1rem;
    width: 100%;
    text-align: center;
    border-radius: 4px;
  }
`;

const ToggleWrapper = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    display: flex;
    justify-content: center; /* Center the toggle button on mobile */
    margin-top: 0.5rem;
  }
`;

const Header = ({ isOpen, setIsOpen }) => {
  const { currentTheme, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer>
      <Logo>
        <span>S</span>
        <span>a</span>
        <span>m</span>
        <span>k</span>
        <span>a</span>
        <span>y</span>
      </Logo>
      <MenuButton onClick={toggleMenu}>
        {isOpen ? '✕' : '☰'}
      </MenuButton>
      <Nav isOpen={isOpen}>
        <NavGroup>
          <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/academics" onClick={() => setIsOpen(false)}>Academics</NavLink>
          <NavLink to="/facilities" onClick={() => setIsOpen(false)}>Facilities</NavLink>
          <NavLink to="/school-info" onClick={() => setIsOpen(false)}>About</NavLink>
        </NavGroup>
        <NavGroup>
          <NavLink to="/contact-us" onClick={() => setIsOpen(false)}>Contact</NavLink>
          <ActionButton to="/admissions" onClick={() => setIsOpen(false)}>Apply Now</ActionButton>
          <ToggleWrapper>
            <ToggleButton onClick={toggleTheme}>
              {currentTheme === 'light' ? '🌙' : '☀️'}
            </ToggleButton>
          </ToggleWrapper>
        </NavGroup>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;