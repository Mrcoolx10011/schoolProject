import React from 'react';
import styled from 'styled-components';
import { PageContainer, Title, Section, SubTitle, Text, Grid, Card } from '../styles/SharedStyles';

const FacilityCard = styled(Card)`
  text-align: center;

  h3 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 1.1rem;
      margin-bottom: 0.75rem;
    }
  }

  svg {
    width: 60px;
    height: 60px;
    margin-bottom: 1rem;
    fill: ${({ theme }) => theme.colors.primary};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      width: 50px;
      height: 50px;
      margin-bottom: 0.75rem;
    }
  }

  p {
    color: ${({ theme }) => theme.colors.secondary};
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 0.85rem;
    }
  }
`;

const Facilities = () => {
  return (
    <PageContainer>
      <Title>Facilities</Title>

      <Section>
        <Text>
          Samyak Global Academy provides state-of-the-art facilities designed to create an optimal learning environment and support the holistic development of our students. We believe that a conducive infrastructure plays a crucial role in academic and extracurricular pursuits.
        </Text>
      </Section>

      <Section>
        <SubTitle>Our Campus Highlights</SubTitle>
        <Grid>
          <FacilityCard>
            <svg viewBox="0 0 24 24">
              <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
            </svg>
            <h3>Modern Classrooms</h3>
            <p>Spacious, well-lit, and technologically equipped classrooms with interactive smart boards to facilitate engaging lessons.</p>
          </FacilityCard>
          <FacilityCard>
            <svg viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8h16v10zm-2-9H6V6h12v3z"/>
            </svg>
            <h3>Advanced Science Labs</h3>
            <p>Fully equipped Physics, Chemistry, and Biology laboratories for hands-on experimentation and practical learning.</p>
          </FacilityCard>
          <FacilityCard>
            <svg viewBox="0 0 24 24">
              <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/>
            </svg>
            <h3>Computer Labs</h3>
            <p>High-tech computer labs with broadband internet access, promoting digital literacy and coding skills.</p>
          </FacilityCard>
          <FacilityCard>
            <svg viewBox="0 0 24 24">
              <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"/>
            </svg>
            <h3>School Library</h3>
            <p>A vast collection of books, journals, and digital resources, providing a quiet space for research and reading.</p>
          </FacilityCard>
          <FacilityCard>
            <svg viewBox="0 0 24 24">
              <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 2c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm-1 14h2v2h-2zm0-10h2v8h-2z"/>
            </svg>
            <h3>Sports Facilities</h3>
            <p>Expansive playgrounds for football, cricket, basketball courts, and indoor sports facilities for various athletic activities.</p>
          </FacilityCard>
          <FacilityCard>
            <svg viewBox="0 0 24 24">
              <path d="M4 18h16c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm0-6h16c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1z"/>
            </svg>
            <h3>Multi-Purpose Auditorium</h3>
            <p>A spacious auditorium for school assemblies, cultural events, seminars, and theatrical performances.</p>
          </FacilityCard>
        </Grid>
      </Section>

      <Section>
        <SubTitle>Health & Safety</SubTitle>
        <ul>
          <li style={{ color: ({ theme }) => theme.colors.secondary }}>24/7 CCTV Surveillance for student safety.</li>
          <li style={{ color: ({ theme }) => theme.colors.secondary }}>Well-maintained infirmary with a qualified nurse on duty.</li>
          <li style={{ color: ({ theme }) => theme.colors.secondary }}>Fire safety equipment and regular drills.</li>
          <li style={{ color: ({ theme }) => theme.colors.secondary }}>Safe and secure transportation facilities.</li>
        </ul>
      </Section>

    </PageContainer>
  );
};

export default Facilities;
