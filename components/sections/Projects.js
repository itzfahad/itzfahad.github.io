import ProjectSummery from "@components/ui/projectSummery";
import ProjectSummeryData from "@data/projectSummery";
import RuetContribution from "@data/ruetContribution";
import { StyledSection } from "@styles/global";
import styled from "styled-components";

// below code is extending global StyledSection tag
const Section = styled(StyledSection)`
  flex-direction: column;
  .projects {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 310px));
    gap: 1rem;
    justify-content: center;
  }
`;

const Projects = () => {
  return (
    <Section id='projects'>
      <p className="title">Projects & Products</p>
      <p className="subTitle">Let's look some of my works</p>
      <div className="projects">
        {ProjectSummeryData.map((summery, index) => (
          <ProjectSummery data={summery} key={index} />
        ))}
      </div>
      <br></br>
      <br></br>
      <br></br>

      <p className="title">RUET Works</p>
      <p className="subTitle">These machines are serving in different labs & projects of RUET</p>
      <div className="projects">
        {RuetContribution.map((summery, index) => (
          <ProjectSummery data={summery} key={index} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
