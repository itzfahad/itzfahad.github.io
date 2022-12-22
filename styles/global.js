import styled, { createGlobalStyle } from "styled-components";
import { backgroundColor } from "./colors";

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  :root{
    background-color: ${(props) => props.theme.primaryColor};
    color:${(props) => props.theme.textColor};
    font-size:1rem;
  }
  .tag {
    color:${(props) => props.theme.textColor};
    background-color:${(props) => props.theme.secondaryColor};
    filter: contrast(1.3);
    border-radius: 0.5rem;
    padding: 0.1rem 0.7rem;
    display: flex;
    flex-direction:row;
    align-items: center;
    gap: .25rem;
  }
  @media (max-width: 768px) {
    .main{
      margin-bottom: 5rem;
    }
  }
`;

export const StyledSection = styled.div`
  padding: 4rem 0 1rem 0;
  background-color: ${backgroundColor};
  gap: 1rem;
  .title {
    color: ${(props) => props.theme.textColor};
    text-align: center;
    font-size: 1.5rem;
    text-transform: uppercase;
  }
  .subTitle {
    display: block;
    color: ${(props) => props.theme.textColor};
    text-align: center;
    /* text-transform: uppercase; */
  }

  max-width: 968px;
  margin: 0 auto;
  width: 100%;

  display: flex;
  align-items: center;
`;

export default GlobalStyle;
