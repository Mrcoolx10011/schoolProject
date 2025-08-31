import React from 'react';
import styled from 'styled-components';
import { PageContainer, Title, Section, SubTitle, Text, Card, Grid } from '../styles/SharedStyles';

const TeamCard = styled(Card)`
  text-align: center;

  svg {
    width: 100px; /* Adjusted size for team icons */
    height: 100px; /* Adjusted size for team icons */
    border-radius: 50%;
    margin-bottom: 1rem;
    border: 3px solid ${({ theme }) => theme.colors.primary};
    fill: ${({ theme }) => theme.colors.primary}; /* Icon color */

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      width: 80px;
      height: 80px;
      margin-bottom: 0.75rem;
    }
  }

  h3 {
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 0.5rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 1.1rem;
    }
  }

  p {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 0.9rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 0.8rem;
    }
  }
`;

const SchoolInfo = () => {
  return (
    <PageContainer>
      <Title>About Samkay Public School</Title>

      <Section>
        <SubTitle>Our History</SubTitle>
        <Text>
          Founded in 1985, Samkay Public School has a rich history of academic excellence and community service. What began as a small institution with a vision to provide quality education has grown into a renowned educational hub, shaping the lives of thousands of students over the decades.
        </Text>
        <Text>
          Our journey has been marked by continuous innovation, dedicated faculty, and a commitment to nurturing well-rounded individuals. We pride ourselves on our inclusive environment and our ability to adapt to modern educational needs while preserving our core values.
        </Text>
      </Section>

      <Section>
        <SubTitle>Mission & Vision</SubTitle>
        <Text>
          <strong style={{ color: ({ theme }) => theme.colors.text }}>Mission:</strong> To empower students with knowledge, skills, and values to become responsible global citizens and lifelong learners.
        </Text>
        <Text>
          <strong style={{ color: ({ theme }) => theme.colors.text }}>Vision:</strong> To be a leading educational institution recognized for its academic rigor, innovative pedagogy, and commitment to fostering creativity, critical thinking, and social responsibility.
        </Text>
      </Section>

      <Section>
        <SubTitle>Our Values</SubTitle>
        <ul>
          <li style={{ color: ({ theme }) => theme.colors.secondary }}><strong style={{ color: ({ theme }) => theme.colors.text }}>Excellence:</strong> Striving for the highest standards in all endeavors.</li>
          <li style={{ color: ({ theme }) => theme.colors.secondary }}><strong style={{ color: ({ theme }) => theme.colors.text }}>Integrity:</strong> Upholding honesty, ethics, and moral principles.</li>
          <li style={{ color: ({ theme }) => theme.colors.secondary }}><strong style={{ color: ({ theme }) => theme.colors.text }}>Respect:</strong> Fostering an environment of mutual respect and understanding.</li>
          <li style={{ color: ({ theme }) => theme.colors.secondary }}><strong style={{ color: ({ theme }) => theme.colors.text }}>Innovation:</strong> Embracing new ideas and creative approaches to learning.</li>
          <li style={{ color: ({ theme }) => theme.colors.secondary }}><strong style={{ color: ({ theme }) => theme.colors.text }}>Community:</strong> Building a strong, supportive, and inclusive school community.</li>
        </ul>
      </Section>

      <Section>
        <SubTitle>Leadership Team</SubTitle>
        <Grid>
          <TeamCard>
            <svg viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
            <h3>Dr. Ananya Sharma</h3>
            <p>Principal</p>
            <Text>With over 25 years of experience in education, Dr. Sharma leads our school with a vision for academic and holistic development.</Text>
          </TeamCard>
          <TeamCard>
            <svg viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
            <h3>Mr. Rajeev Kumar</h3>
            <p>Vice Principal</p>
            <Text>Mr. Kumar is instrumental in curriculum development and student welfare, bringing innovative educational strategies.</Text>
          </TeamCard>
          <TeamCard>
            <svg viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
            <h3>Ms. Priya Singh</h3>
            <p>Head of Academics</p>
            <Text>Ms. Singh oversees all academic programs, ensuring high-quality instruction and learning outcomes.</Text>
          </TeamCard>
        </Grid>
      </Section>

    </PageContainer>
  );
};

export default SchoolInfo;
