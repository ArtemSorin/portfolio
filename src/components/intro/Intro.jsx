import "./intro.css";
import Vk from "../../icons/vk.png";
import GitHub from "../../icons/github.png";
import Instagram from "../../icons/instagram.png";
import Programmer from "../../icons/programmer.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Howdy! My name is</h2>
          <h1 className="i-name">Artem</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Flutter Developer</div>
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">.NET MAUI / Xamarin Developer</div>
            </div>
          </div>
          <p className="i-desc">
          I am a student and I am learning to develop applications.
          I am fond of web and mobile development.
          </p>
          <p>
            <a href="https://vk.com/rain_on_the_pain">
              <img src={Vk} alt="" className="a-mini-img" />
            </a>
            <a href="https://github.com/ArtemSorin">
              <img src={GitHub} alt="" className="a-mini-img" />
            </a>
            <a href="">
              <img src={Instagram} alt="" className="a-mini-img" />
            </a>
          </p>
        </div>
        <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke="black"
          className="i-scroll"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="scroll">
            <path
              id="Vector"
              d="M40.5 15L34.5 9L28.5 15"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Vector_2"
              d="M28.5 24L34.5 30L40.5 24"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="Group">
              <path
                id="Vector_3"
                d="M9 37.5H60"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              id="Vector_4"
              d="M34.5 27V9"
              strokeWidth="2.9895"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="Group_2">
              <path
                id="Vector_5"
                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
        </svg>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
      </div>
    </div>
  );
};

export default Intro;
