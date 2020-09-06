import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import axios from 'axios';
import LineIcon from 'react-lineicons';
import Socialicons from './Socialicons';

function Header() {
    const [information, setInformation] = useState('');
    const [navigationToggler, setNavigationToggler] = useState(false);

    const handleNavigationToggler = () => {
        setNavigationToggler(!navigationToggler);
    }

    useEffect(() => {
        axios.get('/api/information')
            .then(response => {
                setInformation(response.data);
            })
    }, [])

    return (
        <nav className={navigationToggler ? ' header is-visible' : ' header'}>
            <button onClick={handleNavigationToggler} className=' header-toggler'>
                {!navigationToggler ? <LineIcon name='menu' /> : <LineIcon name='close' />}
            </button>
            <div className='header-inner'>
                <div className='header-image'>
                    <Link to='/'>
                        <img src={information.brandImage} alt='brandimage' />
                    </Link>
                    <div className='person'>
                        <h1 className='person-title p-name'>Nauman Tanwir</h1>
                        <h1 className='person-subtitle p-job-title p-note'>Front End Developer</h1>
                    </div>
                </div>

                <ul className='header-menu'>
                    <li><NavLink exact to='/'><span>Home</span></NavLink></li>
                    <li><NavLink to='/about'><span>About</span></NavLink></li>
                    <li><NavLink to='/projects'><span>Projects</span></NavLink></li>
                    <li><NavLink to='/skills'><span>Skills</span></NavLink></li>
                    <li><NavLink to='/resume'><span>Resume</span></NavLink></li>
                    <li><NavLink to='/contact'><span>Contact</span></NavLink></li>
                </ul>
                <div className="header-copyright">
                    <Socialicons></Socialicons>
                </div>
            </div>
        </nav>
    )
}


export default Header;