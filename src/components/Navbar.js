import React, {useState} from 'react';
import './Navbar.css'

function Navbar() {
    //defining states
    const [click, setClick] = useState(false);
    //defining functions
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)

    return(
        <>
            <nav className = "navbar" id ="nB"> 
                <div className= "navbar-container">
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <a href="#hSect" className='nav-links' onClick={closeMobileMenu}>
                               Home 
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href="#hSect" to='/services' className='nav-links' onClick={closeMobileMenu}>
                               Projects 
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href="#hSect" to='/products' className='nav-links' onClick={closeMobileMenu}>
                               Education
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href="#hSect" to='/products' className='nav-links' onClick={closeMobileMenu}>
                               Contact
                            </a>
                        </li>
                </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar