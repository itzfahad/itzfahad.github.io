import styled from 'styled-components';

const ButtonContainer = styled.button`
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
  color: white;
  &:hover {
    filter: opacity(0.8);
  }
`;

const Button = ({ children, icon, onClick, disabled, type }) => {
  return (
    <ButtonContainer onClick={onClick} disabled={disabled} type={type}>
      {children}
      {icon}
    </ButtonContainer>
  );
};

export default Button;




