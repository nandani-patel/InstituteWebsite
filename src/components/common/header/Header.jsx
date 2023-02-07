import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className='headerr'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/courses'>Administration</Link>
            </li>
            <li>
              <Link to='/about'>Departments</Link>
            </li>
            <li>
              <Link to='/team'>Academics</Link>
            </li>
            <li>
              <Link to='/pricing'>Dean</Link>
            </li>
            <li>
              <Link to='/journal'>People</Link>
            </li>
            <li>
              <Link to='/contact'>Students</Link>
            </li>
            <li>
              <Link to='/contact'>Faculties</Link>
            </li>
            <li>
              <Link to='/contact'>Research</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
