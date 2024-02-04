import React, { useState } from 'react'
import { getImageUrl } from '../../utils'

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
        <nav className='navbar'>
            <a className='navtitle' href='/'>Portfolio</a>
            <div className='navmenu'>
            <img className='navmenubtn' src={ 
                menuOpen
                ? getImageUrl("nav/closeIcon.png")
                : getImageUrl("nav/menuIcon.png")
                } alt='menu-button'
                onClick={()=> setMenuOpen(!menuOpen)}
                />
                <ul className={`navmenuitems ${menuOpen ? 'navmenuopen' : ''}`}
                     onClick={()=> setMenuOpen(false)}>
                    <li>
                    <a href='#about'>About</a>
                    </li>
                    <li>
                    <a href='#experience'>Experience</a>
                    </li>
                    <li>
                    <a href='#projects'>Projects</a>
                    </li>
                    <li>
                    <a href='#contact'>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar