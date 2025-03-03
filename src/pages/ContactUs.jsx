import styled from "styled-components";

const ContactUsContainer = styled.div`
  min-height: 100vh; /* Cover the entire page */
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.backgroundGradientStart},
    ${({ theme }) => theme.colors.backgroundGradientEnd}
  );
  padding: 4rem 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.text};
  max-width: 800px;
  margin: 0 auto 2rem auto;
  line-height: 1.8;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1rem;
  }
`;

const ContactInfo = styled.div`
  margin-bottom: 3rem;
`;

const ContactItem = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text};
  margin: 0.5rem 0;
`;

const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.white};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  text-align: left;
`;

const Label = styled.label`
  display: block;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 5px;
  outline: none;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const SubmitButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;

const ContactUs = () => {
  return (
    <ContactUsContainer>
      <Title>Contact Us</Title>
      <Description>
        We'd love to hear from you! Reach out to us via email or phone, or fill
        out the form below, and we'll get back to you as soon as possible.
      </Description>
      <ContactInfo>
        <ContactItem>Email: info@school.com</ContactItem>
        <ContactItem>Phone: +123 456 7890</ContactItem>
      </ContactInfo>
      <Form>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" placeholder="Enter your name" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Message</Label>
          <TextArea
            id="message"
            rows="5"
            placeholder="Enter your message"
            required
          />
        </FormGroup>
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </ContactUsContainer>
  );
};

export default ContactUs;
