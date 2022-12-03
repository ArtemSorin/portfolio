import "./about.css";
import Development from "../../images/development.png";
import Rospatent from "../../images/rospatent.png";
import CyberGarden from "../../images/cybergarden.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Development}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        I am a 2nd year student. I live and study in Taganrog. 
        I have little experience in application development.
        </p>
        <p className="a-desc">
        I participated in various events: IT meetups, hackathons, conferences. 
        Also in my free time I do my projects and try to learn something new.
        </p>
        <div className="a-award">
          <img src={Rospatent} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Rospatent hackathon 2022</h4>
            <p className="a-award-desc">
            Development of a mobile application for patent search.
            </p>
          </div>
        </div>
        <div className="a-award">
          <img src={CyberGarden} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Cyber Garden hackathon 2022</h4>
            <p className="a-award-desc">
            Development of a mini social network for IT company with the ability to view current company events.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
