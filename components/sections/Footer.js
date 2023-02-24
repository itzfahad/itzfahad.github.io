import styled from "styled-components";

// below code is extending global StyledSection tag
const Section = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  margin-top: 1rem;
  padding: 1rem 0 1rem 0;
  background-color: #3F4E4F;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem 0.5rem;
    .social {
      flex-direction: row;
    }
  }
`;

const Footer = () => {
  return <Section id="home">
    <i class="icofont-copyright"> </i>
    <p> Here is nothing like copyright in source code. Will be happy to solve if you get any error.</p>
  </Section>;
};

export default Footer;
