import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()
    
    useEffect(() => {
        setTimeout(() => {
          return setLetterClass('text-animate-hover')
        }, 3000)
      }, [])
      /* dashboard for emailjs at https://dashboard.emailjs.com/admin */
      const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_hrj1knc',
                'template_d2tdyit',
                refForm.current,
                'O2YyXN9yoTZ9KhS0H'
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
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['C', 'o','n','t','a','c','t',' ','m','e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Contact me about...
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input placeholder="Subject" type="text" name="subject" required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Troy van Heerden,
                    <br />
                    Auckland,
                    <br />
                    New Zealand <br />
                    <span>troy.mvh@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[-36.852095, 174.7631803]} zoom={13}>
                        <TileLayer url='https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png' />
                        <Marker position={[-36.852095, 174.7631803]}>
                            <Popup>Based in this city</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='ball-pulse-sync' />
        </>
    )
}

export default Contact