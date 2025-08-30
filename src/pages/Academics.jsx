import React from 'react';
import styled from 'styled-components';
import { PageContainer, Title, Section, SubTitle, Text, Grid, Card } from '../styles/SharedStyles';

const ProgramCard = styled(Card)`
  text-align: center;

  h3 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1rem;
  }

  p {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const Academics = () => {
  return (
    <PageContainer>
      <Title>Academics</Title>

      <Section>
        <Text>
          At Samkay Public School, we are committed to providing a holistic and rigorous academic experience that prepares students for success in a rapidly changing world. Our curriculum is designed to foster critical thinking, creativity, and a lifelong love for learning.
        </Text>
        <Text>
          We follow the Central Board of Secondary Education (CBSE) curriculum, integrating innovative teaching methodologies and a student-centered approach.
        </Text>
      </Section>

      <Section>
        <SubTitle>Our Programs</SubTitle>
        <Grid>
          <ProgramCard>
            <h3>Primary School (Grades 1-5)</h3>
            <p>Focus on foundational literacy, numeracy, and environmental studies, with an emphasis on interactive learning and activity-based education.</p>
          </ProgramCard>
          <ProgramCard>
            <h3>Middle School (Grades 6-8)</h3>
            <p>Introduction to specialized subjects, developing analytical skills, and encouraging independent research. Includes science, mathematics, social science, and languages.</p>
          </ProgramCard>
          <ProgramCard>
            <h3>Secondary School (Grades 9-10)</h3>
            <p>Preparation for CBSE board examinations with in-depth subject knowledge, regular assessments, and career counseling to guide future choices.</p>
          </ProgramCard>
          <ProgramCard>
            <h3>Senior Secondary School (Grades 11-12)</h3>
            <p>Offers Science, Commerce, and Humanities streams. Advanced studies, project-based learning, and competitive exam preparation for higher education.</p>
          </ProgramCard>
        </Grid>
      </Section>

      <Section>
        <SubTitle>Curriculum Highlights</SubTitle>
        <Text>
          Our curriculum emphasizes not just academic achievement but also character development, leadership skills, and global awareness. We incorporate:
        </Text>
        <ul>
          <li style={{ color: ({ theme }) => theme.colors.secondary }}>Experiential Learning: Hands-on activities and real-world projects.</li>
          <li style={{ color: ({ theme }) => theme.colors.secondary }}>Digital Literacy: Integration of technology in all subjects.</li>
          <li style={{ color: ({ theme }) => theme.colors.secondary }}>Language Proficiency: Strong focus on English, Hindi, and optional third languages.</li>
          <li style={{ color: ({ theme }) => theme.colors.secondary }}>Arts and Sports: Compulsory participation in extracurricular activities for all-round development.</li>
        </ul>
      </Section>

    </PageContainer>
  );
};

export default Academics;
