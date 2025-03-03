import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 1rem;
  text-align: center;
  margin-top: auto;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2023 School Name. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;