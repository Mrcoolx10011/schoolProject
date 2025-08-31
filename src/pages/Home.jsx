import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
`;

const Title = styled.h1`
  font-size: 5rem;
  font-family: 'Product Sans', Arial, sans-serif;
  margin-bottom: 1rem;
  font-weight: 400;
  text-align: center;
  line-height: 1.2;
  
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
    font-size: 3rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2.25rem; /* Even smaller font for very small mobiles */
  }
`;

const Description = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.secondary};
  max-width: 600px;
  line-height: 1.6;
  margin: 1.5rem auto;
  text-align: center;
  font-family: 'Roboto', Arial, sans-serif;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1rem;
    padding: 0 1rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin: 2rem 0;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    width: 80%;
    max-width: 300px;
  }
`;

const PrimaryButton = styled(Link)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  font-family: 'Google Sans', arial, sans-serif;
  font-size: 14px;
  padding: 0 24px;
  height: 44px;
  cursor: pointer;
  user-select: none;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  font-weight: 500;

  &:hover {
    background-color: #1557b0; /* Still a specific hover color for primary */
    border-color: #1557b0;
    box-shadow: ${({ theme }) => theme.elevation[1]};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

const SecondaryButton = styled(Link)`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  font-family: 'Google Sans', arial, sans-serif;
  font-size: 14px;
  padding: 0 24px;
  height: 44px;
  cursor: pointer;
  user-select: none;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  font-weight: 500;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverBackground};
    box-shadow: ${({ theme }) => theme.elevation[1]};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

const HeroSection = styled.section`
  background: linear-gradient(to bottom, ${({ theme }) => theme.colors.background}, ${({ theme }) => theme.colors.surface});
  width: 100%;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 3rem 1rem; /* Adjust padding for tablets */
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 2rem 1rem; /* Adjust padding for mobiles */
  }
`;

const FeaturesSection = styled.section`
  background: ${({ theme }) => theme.colors.surface};
  width: 100%;
  padding: 4rem 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 3rem 1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 2rem 1rem;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr; /* Stack items vertically on mobile */
    gap: 1rem;
  }
`;

const FeatureCard = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  padding: 1.5rem; /* Reduced from 2rem */
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.colors.cardShadow};
  transition: transform 0.2s ease;
  text-align: left;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.elevation[2]};
  }

  h3 {
    color: ${({ theme }) => theme.colors.primary};
    font-family: 'Google Sans', arial, sans-serif;
    font-size: 1.1rem; /* Reduced from 1.25rem */
    margin-bottom: 0.75rem; /* Reduced from 1rem */
    font-weight: 500;
  }

  p {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 0.8rem; /* Reduced from 0.875rem */
    line-height: 1.5; /* Adjusted line-height for better readability with smaller font */
  }

  svg {
    width: 40px; /* Reduced from 48px */
    height: 40px; /* Reduced from 48px */
    margin-bottom: 0.75rem; /* Reduced from 1rem */
    fill: ${({ theme }) => theme.colors.primary}; /* Google Blue */
  }
`;

const EventsSection = styled.section`
  background: ${({ theme }) => theme.colors.background};
  width: 100%;
  padding: 4rem 2rem;
  text-align: center;
`;

const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 2rem auto;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
`;

const EventPhotoCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.colors.cardShadow};
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.elevation[2]};
  }

  .icon-container {
    width: 100%;
    height: 180px; /* Maintain height for visual consistency */
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.hoverBackground}; /* Light blue background for icons */
    svg {
      width: 80px; /* Larger icon size for events */
      height: 80px;
      fill: ${({ theme }) => theme.colors.primary};
    }
  }

  .event-info {
    padding: 1rem;
    h4 {
      color: ${({ theme }) => theme.colors.text};
      font-size: 1rem;
      margin-bottom: 0.5rem;
    }
    p {
      color: ${({ theme }) => theme.colors.secondary};
      font-size: 0.85rem;
    }
  }
`;

