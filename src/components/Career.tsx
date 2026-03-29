import "./styles/Career.css";
import { careerJobs } from "../data/portfolioContent";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {careerJobs.map((job) => (
            <div className="career-info-box" key={`${job.company}-${job.period}`}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{job.role}</h4>
                  <h5>{job.company}</h5>
                </div>
                <h3>{job.period}</h3>
              </div>
              <p>{job.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
