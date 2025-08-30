import React from 'react';
import styled from 'styled-components';
import { PageContainer, Title, Section, SubTitle, Text, Card, Button } from '../styles/SharedStyles';

const JobCard = styled(Card)`
  text-align: left;

  h3 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }

  p {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: 0.5rem;
  }

  .location {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: 1rem;
  }
`;

const Careers = () => {
  return (
    <PageContainer>
      <Title>Careers at Samkay Public School</Title>

      <Section>
        <Text>
          Join our dedicated team of educators and staff who are passionate about shaping the future. Samkay Public School offers a vibrant and supportive work environment with opportunities for professional growth and development.
        </Text>
        <Text>
          We are always looking for talented individuals who share our commitment to excellence and innovation in education. Explore our current openings and become a part of the Samkay family!
        </Text>
      </Section>

      <Section>
        <SubTitle>Current Openings</SubTitle>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '1.5rem' }}>
          <JobCard>
            <h3>Primary School Teacher</h3>
            <p className="location">Location: Education City, India</p>
            <Text>We are seeking enthusiastic and qualified primary school teachers to join our dynamic team. Candidates should have a strong understanding of child development and engaging teaching methodologies.</Text>
            <Button as="a" href="mailto:careers@samkayschool.edu?subject=Application for Primary School Teacher">Apply Now</Button>
          </JobCard>
          <JobCard>
            <h3>Secondary School Teacher (Science)</h3>
            <p className="location">Location: Education City, India</p>
            <Text>An exciting opportunity for a passionate science teacher to inspire students in Physics, Chemistry, and Biology at the secondary level.</Text>
            <Button as="a" href="mailto:careers@samkayschool.edu?subject=Application for Secondary School Science Teacher">Apply Now</Button>
          </JobCard>
          <JobCard>
            <h3>Admissions Counselor</h3>
            <p className="location">Location: Education City, India</p>
            <Text>We are looking for an experienced admissions counselor to guide prospective families through the admission process and promote the school's values.</Text>
            <Button as="a" href="mailto:careers@samkayschool.edu?subject=Application for Admissions Counselor">Apply Now</Button>
          </JobCard>
          <JobCard>
            <h3>Sports Coach</h3>
            <p className="location">Location: Education City, India</p>
            <Text>A dedicated sports coach with expertise in various sports to foster physical fitness and teamwork among students.</Text>
            <Button as="a" href="mailto:careers@samkayschool.edu?subject=Application for Sports Coach">Apply Now</Button>
          </JobCard>
        </div>
      </Section>

      <Section>
        <SubTitle>Why Work With Us?</SubTitle>
        <ul>
          <li style={{ color: ({ theme }) => theme.colors.secondary }}>Competitive salary and benefits package.</li>
          <li style={{ color: ({ theme }) => theme.colors.secondary }}>Opportunities for professional development and training.</li>
          <li style={{ color: ({ theme }) => theme.colors.secondary }}>A supportive and collaborative work environment.</li>
          <li style={{ color: ({ theme }) => theme.colors.secondary }}>Chance to make a real difference in students' lives.</li>
        </ul>
      </Section>

    </PageContainer>
  );
};

export default Careers;
