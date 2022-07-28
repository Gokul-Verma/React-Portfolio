import { Link } from 'react-router-dom';
//import LogoTitle from '../../Assets/Images/logo-s1.png';
//import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
//import {useState,useEffect} from 'react';
import pic from '../../Assets/Images/pic.jpeg'
import Loader from 'react-loaders';

const Home =() =>{
    
    return (
        <>
        <div className="container home-page">
        <div className="text-zone">
          <h1>
            Hi <br/> I'm Gokul Verma <br/> Web Developer
          </h1>
          <h2>Front End Developer / Deep Learning Enthusiast</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
          
          <a href="https://docs.google.com/document/d/1DIGfqtfujuUO7fi1_y6mgOV_kzBcHVLP/edit?usp=sharing&ouid=111746046832151066171&rtpof=true&sd=true" className='flat-button' target="_blank"
            rel="noreferrer">MY RESUME</a>
        </div>
        <img className="my-pic" src={pic} alt="gokul" />
      </div>
       <Loader type="pacman"/>
        </>
    )
}



export default Home;