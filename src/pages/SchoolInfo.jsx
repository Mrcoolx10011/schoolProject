import styled from "styled-components";

const SchoolInfoContainer = styled.div`
  min-height: 100vh; /* Cover the entire page */
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 4rem 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.white};
  max-width: 800px;
  margin: 0 auto 3rem auto;
  line-height: 1.8;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1rem;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

const CardText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
`;

const Icon = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 1rem;
`;

const SchoolInfo = () => {
  return (
    <SchoolInfoContainer>
      <Title>About Our School</Title>
      <Description>
        Our school is dedicated to providing a nurturing and inclusive
        environment where students can grow academically, socially, and
        emotionally. Learn more about our history, mission, and values below.
      </Description>
      <CardContainer>
        <Card>
          <Icon>📚</Icon>
          <CardTitle>Our History</CardTitle>
          <CardText>
            Established in 1995, our school has a rich history of academic
            excellence and community involvement. We take pride in our legacy of
            shaping future leaders.
          </CardText>
        </Card>
        <Card>
          <Icon>🎯</Icon>
          <CardTitle>Our Mission</CardTitle>
          <CardText>
            Our mission is to empower students with the knowledge, skills, and
            values they need to succeed in a rapidly changing world. We focus on
            holistic development and lifelong learning.
          </CardText>
        </Card>
        <Card>
          <Icon>❤️</Icon>
          <CardTitle>Our Values</CardTitle>
          <CardText>
            We believe in integrity, respect, and inclusivity. These core values
            guide everything we do, from classroom instruction to
            extracurricular activities.
          </CardText>
        </Card>
      </CardContainer>
    </SchoolInfoContainer>
  );
};

export default SchoolInfo;
