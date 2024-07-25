import React from 'react'
import './styles.css';
export default function Portfolio() {
  return (
    <body>
          <header class="header">
        <a href="www.facebook.com" class="logo"><span>Rak</span>esh</a>
        <nav class="navbar">
            <a href="portofolio.html" id="anc">Home</a>
            <a href="aboutme.html">About Me</a>
            <a href="skills.html" >skills</a>
            <a href="academics.html" >Academics</a>
            <a href="internships.html" >InternShip</a>
            <a href="projects.html" >Projects</a>
            
        </nav>
        
        <a href="contact.html" class="contact">contact me</a>
    </header>

    <main>
        <section >
            <img src="rakesh.jpg" alt="" id="img"> /</img>
        </section>
        <section id="sec">

            <p >Hi <br />
            I'm <span id="span">Rak</span><strong id="strong">esh</strong>  <br />
            A Front end Developer</p>
            
        </section>
        <section id="btm">
            <input type="button" value="Hire Me" id="inp" />
           <a href="experience.html"> <input type="button" value="Experience" id="inp" /></a>
        </section>
    </main>
    </body>
  )
}