const TestimonialsSection = styled.section`
  background: ${({ theme }) => theme.colors.surface};
  width: 100%;
  padding: 4rem 2rem;
  text-align: center;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 2rem auto;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const TestimonialCard = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.colors.cardShadow};
  text-align: left;
  position: relative;
  min-height: 200px;

  &::before {
    content: '\" ';
    font-size: 4rem;
    color: ${({ theme }) => theme.colors.border};
    position: absolute;
    top: -10px;
    left: 10px;
    font-family: serif;
    z-index: 0;
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
    margin-bottom: 1rem;
    position: relative;
    z-index: 1;
  }

  .author {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 0.95rem;
  }

  .role {
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <Title>
          <span>S</span>
          <span>a</span>
          <span>m</span>
          <span>k</span>
          <span>a</span>
          <span>y</span>
        </Title>
        <Description>
          Discover excellence in education at Samkay Public School
        </Description>
        <ButtonContainer>
          <PrimaryButton to="/admissions">Apply Now</PrimaryButton>
          <SecondaryButton to="/academics">Explore Programs</SecondaryButton>
        </ButtonContainer>
      </HeroSection>
      
      <FeaturesSection>
        <FeatureGrid>
          <FeatureCard>
            <svg viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
            </svg>
            <h3>Academic Excellence</h3>
            <p>Experience our comprehensive CBSE curriculum designed to foster critical thinking and innovation through personalized learning paths.</p>
          </FeatureCard>
          <FeatureCard>
            <svg viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zm-2-1h-6v-3h6v3zM10 7H8v2h2V7zm0 4H8v2h2v-2zm0 4H8v2h2v-2z"/>
            </svg>
            <h3>Digital Learning</h3>
            <p>State-of-the-art smart classrooms and digital resources ensuring an engaging learning experience for every student.</p>
          </FeatureCard>
          <FeatureCard>
            <svg viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
            <h3>Expert Faculty</h3>
            <p>Learn from experienced educators dedicated to bringing out the best in every student through innovative teaching methods.</p>
          </FeatureCard>
          <FeatureCard>
            <svg viewBox="0 0 24 24">
              <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 2c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm-1 14h2v2h-2zm0-10h2v8h-2z"/>
            </svg>
            <h3>Beyond Academics</h3>
            <p>Explore a wide range of extracurricular activities from sports to arts, developing well-rounded personalities.</p>
          </FeatureCard>
        </FeatureGrid>
      </FeaturesSection>

      <EventsSection>
        <Title>Our Events & Campus Life</Title>
        <Description>
          Catch a glimpse of the vibrant activities and memorable moments that define student life at Samkay Public School.
        </Description>
        <EventsGrid>
          <EventPhotoCard>
            <div className="icon-container">
              <svg viewBox="0 0 24 24">
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
              </svg>
            </div>
            <div className="event-info">
              <h4>Annual Day Celebration</h4>
              <p>Showcasing student talent in dance, music, and drama.</p>
            </div>
          </EventPhotoCard>
          <EventPhotoCard>
            <div className="icon-container">
              <svg viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-15h2v6h-2zm0 8h2v2h-2z"/>
              </svg>
            </div>
            <div className="event-info">
              <h4>Annual Sports Meet</h4>
              <p>Students competing in various athletic and team events.</p>
            </div>
          </EventPhotoCard>
          <EventPhotoCard>
            <div className="icon-container">
              <svg viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1 2h2v2h-2zm0-18h2v12h-2z"/>
              </svg>
            </div>
            <div className="event-info">
              <h4>Science Fair Innovations</h4>
              <p>Young scientists presenting their innovative projects.</p>
            </div>
          </EventPhotoCard>
          <EventPhotoCard>
            <div className="icon-container">
              <svg viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-10h2v4h-2zm0-4h2v2h-2z"/>
              </svg>
            </div>
            <div className="event-info">
              <h4>Art & Craft Exhibition</h4>
              <p>Displaying creative artworks by our talented students.</p>
            </div>
          </EventPhotoCard>
          <EventPhotoCard>
            <div className="icon-container">
              <svg viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 14H6v-2h2v2zm0-3H6V9h2v2zm0-3H6V6h2v2zm7 6h-5v-1h5v1zm3-3H10v-1h8v1zm0-3H10V7h8v1z"/>
              </svg>
            </div>
            <div className="event-info">
              <h4>Inter-School Debate</h4>
              <p>Students honing their public speaking and critical thinking skills.</p>
            </div>
          </EventPhotoCard>
          <EventPhotoCard>
            <div className="icon-container">
              <svg viewBox="0 0 24 24">
                <path d="M10 20H8V4h2v16zm6-4h-2V4h2v12zM6 0H4v24h2V0zm12 5h-2V4h2v1zm0 2h-2v2h2V7zm0 4h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
              </svg>
            </div>
            <div className="event-info">
              <h4>Educational Field Trips</h4>
              <p>Learning beyond classrooms through exciting excursions.</p>
            </div>
          </EventPhotoCard>
        </EventsGrid>
      </EventsSection>

      <TestimonialsSection>
        <Title>What Our Community Says</Title>
        <Description>
          Hear from our students, parents, and alumni about their experiences at Samkay Public School.
        </Description>
        <TestimonialsGrid>
          <TestimonialCard>
            <p>"Samkay Public School has been a transformative experience for my child. The teachers are incredibly supportive, and the focus on holistic development is truly commendable."</p>
            <div className="author">- Mrs. Pooja Singh</div>
            <div className="role">Parent of a Grade 7 Student</div>
          </TestimonialCard>
          <TestimonialCard>
            <p>"The academic environment here pushed me to achieve my best. I'm grateful for the excellent faculty and the opportunities I received to explore my interests beyond academics."</p>
            <div className="author">- Rohan Mehta</div>
            <div className="role">Alumnus, Class of 2020</div>
          </TestimonialCard>
          <TestimonialCard>
            <p>"I love coming to school every day! The classes are fun, and I've made so many friends. The sports facilities are amazing, and I get to play my favorite games."</p>
            <div className="author">- Anya Sharma</div>
            <div className="role">Student, Grade 5</div>
          </TestimonialCard>
        </TestimonialsGrid>
      </TestimonialsSection>
    </HomeContainer>
  );
};
       

export default Home;