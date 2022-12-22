// import Link from "next/link";
import { Timeline, TimelineComponent } from "@components/ui/timeline";
import { EducationalQualification, WorkQualification } from "@data/contentInfo";
import { StyledSection } from "@styles/global";
import { useState } from "react";
import styled from "styled-components";

// below code is extending global StyledSection tag
const Section = styled(StyledSection)`
  flex-direction: column;
  position: relative;
`;

// Timeline component is not directly dependent on it. It's just a styled div
const StyledTimelineDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  background-color: ${(props) => props.theme.secondaryColor};
  padding: 1rem;
  border-radius: 0.5rem;

  .timeline__title {
    font-size: 1rem;
    font-weight: bold;
    line-height: 5mm;
  }
  .timeline__subTitle {
    font-size: 0.9rem;
    font-weight: normal;
    &::before {
      content: "-";
    }
  }
  .timeline__tags {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 0.5rem;
    font-size: 0.8rem;
    font-weight: normal;
  }
`;

const Pill = styled.div`
  display: flex;
  flex-direction: row;

  div {
    display: flex;
    align-items: center;
    cursor: pointer;
    gap:.5rem;
    padding: 0.25rem 0.5rem;
    &.${(props) => props.tabName} {
      background-color: ${(props) => props.theme.secondaryColor}; //TODO:theme
      box-shadow: 1px 1px 4px -3px rgb(0 0 0 / 75%);
    }
    border-radius: 1rem;
  }
`;

const Qualification = () => {
  // const qualificationType = ["Education", "Jobs", "Achievements"];
  const qualificationType = [
    {
      text: "Education",
      collection: EducationalQualification,
      show: ["institute", "location", "tag"],
      icon: <i className="icofont-graduate"></i>,
    },
    {
      text: "Jobs",
      collection: WorkQualification,
      show: ["institute", "remarks", "tag"],
      icon: <i className="icofont-bag-alt"></i>,
    },
  ];
  const [tabName, changeTab] = useState(qualificationType[0]);

  return (
    <Section id="qualification">
      <p className="title">Qualification</p>
      <p className="subTitle">Education and Career History</p>
      <Pill tabName={tabName.text}>
        {qualificationType.map(({ text, collection, show, icon }, index) => (
          <div
            className={text}
            onClick={() => {
              changeTab({ text, collection, show });
            }}
            key={index}
          >
            {icon}
            <p>{text}</p>
          </div>
        ))}
      </Pill>
      <Timeline>
        {tabName.collection.map((data, index) => (
          <TimelineComponent timeSpan={data.timeSpan} key={index}>
            <StyledTimelineDiv>
              <p className="timeline__title">{data.institute}</p>
              {tabName.show.includes("location") && (
                <p className="timeline__subTitle">{data.location}</p>
              )}
              {tabName.show.includes("remarks") &&
                data.remarks.map((remark, index) => (
                  <p className="timeline__subTitle" key={index}>
                    {remark}
                  </p>
                ))}
              {tabName.show.includes("tag") && (
                <div className="timeline__tags">
                  {data.tag.length > 0 &&
                    data.tag.map((tag, index) => (
                      <p key={index} className="tag">
                        {tag}
                      </p>
                    ))}
                </div>
              )}
            </StyledTimelineDiv>
          </TimelineComponent>
        ))}
      </Timeline>
    </Section>
  );
};

export default Qualification;
