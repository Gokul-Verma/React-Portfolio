
import {
  faAngular,
  faCss3,
  faNode,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
//import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';

const About = () => {
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            About Me
          </h1>
          <p align="LEFT">
          Greetings! I'm Gokul Verma, a passionate B.Tech student majoring in Software Engineering at Delhi Technological University, currently thriving in my final year.<br/><br/>
          My expertise lies in the realm of Data Structures and Algorithms, where I navigate complexities with finesse. My aspiration is to contribute my skills and knowledge to a cutting-edge tech company that provides an environment for continuous exploration and learning.<br/><br/>
          I've gained practical industry experience as a Technology Intern at Indus Valley Partners. This role allowed me to apply my theoretical knowledge to real-world projects, refining my skills and contributing to the dynamic field of technology. I'm now poised to take my expertise to a cutting-edge tech company, where I aim to contribute to an environment that fosters continuous exploration and learning.<br/><br/>
          A quick-learner by nature, I am not only immersed in the world of technology but also a fervent sports enthusiast. Let's connect and explore the boundless possibilities together! 🚀💻<br/><br/>
          </p>
          <Link to="/contact" className="flat-button">
            LET'S CONNECT
          </Link>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faNode} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About