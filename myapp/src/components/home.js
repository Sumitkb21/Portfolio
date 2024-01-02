import React from 'react'
import Navbar from './Navbar'
import './navbar.css'
import './home.css'
import myimage from './myphoto.jpg' 

export default function Home() {
  return (
    <>
    <Navbar/>
    <section id="intro">
      <div className="left-content">
        <span className="hello">Hello, </span>
        <span className="introtext">
          I'm <span className="introname">Sumit</span> <br />
          Website developer <br />
          {/* & <br />
          Software developer */}
        </span>
        
        
      </div>

      <img className="right-content" src={myimage} alt="" />
    </section>
    </>
  )
}
