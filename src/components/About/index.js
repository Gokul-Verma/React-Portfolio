
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
//import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

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
          A quick-learner by nature, I am not only immersed in the world of technology but also a fervent sports enthusiast. Let's connect and explore the boundless possibilities together! 🚀💻<br/><br/>
          </p>
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
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About