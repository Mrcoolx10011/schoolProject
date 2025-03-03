import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Cover the entire page */
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.backgroundGradientStart}, ${({ theme }) => theme.colors.backgroundGradientEnd});
  padding: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
`;

const Title = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.text};
  max-width: 600px;
  line-height: 1.8;
  background: rgba(255, 255, 255, 0.8); /* Semi-transparent white background */
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1rem;
    padding: 1rem;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <Title>Welcome to Our School</Title>
      <Description>
        We provide quality education for your children, fostering a nurturing environment where every student can thrive and achieve their full potential.
      </Description>
    </HomeContainer>
  );
};

export default Home;