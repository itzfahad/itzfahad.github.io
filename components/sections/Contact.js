import { getAngle, getDistanse, getDivCenter } from "@lib/utils/calculations";
import { StyledSection } from "@styles/global";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

// below code is extending global StyledSection tag
let Section = styled(StyledSection)`
  flex-direction: column;

  .contact {
    position: relative;
    height: 300px;
    width: 100%;
    min-width: 350px;
  }
`;

const StyledIconHolder = styled.div`
  padding: 1rem;
  position: absolute;
  background-color: ${(props) => props.theme.primaryColor};
  border: 6px solid ${(props) => props.theme.secondaryColor};
  border-radius: 50%;
  line-height: 0;
  z-index: 100;
  cursor: pointer;
  a {
    color: ${(props) => props.color};
  }
  i {
    position: relative;
    p {
      position: absolute;
      font-size: 1rem;
    }
  }
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  font-size: ${(props) => props.font_size};

  p {
    right: ${(props) => props.p_right};
    top: ${(props) => props.p_top};
  }
`;

const StyledLine = styled.div`
  position: absolute;
  height: 6px;
  width: ${(props) => props.line.width};
  top: ${(props) => Math.floor(props.line.location.y) + "px"};
  left: ${(props) => Math.floor(props.line.location.x) + "px"};
  padding: 0;
  background-color: ${(props) => props.theme.secondaryColor};
  transform: rotate(${(props) => props.line.angle});
  transform-origin: left;
`;

const Contact = () => {
  const link1 = useRef("null");
  const link2 = useRef("null");
  const link3 = useRef("null");
  const [line1, updateLine1] = useState({ width: 0, angle: 0, location: 0 });
  const [line2, updateLine2] = useState({ width: 0, angle: 0, location: 0 });

  function drawLine() {
    const point1 = getDivCenter(link1.current);
    const point2 = getDivCenter(link2.current);
    const point3 = getDivCenter(link3.current);
    updateLine1({
      location: point1,
      width: getDistanse(point1, point2) + "px",
      angle: getAngle(point1, point2) + "deg",
    });
    updateLine2({
      location: point3,
      width: getDistanse(point2, point3) + "px",
      angle: getAngle(point3, point2) + "deg",
    });
  }

  useEffect(() => {
    drawLine();
    window.addEventListener("resize", drawLine);

    return () => {
      window.removeEventListener("resize", drawLine);
    };
  }, []);

  return (
    <Section id="contact">
      <p className="title">Contact With me</p>
      <p className="subTitle">Click on the logo to choose the medium of contact</p>
      <div className="contact">
        <StyledIconHolder
          top="10%"
          left="35%"
          font_size="3.5rem"
          color="#47d97b"
          p_right="-158px"
          p_top="-22px"
          ref={link1}
        >
          <a href="tel:+8801955029637">
            <i className="icofont-whatsapp">
              <p>+880 19555029637</p>
            </i>
          </a>
        </StyledIconHolder>
        <StyledIconHolder
          top="40%"
          left="55%"
          font_size="3rem"
          color="#eeb204"
          p_right="-40px"
          p_top="-32px"
          ref={link2}
        >
          <a href='mailto:fahad.ruet@gmail.com'>
            <i className="icofont-email">
              <p>Gmail</p>
            </i>
          </a>
        </StyledIconHolder>
        <StyledIconHolder
          top="70%"
          left="40%"
          font_size="2.5rem"
          color="#0292f1"
          p_right="132%"
          p_top="-20px"
          ref={link3}
        >
          <a href="https://m.me/fahad.pcr">
            <i className="icofont-facebook-messenger">
              <p>fahad.pcr</p>
            </i>
          </a>
        </StyledIconHolder>
        <StyledLine line={line1}></StyledLine>
        <StyledLine line={line2}></StyledLine>
      </div>
    </Section>
  );
};

export default Contact;
