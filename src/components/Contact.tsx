import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";
import { contact } from "../data/portfolioContent";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href={contact.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — {contact.linkedinHandle}
              </a>
            </p>
            <h4>Education</h4>
            {contact.education.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            {contact.githubUrl ? (
              <a
                href={contact.githubUrl}
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
                className="contact-social"
              >
                GitHub <MdArrowOutward />
              </a>
            ) : null}
            <a
              href={contact.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            {contact.youtubeUrl ? (
              <a
                href={contact.youtubeUrl}
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
                className="contact-social"
              >
                YouTube <MdArrowOutward />
              </a>
            ) : null}
            {contact.instagramUrl ? (
              <a
                href={contact.instagramUrl}
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
                className="contact-social"
              >
                Instagram <MdArrowOutward />
              </a>
            ) : null}
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>{contact.footerCreditName}</span>
            </h2>
            <h5>
              <MdCopyright /> {contact.footerYear}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
