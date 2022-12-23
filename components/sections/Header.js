import { headerInfo } from "@data/contentInfo";
import styled from "styled-components";

import { useState } from "react";

// StyledHeader is a styled div element with additional styles
// that apply to the header of the website
const StyledHeader = styled.div.attrs((props) => ({ navOpen: props.navOpen }))`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 1rem;
  z-index: 120;
  background-color: ${(props) => props.theme.secondaryColor};
  box-shadow: 1px 1px 3px -2px rgb(0 0 0 / 75%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row-reverse;

  // styles for elements inside the header
  i {
    display: none;
  }
  p {
    white-space: nowrap;
  }
  .viewController {
    display: none;
  }

  // styles for the header when the screen width is 768px or less
  @media (max-width: 768px) {
    top: initial;
    bottom: 0;
    gap: 1rem;
    padding: initial;
    border-radius: 0.5rem 0.5rem 0 0;
    box-shadow: -3px -1px 8px 0px rgb(0 0 0 / 75%);
    flex-direction: column;

    // show the elements inside the header
    i {
      display: block;
    }
    .viewController {
      display: initial;
    }

    // styles for the navController element
    .navController {
      display: flex;
      width: 100%;
      justify-content: space-around;
      align-items: center;
      border-top: 2px solid ${(props) => props.theme.primaryColor};
      border: ${(props) => (props.navOpen ? 'none' : '')};
      padding: 0.9rem;

      i {
        font-size: 1.25rem;
        cursor: pointer;
      }
    }
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


// Header is a functional component that renders the header of the website
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
