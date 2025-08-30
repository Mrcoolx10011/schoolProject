import React from 'react';
import styled from 'styled-components';
import { PageContainer, Title, Section, SubTitle, Text, Card, Grid } from '../styles/SharedStyles';

const EventCard = styled(Card)`
  text-align: left;

  svg {
    width: 60px;
    height: 60px;
    margin-bottom: 1rem;
    fill: ${({ theme }) => theme.colors.primary};
  }

  h3 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }

  p {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.secondary};
  }

  .date {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: 1rem;
  }
`;

const NewsEvents = () => {
  return (
    <PageContainer>
      <Title>News & Events</Title>

      <Section>
        <Text>
          Stay up-to-date with the latest happenings at Samkay Public School! This section features important announcements, upcoming events, and highlights from our school community.
        </Text>
      </Section>

      <Section>
        <SubTitle>Latest News</SubTitle>
        <Grid>
          <EventCard>
            <svg viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-15h2v6h-2zm0 8h2v2h-2z"/>
            </svg>
            <h3>Annual Sports Day Success!</h3>
            <p class="date">October 26, 2024</p>
            <Text>Our annual sports day was a resounding success, with students showcasing their athletic prowess and sportsmanship.</Text>
          </EventCard>
          <EventCard>
            <svg viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1 2h2v2h-2zm0-18h2v12h-2z"/>
            </svg>
            <h3>Science Exhibition 2024</h3>
            <p class="date">September 15, 2024</p>
            <Text>Students from all grades participated in our annual science exhibition, presenting innovative projects and experiments.</Text>
          </EventCard>
          <EventCard>
            <svg viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-10h2v4h-2zm0-4h2v2h-2z"/>
            </svg>
            <h3>Parent-Teacher Meet</h3>
            <p class="date">August 20, 2024</p>
            <Text>A successful parent-teacher meeting was held to discuss student progress and foster collaboration between home and school.</Text>
          </EventCard>
        </Grid>
      </Section>

      <Section>
        <SubTitle>Upcoming Events</SubTitle>
        <ul>
          <li style={{ color: ({ theme }) => theme.colors.secondary }}><strong>November 10, 2024:</strong> Annual Cultural Fest</li>
          <li style={{ color: ({ theme }) => theme.colors.secondary }}><strong>December 5, 2024:</strong> Winter Carnival</li>
          <li style={{ color: ({ theme }) => theme.colors.secondary }}><strong>January 15, 2025:</strong> Republic Day Celebrations</li>
        </ul>
      </Section>
    </PageContainer>
  );
};

export default NewsEvents;
