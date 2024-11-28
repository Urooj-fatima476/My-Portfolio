import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection } from "./HeroStyles";

import LinkButton from "../../styles/GlobalComponents/LinkButton";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello! <br />
          I'm Urooj Muhammad Nazeer
        </SectionTitle>
        <SectionText>
        A Frontend Web Developer skilled in React.js, TypeScript, Next.js, HTML, CSS, and Python. I specialize in building responsive, high-performance web applications, focusing on dynamic user interfaces with React.js and Next.js. I use TypeScript for type safety and Python for backend tasks, staying updated with the latest web development trends.
        </SectionText>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            margin: "0 0 80px",
          }}
        >
          <LinkButton alt="upwork"  target="_blank">
            Upwork
          </LinkButton>
          <LinkButton alt="fiverr" target="_blank">
            Fiverr
          </LinkButton>
          <LinkButton alt="resume" target="_blank">
            Resume
          </LinkButton>
        </div>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
