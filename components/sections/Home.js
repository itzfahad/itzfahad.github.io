import Button from "@components/ui/button";
import SocialIcon from "@components/ui/socialIcon";
import { homeInfo } from "@data/contentInfo";
import socialInfo from "@data/socialInfo";
import { ImageRandomBorder } from "@styles/animations";
import { StyledSection } from "@styles/global";
import styled from "styled-components";

// below code is extending global StyledSection tag
const Section = styled(StyledSection)`
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1rem;
  .social {
    display: flex;
    flex-direction: column;
    order: 2;
    gap: 0.5rem;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem 0.5rem;
    .social {
      flex-direction: row;
    }
  }
`;

const HomeData = styled.div`
  margin-top: 3rem;
  max-width: 500px;
  flex-grow: 5;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  order: 3;
  color: ${(props) => props.theme.focusColor};
  .home__title {
    text-transform: uppercase;
    font-size: 2.5rem;
    font-weight: normal;
    line-height: 0.4;
    margin-top: 3rem;
  }
  .home__subtitle {
    font-weight: normal;
  }
  .home__description {
    color: ${(props) => props.theme.textColor};
    font-size: 0.9rem;
    text-align: justify;
  }
  .scrollDown {
    margin-top: 6rem;
    gap: 0.25rem;
    color: ${(props) => props.theme.textColor};
  }
  @media (max-width: 768px) {
    margin-top: 0;
    .scrollDown {
      display: none;
    }
    .home__title {
      margin-top: 0.5rem;
    }
  }
`;

const Image = styled.div`
  background: url(${homeInfo.imageLink}) no-repeat center / cover;
  box-shadow: 0px 0px 1px 8px rgba(63, 78, 79, 1);
  order: 1;
  justify-self: center;
  width: 300px;
  height: 300px;
  animation: ${ImageRandomBorder} 7s ease-in-out infinite 1s;
  /* filter:grayscale(70%); */
  @media (min-width: 768px) {
    order: 5;
  }
`;

const Home = () => {
  return (
    <Section id="home">
      <div className="social">
        {socialInfo.map(
          ({ icon, tag, url, show, directToNewTab }, index) =>
            show && (
              <SocialIcon
                href={url}
                tag={tag}
                key={index}
                target={directToNewTab ? "_blank" : "_self"}
                rel=""
              >
                {icon}
              </SocialIcon>
            )
        )}
      </div>
      <HomeData>
        <h1 className="home__title">{homeInfo.title}</h1>
        <h3 className="home__subtitle">{homeInfo.subtitle[0]}</h3>
        <p className="home__description">{homeInfo.description}</p>
        <Button
          icon={homeInfo.button.icon}
          onClick={() => (window.location.hash = "#contact")}
        >
          {homeInfo.button.text}
        </Button>

        <a
          className="scrollDown flex-row-centered pointer"
          href="#qualification"
        >
          <i className="icofont-mouse icofont-3x"></i>
          <p>Scroll down</p>
          <i className="icofont-swoosh-down"></i>
        </a>
      </HomeData>
      <Image />
    </Section>
  );
};

export default Home;
