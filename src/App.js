import React, { useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Gallery from './components/Gallery';

function App() {



  AOS.init();

  useEffect(() => {
    window.onload = function () {
      let header = document.getElementById("main-header");
      header.style.marginLeft = "1px";
    }

    window.onscroll = function () { displayUpBtn() };
  }, []);

  /* Function for display button on scroll */
  function displayUpBtn() {
    let upButton = document.getElementById("top-btn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      upButton.style.display = "block";
    } else {
      upButton.style.display = "none";
    }
  }

  /* On click the UP - button - scroll to top */
  function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

  }

  return (
    <div className="App">

      <div className="header-container">
        <h1 id="main-header"> Yuval Websites </h1>
      </div>

      <button onClick={toTop} id="top-btn"> Up </button>

      <div className="about-container">

        <h1 data-aos="fade-in" data-aos-duration="1500"> Welcome to Yuval Websites </h1>
        <p data-aos="fade-in" data-aos-duration="1500" className="about-p">

          Need a website? You've come to the right place!
            <br /> <br />
            Here you can see kinds of different projects that I've been working on, and a little bit about me.
            <br />
          <br />
            Together, we will create the best website for you!
            <br />

          <img alt="success" data-aos="fade-in" data-aos-duration="1500" data-aos-delay="200" className="about-image" src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />

        </p>
      </div>

      <div className="gallery-container">
        <h1> Projects</h1>
        <Gallery />
      </div>

      <div className="parallax-container-2">

      </div>

      <div className="aboutMe-container">
        <h1 data-aos="fade-in" data-aos-duration="1500"> About me</h1>
        <div className="me-div">
          <div className="me-text" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="300">
            My name is Yuval. I am 21 years old.
            <br />
            Graduate Full Stack Developer course at John Bryce.
            <br />
            Currently, I am a student of Information systems
            at The Academic College of Tel Aviv-Yaffo.
            <br />
            <br />
            <b> Skills: </b>
            <ul>
              <li> HTML5, CSS3, JavaScript, ES6, TypeScript, JQuery, PHP  </li>
              <li> React, Angular 2-8  </li>
              <li> Bootstrap, Material UI, Angular Material </li>
              <li> Node.js, Express.js, MySQL, MongoDB </li>

            </ul>

            <ul>
              <li> Git, WordPress  </li>


            </ul>

          </div>

          <div className="me-pic" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="500">
            <img alt="Yuval" src={require('./images/Yuval.jpg')} />
          </div>

        </div>

      </div>

      <div className="contact-container">
        <h1 className="contact-header">Contact </h1>
        <p className="contact-p">
          Phone : 052-3723795
            <br />
            Email : Yuvid0224@gmail.com
          </p>

        <ul data-aos="fade-right" data-aos-duration="2000" className="social-media-list">
          <a href="https://www.facebook.com/profile.php?id=100000569228124" target="post"> <i style={{ fontSize: 40 }} className="fa"> &#xf082; </i> </a>
          <a href="https://www.linkedin.com/in/yuval-david-52720a186/" target="post"> <i style={{ fontSize: 40 }} className="fa"> &#xf08c; </i> </a>
          <a href="https://www.instagram.com/yuval_websites/" target="post"> <i style={{ fontSize: 40 }} className="fa"> &#xf16d; </i> </a>
          <a href="https://github.com/yuval-david" target="post"> <i className="fa fa-github" style={{ fontSize: 40 }} aria-hidden="true"></i> </a>

        </ul>

        <div className="div-copy">
          <div className="copyright"> © 2020 Copyright: Yuval Websites </div>
        </div>
      </div>

    </div>
  );



}

export default App;
