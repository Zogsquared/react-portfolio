import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = [ 'r', 'o', 'y', ' ', 'v', 'a', 'n', ' ', 'H','e','e','r','d','e','n']
    const jobArray = ['f','u','l','l',' ', 's','t','a','c','k',' ', 'd','e','v','e','l','o','p','e','r', '.']

    useEffect(() => {
        setTimeout(() => {
          return setLetterClass('text-animate-hover')
        }, 7000)
      }, [])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <span className={`${letterClass} _15`}>&nbsp;T</span>
                    <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    idx={16} />
                    <br />
                    <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx={31} />
                </h1>
                <h2>Junior Software Developer / .Net MVC Framework</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
        <Loader type='ball-pulse-sync' />
        </>
    );
}

export default Home