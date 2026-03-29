import "./styles/About.css";
import { about } from "../data/portfolioContent";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        {about.paragraphs.map((para, i) => (
          <p className="para" key={i}>
            {para}
          </p>
        ))}
      </div>
    </div>
  );
};

export default About;
