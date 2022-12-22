import Link from "next/link";
import styled from "styled-components";

const StyledSocialIcon = styled(Link)`
  cursor: pointer;
  position: relative;
  color: ${(props) => props.theme.textColor};
  i {
    font-size: 1.5rem;
    &:hover{
      filter: contrast(.7);
    }
  }
  &::before {
    content: "${(props) => props.tag || "visit"}";
    padding: 0.2rem 1rem 0.2rem 1.5rem;
    background-color: ${(props) => props.theme.secondaryColor};
    border-radius: 0.3rem;
    display: none;
    font-size: 0.8rem;
    overflow: visible;
    white-space: nowrap;
    clip-path:polygon(0% 50%,10% 0%,100% 0%,100% 100%,10% 100%);
  }
  &:hover::before {
    display: inline;
    position: absolute;
    left: 25px;
    /* transition: 3s ease-in-out; */
  }
  @media(max-width:768px){
    &:hover::before{
      display: none;
    }
  }
`;

const SocialIcon = (props) => {
  return (
    <StyledSocialIcon
      href={props.href}
      tag={props.tag}
      target={props.target}
      rel=""
    >
      {props.children}
    </StyledSocialIcon>
  );
};

export default SocialIcon;
