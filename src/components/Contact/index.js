import './index.scss'

import { useRef } from 'react'
import Loader from 'react-loaders'
//import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'
import pic from '../../Assets/Images/pic.jpeg'

const Contact =() => {
    
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'gmail',
        'template_kncv5um',
        e.target,
        'service_b9agyyo'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
      
  }
  

    return (




        <>
        <div className='container contact-page'>
          
        <div className='text-zone'>
            <h1>
            Contact Me
            </h1>
            
            <p>
             I am looking for an internship in a tech company where I can upskill my frontend part
              and also learn new skills that help me grow all around.
            </p>
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
        
        </div>
        <img className="my-pic" src={pic} alt="gokul" />
        <Loader type="pacman"/>
        </>
    )
}

export default Contact