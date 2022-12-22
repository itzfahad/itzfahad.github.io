import styled from "styled-components";

const Button = styled.a`
  font-size: 1em;
  padding: 0.8rem 2rem;
  border-radius: 0.7rem;
  cursor: pointer;
  border: none;
  outline: none;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  flex-wrap: nowrap;
  background-color: ${(props) => props.theme.focusColor};
  /* font-weight: bold; */
  color: white;
  &:hover {
    filter: opacity(0.8);
  }
`;

const StyledButton = ({ children, icon }) => {
  return (
    <Button href="#contact">
      {children}
      {icon}
    </Button>
  );
};

export default StyledButton;
