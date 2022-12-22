import { headerInfo } from "@data/contentInfo";
import styled from "styled-components";

import { useState } from "react";

const StyledHeader = styled.div.attrs((props) => ({ navOpen: props.navOpen }))`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 1rem;
  z-index: 120;
  background-color: ${(props) => props.theme.secondaryColor};
  i {
    display: none;
  }
  p {
    white-space: nowrap;
  }
  .viewController {
    display: none;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row-reverse;
  box-shadow: 1px 1px 3px -2px rgb(0 0 0 / 75%);
  @media (max-width: 768px) {
    i {
      display: block;
    }
    flex-direction: row;
    top: initial;
    bottom: 0;
    gap: 1rem;
    padding: initial;
    .viewController {
      display: initial;
    }
    flex-direction: column;
    .navController {
      display: flex;
      width: 100%;
      justify-content: space-around;
      align-items: center;
      border-top: 2px solid ${(props) => props.theme.primaryColor};
      border: ${(props) => (props.navOpen ? "none" : "")};
      padding: 0.9rem;
      i {
        font-size: 1.25rem;
        cursor: pointer;
      }
    }
    border-radius: 0.5rem 0.5rem 0 0;
    box-shadow: -3px -1px 8px 0px rgb(0 0 0 / 75%);
  }
`;

const HeaderLinks = styled.div`
  display: flex;
  gap: 1rem;
  @media (max-width: 768px) {
    display: ${(props) => (props.navOpen ? "none" : "grid")};
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    margin: 0.5rem 0;
    padding-top: 1rem;
  }
`;

const StyledNavLink = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
  color: ${(props) => props.theme.textColor};
  @media (max-width: 768px) {
    flex-direction: column;
  }
  &:hover {
    color: ${(props) => props.theme.focusColor};
  }
`;
const NavLink = ({ dataArray, changeState, state }) => {
  return dataArray.map((data, index) => (
    <StyledNavLink
      key={index}
      href={data.link}
      onClick={() => changeState(!state)}
    >
      {data.icon}
      {data.text}
    </StyledNavLink>
  ));
};

const Header = () => {
  const [navOpen, changeState] = useState(true);
  return (
    <StyledHeader navOpen={navOpen}>
      <HeaderLinks navOpen={navOpen}>
        <NavLink
          dataArray={headerInfo.links}
          changeState={changeState}
          state={navOpen}
        />
      </HeaderLinks>
      <div className="navController">
        <p>{headerInfo.title}</p>
        <div className="viewController" onClick={() => changeState(!navOpen)}>
          {navOpen ? (
            <i className="icofont-gears" />
          ) : (
            <i className="icofont-close" />
          )}
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
