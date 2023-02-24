import { getElapsedTime } from "@lib/utils/calculations";
import styled from "styled-components";

const Project = styled.div`
  background-color: ${(props) => props.theme.secondaryColor};
  border-radius: 1rem;
  box-shadow: 1px 2px 2px -2px rgb(0 0 0 / 75%);
  padding: 1.5rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  .project__title {
    font-size: 1.1rem;
    /* font-weight: bold; */
    line-height: 5mm;
    color: ${(props) => props.theme.focusColor};
    filter: brightness(1.3);
  }
  .project__subTitle__wrapper {
    flex-grow: 2;
  }
  .project__subTitle {
    font-size: 0.8rem;
    /* text-align: right; */
    &::before {
      content: "-";
    }
  }
  .time__with__tag {
    display: flex;
    flex-direction: row;
    font-size: 0.8rem;
    font-weight: normal;
    align-items: center;
    justify-content: space-between;
    .time {
      font-style: italic;
    }
    .tags {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      gap: 0.5rem;
    }
  }
  .project__partners {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.9rem;
  }
`;

const ProjectDetailsModal = ({ data }) => {
  const project = data;
  
  return (
    <Project>
      <p className="project__title">{project.title}</p>
      <div className="project__subTitle__wrapper">
        {project.description.map((subTitle, index) => (
          <div className="project__subTitle" key={index}>
            {subTitle}
          </div>
        ))}
      </div>
      <div className="time__with__tag">
        <p className="time">{getElapsedTime(project.time)}</p>
        <div className="tags">
          {project.tags.map((tag, index) => (
            <p className="tag" key={index}>
              {tag.icon}
              {tag.field}
            </p>
          ))}
        </div>
      </div>
    </Project>
  );
};

export default ProjectDetailsModal;
