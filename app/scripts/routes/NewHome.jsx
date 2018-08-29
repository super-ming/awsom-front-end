import React, { Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../../styles/routes/_newhome.scss';

export default class NewHome extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (window.scrollY > 50) {
      document.getElementById("choose-adv").classList.remove('nav-up').classList.add('nav-down');
      console.log("scrolled!");
    }
  }

  render() {
    return (
      <Fragment >
      ```
      <Header />
      <main>
        <div class="main-wrapper">
          <div class="intro">
            <h1>Making music. Your home. Your time.</h1>
            <p>We are excited that you are looking into the journey of learning music with us. We hire only the highest quality of teachers to assist our students as they embark on the exciting opportunity of starting or continuing with an instrument. Follow the links below to find out more about the instruments we offer.</p>
          </div>
          <div id="choose-adv" class="nav-up">
            <h1>Choose Your Instrument</h1>
          </div>
          <div class="wrapper container-fluid">
            <div class="row">
              <div class="col-sm-5 offset-sm-1">
                <div class="cards">
                  <img src="https://images.pexels.com/photos/1246437/pexels-photo-1246437.jpeg?cs=srgb&dl=4k-wallpaper-close-up-fingers-1246437.jpg&fm=jpg" />
                  <div class="image-caption-wrapper">
                    <a class= "image-caption" href="https://www.awsom.info/piano/">Piano</a>
                  </div>
                </div>
              </div>
              <div class="col-sm-5">
                <div class="cards">
                  <img src="https://images.pexels.com/photos/15919/pexels-photo.jpg?cs=srgb&dl=e-guitar-electric-guitar-15919.jpg&fm=jpg" />
                  <div class="image-caption-wrapper">
                    <a class= "image-caption" href="https://www.awsom.info/guitar/">Guitar</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-5 offset-sm-1">
                <div class="cards">
                  <img src="https://images.pexels.com/photos/995301/pexels-photo-995301.jpeg?cs=srgb&dl=adult-band-concert-995301.jpg&fm=jpg" />
                  <div class="image-caption-wrapper">
                    <a class= "image-caption" href="https://www.awsom.info/drums/">Drums</a>
                  </div>
                </div>
              </div>
              <div class="col-sm-5">
                <div class="cards">
                  <img src="https://images.pexels.com/photos/417456/pexels-photo-417456.jpeg?cs=srgb&dl=adult-band-bokeh-417456.jpg&fm=jpg" />
                  <div class="image-caption-wrapper">
                    <a class= "image-caption" href="https://www.awsom.info/woodwind/">Woodwind</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-5 offset-sm-1">
                <div class="cards">
                  <img src="https://images.pexels.com/photos/462442/pexels-photo-462442.jpeg?cs=srgb&dl=adult-band-cap-462442.jpg&fm=jpg" />
                  <div class="image-caption-wrapper">
                    <a class= "image-caption" href="https://www.awsom.info/voice/">Voice</a>
                  </div>
                </div>
              </div>
              <div class="col-sm-5">
                <div class="cards">
                  <img src="https://images.pexels.com/photos/1049690/pexels-photo-1049690.jpeg?cs=srgb&dl=brass-hand-instrument-1049690.jpg&fm=jpg" />
                  <div class="image-caption-wrapper">
                    <a class= "image-caption" href="https://www.awsom.info/piano/">Brass</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-5 offset-sm-1">
                <div class="cards">
                  <img src="https://images.pexels.com/photos/111287/pexels-photo-111287.jpeg?cs=srgb&dl=concert-music-musical-instrument-111287.jpg&fm=jpg" />
                  <div class="image-caption-wrapper">
                    <a class= "image-caption" href="https://www.awsom.info/strings/">Strings</a>
                  </div>
                </div>
              </div>
              <div class="col-sm-5">
                <div class="cards">
                  <img src="https://images.pexels.com/photos/1049690/pexels-photo-1049690.jpeg?cs=srgb&dl=brass-hand-instrument-1049690.jpg&fm=jpg" />
                  <div class="image-caption-wrapper">
                    <a class= "image-caption" href="https://www.awsom.info/chamber/">Chamber</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      ```
      </Fragment>
    );
  }
}
