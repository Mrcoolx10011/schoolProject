import styled from 'styled-components';

export const PageContainer = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 2rem;
  font-family: 'Google Sans', Arial, sans-serif;
  font-weight: 400;
  position: relative;
  padding-bottom: 1rem;
  text-align: center;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Section = styled.section`
  margin-bottom: 3rem;
`;

export const SubTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-family: 'Google Sans', Arial, sans-serif;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 8px;
  padding: 2rem;
  box-shadow: ${({ theme }) => theme.colors.cardShadow};
  transition: transform 0.2s, box-shadow 0.2s;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.elevation[2]};
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-family: 'Google Sans', Arial, sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #1557b0; /* Keep specific hover for primary button */
  }
`;
