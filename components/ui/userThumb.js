import styled from "styled-components";

const UserThumb = styled.div`
  height: 2.3rem;
  width: 2.3rem;
  img {
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid #fbb764;
  }
  position: relative;
  &::after {
    content: "${(props) => props.name || "Funding"}";
    padding: 0.2rem 0.5rem;
    margin:0 .25rem;
    background-color: ${(props) => props.theme.primaryColor};
    border-radius: 0.3rem;
    display: none;
    font-size: 0.8rem;
    box-shadow: 1px 2px 2px -2px rgb(0 0 0 / 75%);
    white-space: nowrap;
  }
  &:hover::after {
    position: absolute;
    overflow: visible;
    display: initial;
    float: right;
    bottom:80%;
    right: 0%;
    transform-origin: left;
    transform: translateY(-50%);
  }
`;

export default UserThumb

//usages
// {project.colaborator.map((colaborator, index) => (
//   <UserThumb
//     className="profile__image"
//     name={colaborator.name}
//     task={colaborator.task}
//     key={index}
//   >
//     <img src={colaborator.profile} />
//   </UserThumb>
// ))}