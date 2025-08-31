import React from 'react';
import styled from 'styled-components';
import { PageContainer, Title, Section, SubTitle, Text, Card, Button, Grid } from '../styles/SharedStyles';

const ContactGrid = styled(Grid)`
  margin-top: 2rem;
`;

const ContactInfoCard = styled(Card)`
  text-align: left;

  h3 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 1.1rem;
      margin-bottom: 0.75rem;
    }
  }

  p {
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.secondary};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 0.85rem;
    }
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  position: sticky; /* Make the form sticky */
  top: ${({ theme }) => theme.spacing.xl}; /* Position it from the top, considering header height */
  z-index: 10; /* Ensure it stays above other content */
  padding: ${({ theme }) => theme.spacing.md}; /* Add padding for better appearance */
  background-color: ${({ theme }) => theme.colors.cardBackground}; /* Ensure background for sticky effect */
  border-radius: 8px; /* Match card styling */
  box-shadow: ${({ theme }) => theme.elevation[1]}; /* Add a subtle shadow */

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 100%;
    padding: 0 1rem; /* Add horizontal padding */
  }

  input,
  textarea {
    padding: 0.75rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 4px;
    font-size: 1rem;
    outline: none;
    transition: all 0.2s ease;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.cardBackground};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      padding: 0.6rem;
      font-size: 0.9rem;
    }

    &:focus {
      border-color: ${({ theme }) => theme.colors.primary};
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.hoverBackground};
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  textarea {
    min-height: 120px;
    resize: vertical;
  }
`;

const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  background-color: ${({ theme }) => theme.colors.surface};
  margin-top: calc(500px + ${({ theme }) => theme.spacing.xl}); /* Adjust margin-top to account for sticky form height + spacing */
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.2rem;
  border: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 350px;
    margin-top: calc(400px + ${({ theme }) => theme.spacing.lg}); /* Adjust for tablet sticky form height */
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 250px; /* Further adjust map height for smaller screens */
    margin-top: calc(300px + ${({ theme }) => theme.spacing.md}); /* Adjust for mobile sticky form height */
  }
`;

const ContactUs = () => {
  return (
    <PageContainer>
      <Title>Contact Us</Title>

      <Section>
        <Text>
          We'd love to hear from you! Whether you have questions about admissions, academic programs, or anything else, feel free to reach out to us using the contact details below or by filling out the inquiry form.
        </Text>
      </Section>

      <Section>
        <ContactGrid>
          <ContactInfoCard>
            <h3>General Inquiries</h3>
            <p>Email: <a href="mailto:info@samkayschool.edu">info@samkayschool.edu</a></p>
            <p>Phone: <a href="tel:+911234567890">+91 123 456 7890</a></p>
          </ContactInfoCard>
          <ContactInfoCard>
            <h3>Admissions Office</h3>
            <p>Email: <a href="mailto:admissions@samkayschool.edu">admissions@samkayschool.edu</a></p>
            <p>Phone: <a href="tel:+911234567891">+91 123 456 7891</a></p>
          </ContactInfoCard>
          <ContactInfoCard>
            <h3>Address</h3>
            <p>Samkay Public School</p>
            <p>123 School Lane, Education City</p>
            <p>State, Pincode 123456</p>
            <p>India</p>
          </ContactInfoCard>
        </ContactGrid>
      </Section>

      <Section>
        <SubTitle>Send us a Message</SubTitle>
        <ContactForm onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="tel" placeholder="Your Phone Number (Optional)" />
          <textarea placeholder="Your Message" required></textarea>
          <Button type="submit">Submit Message</Button>
        </ContactForm>
      </Section>

      <Section>
        <SubTitle>Our Location</SubTitle>
        <MapContainer>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115450.41846959553!2d81.8219572765386!3d25.908076632731837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398516d006198f8b%3A0x6b772c72b26090c2!2sPratapgarh%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1678891234567!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Pratapgarh, UP Location"
          ></iframe>
        </MapContainer>
      </Section>

    </PageContainer>
  );
};

export default ContactUs;
