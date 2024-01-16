import { Link } from 'react-router-dom';
//import LogoTitle from '../../Assets/Images/logo-s1.png';
//import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
//import {useState,useEffect} from 'react';
import pic from '../../Assets/Images/pic.jpg'
import Loader from 'react-loaders';


const Home =() =>{
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = 'Resume.pdf';
    link.target = '_blank';
    link.download = 'Gokul_Verma_Resume.pdf'; // Set your desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
    
    return (
        <>
        <div className="container home-page">
        <div className="text-zone">
          <h1>
            Hi <br/> I'm Gokul Verma <br/> 
          </h1>
          <div class="i-title">
            <div class="i-title-wrapper">
              <div class="i-title-item">Full Stack Developer</div>
              <div class="i-title-item">UI/UX Designer</div>
              <div class="i-title-item">Software Developer</div>
              <div class="i-title-item">ML Enthusiast</div>
              <div class="i-title-item">Learner</div>
            </div>
          </div>
          
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
          <button className='flat-button-button' onClick={handleResumeDownload}>MY RESUME</button>
        </div>
        <img className="my-pic" src={pic} alt="gokul" />
      </div>
       <Loader type="pacman"/>
        </>
    )
}



export default Home;