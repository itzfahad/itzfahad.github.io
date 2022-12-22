// Usages:
// import {
//   Timeline,
//   TimelineComponent
// } from "../components/uiComponents/timeline";
// <Timeline>
//   <TimelineComponent timeSpan="Jan 2017 - Dec 2022">
//     Rajshahi University of engineering and technology
//   </TimelineComponent>
//   <TimelineComponent timeSpan="Jan 2015 - Dec 2016">
//     Govt. hazi Muhammed Mohosin College, Chittagong
//   </TimelineComponent>
// </Timeline>

// ============================================================================

import styled from "styled-components";

const StyledTimeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  margin: 2rem;

  /* css for line */
  &::before {
    content: "";
    width: 2px;
    background-color:${props=> props.theme.secondaryColor};
    position: absolute;
    top: 0;
    bottom: 0;

    @media (min-width: 768px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const Wrapper = styled.div`
  /* css for circle */
  &::before {
    content: "";
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background-color:${props=> props.theme.secondaryColor};
    filter: brightness(1.3);
    position: absolute;
    left: 0%;
    top: 50%;
    transform: translate(-45%, -50%);
    overflow: visible;
  }
  display: flex;
  flex-direction: column;
  flex-grow: 2;

  position: relative;
  &::after {
    content:"📅${props=> props.timeSpan || ''}";
    flex-grow: 2;
    padding: 0 1rem;
    font-size: .8rem;
    text-transform: uppercase;
  }

  @media (min-width: 768px) {
    &:nth-child(odd) {
      flex-direction: row;
      text-align: right;
      &::after {
        text-align: left;
      }
    }
    &:nth-child(even) {
      flex-direction: row-reverse;
      text-align: left;
      &::after {
        text-align: right;
      }
    }
    &::before {
      left: 50%;
      transform: translate(-50%, -50%);
    }
    &::after {
      align-self: center;
    }
  }
`;

export const TimelineComponent = styled.div`
  padding: 0 1rem;
  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const Timeline = ({ children }) => {
  return (
    <StyledTimeline>
      { children.map((child, index) => (
        <Wrapper key={index} timeSpan = {child.props.timeSpan}>{child}</Wrapper>
      ))}
    </StyledTimeline>
  );
};
