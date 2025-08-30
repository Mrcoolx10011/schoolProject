import React from 'react';
import styled from 'styled-components';
import { PageContainer, Title, Section, SubTitle, Text, Card, Button } from '../styles/SharedStyles';

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ContactInfoCard = styled(Card)`
  text-align: left;

  h3 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.secondary};
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
  margin-top: 2rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.2rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
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
          [Google Map Placeholder]
        </MapContainer>
      </Section>

    </PageContainer>
  );
};

export default ContactUs;
