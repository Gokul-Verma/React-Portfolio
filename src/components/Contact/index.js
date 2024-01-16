import './index.scss'

import { useRef } from 'react'
import Loader from 'react-loaders'
//import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'
import pic from '../../Assets/Images/pic.jpg'

const Contact =() => {
    
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm(
        'service_sohsn78',
        'template_kncv5um',
        e.target, // This should be the HTML form element
        'Nj_fBmnpLm6qxkZ_V' // Replace 'your_user_id' with the actual user ID for the Gmail API
      )
      .then(
        () => {
          alert('Message successfully sent!');
          window.location.reload(false);
        },
        () => {
          alert('Failed to send the message, please try again');
        }
      );
  };
  

    return (
        <>
        <div className='container contact-page'>
          
          <div className='text-zone'>
            <h1>
            Contact Me
            </h1>
            
            <p>
            I am on the lookout for an exciting full-time opportunity within a dynamic tech company. My goal is to not only enhance my existing skills but also embark on a journey of acquiring new ones, fostering holistic growth. Join me in a collaborative environment where innovation and skill development go hand in hand, shaping a future filled with endless possibilities!            </p>
            <div className='contact-form'>
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
            </div>
            
        </div>
        
        <img className="my-picc" src={pic} alt="gokul" />
        </div>
        <Loader type="pacman"/>
        </>
    )
}

export default Contact