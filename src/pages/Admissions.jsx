import React from 'react';
import styled from 'styled-components';
import { PageContainer, Title, Section, SubTitle, Text, Card, Button } from '../styles/SharedStyles';

const AdmissionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const StepCard = styled(Card)`
  text-align: left;

  h3 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1rem;
  }

  ul {
    list-style: disc;
    margin-left: 1.25rem;
  }

  li {
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 0.95rem;
  }
`;

const Admissions = () => {
  return (
    <PageContainer>
      <Title>Admissions</Title>

      <Section>
        <Text>
          Welcome to Samkay Public School! We are delighted that you are considering our school for your child's education. Our admission process is designed to be transparent and straightforward, ensuring a smooth experience for prospective families.
        </Text>
        <Text>
          We believe in nurturing young minds in a supportive and stimulating environment. Admissions are open for various grades, and we encourage early applications.
        </Text>
        <Button as="a" href="#apply-now-form">Apply Now</Button>
      </Section>

      <Section>
        <SubTitle>Admission Process</SubTitle>
        <AdmissionsGrid>
          <StepCard>
            <h3>Step 1: Inquiry & Registration</h3>
            <Text>Begin by filling out our online inquiry form or visiting our school office to collect the admission prospectus and application form.</Text>
          </StepCard>
          <StepCard>
            <h3>Step 2: Submission of Documents</h3>
            <Text>Submit the completed application form along with the required documents, including academic records, birth certificate, and photographs.</Text>
          </StepCard>
          <StepCard>
            <h3>Step 3: Entrance Test & Interview</h3>
            <Text>Prospective students may undergo an age-appropriate entrance test and an interactive session/interview with the admission committee.</Text>
          </StepCard>
          <StepCard>
            <h3>Step 4: Admission Confirmation</h3>
            <Text>Upon successful completion of the previous steps, admission will be confirmed, and parents will be guided through the fee payment process.</Text>
          </StepCard>
        </AdmissionsGrid>
      </Section>

      <Section>
        <SubTitle>Required Documents</SubTitle>
        <ul>
          <li style={{ color: ({ theme }) => theme.colors.secondary }}>Attested photocopy of Birth Certificate</li>
          <li style={{ color: ({ theme }) => theme.colors.secondary }}>Transfer Certificate (TC) from the previous school (if applicable)</li>
          <li style={{ color: ({ theme }) => theme.colors.secondary }}>Photocopy of Aadhar Card of the student and parents</li>
          <li style={{ color: ({ theme }) => theme.colors.secondary }}>Latest passport-size photographs of the student and parents</li>
          <li style={{ color: ({ theme }) => theme.colors.secondary }}>Academic progress reports from the previous school</li>
        </ul>
      </Section>

      <Section id="apply-now-form">
        <SubTitle>Apply Online</SubTitle>
        <Text>For your convenience, you can download the application form here and submit it with all necessary documents at the school office.</Text>
        <Button as="a" href="/path-to-application-form.pdf" download>Download Application Form</Button>
      </Section>

    </PageContainer>
  );
};

export default Admissions;
