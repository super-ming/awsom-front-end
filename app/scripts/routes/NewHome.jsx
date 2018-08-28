import React, { Fragment } from 'react';

import '../../styles/routes/_newhome.scss';

export default class NewHome extends React.Component {
  render() {
    return (
      <Fragment >
      ```
      <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <title>Awsom</title>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.12/css/all.css" integrity="sha384-G0fIWCsCzJIMAVNQPfjH08cyYaUtMwjJwqiRKxxE/rx96Uroj1BtIQ6MLJuheaO9" crossorigin="anonymous" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
          <link rel="stylesheet" href="../../styles/routes/_newhome.scss" />
      </head>
      <body>
        <header class="header">
          <div class="header-inner">
            <div class="logo">
              <p> Awsom Logo </p>
            </div>
            <ul class="nav text-uppercase">
              <li class="nav-item">
                <a class="nav-link" href="#">Learn</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Teachers</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Questions</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Careers</a>
              </li>
              <li class="nav-item">
                <button type="button" class="btn btn-outline-primary text-uppercase">Free Lesson</button>
              </li>
            </ul>
          </div>
        </header>
        <main>
          <div class="main-wrapper">
            <div class="intro">
              <h1>Making music. Your home. Your time.</h1>
              <p>We are excited that you are looking into the journey of learning music with us. We hire only the highest quality of teachers to assist our students as they embark on the exciting opportunity of starting or continuing with an instrument. Follow the links below to find out more about the instruments we offer.</p>
            </div>
            <div id="choose-adv" class="nav-up">
              <h1>Choose Your Instrument</h1>
            </div>
            <div class="wrapper container">
              <div class="row">
                <div class="col-sm-4 offset-sm-1">
                  <div class="cards">
                    <a href="https://www.awsom.info/piano/">Piano
                    <img src="https://images.pexels.com/photos/1246437/pexels-photo-1246437.jpeg?cs=srgb&dl=4k-wallpaper-close-up-fingers-1246437.jpg&fm=jpg" />
                    </a>
                  </div>
                </div>
                <div class="col-sm-4 offset-sm-2">
                  <div class="cards">
                    <a href="https://www.awsom.info/guitar/">Guitar
                    <img src="https://images.pexels.com/photos/15919/pexels-photo.jpg?cs=srgb&dl=e-guitar-electric-guitar-15919.jpg&fm=jpg" />
                  </a>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-4 offset-sm-1">
                  <div class="cards">
                    <a href="https://www.awsom.info/drums/">Drums
                    <img src="https://images.pexels.com/photos/995301/pexels-photo-995301.jpeg?cs=srgb&dl=adult-band-concert-995301.jpg&fm=jpg" />
                    </a>
                  </div>
                </div>
                <div class="col-sm-4 offset-sm-2">
                  <div class="cards">
                    <a href="https://www.awsom.info/woodwind/">Woodwind
                    <img src="https://images.pexels.com/photos/417456/pexels-photo-417456.jpeg?cs=srgb&dl=adult-band-bokeh-417456.jpg&fm=jpg" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-4 offset-sm-1">
                  <div class="cards">
                    <a href="https://www.awsom.info/voice/">Voice
                    <img src="https://images.pexels.com/photos/462442/pexels-photo-462442.jpeg?cs=srgb&dl=adult-band-cap-462442.jpg&fm=jpg" />
                    </a>
                  </div>
                </div>
                <div class="col-sm-4 offset-sm-2">
                  <div class="cards">
                    <a href="https://www.awsom.info/piano/">Brass
                    <img src="https://images.pexels.com/photos/1049690/pexels-photo-1049690.jpeg?cs=srgb&dl=brass-hand-instrument-1049690.jpg&fm=jpg" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-4 offset-sm-1">
                  <div class="cards">
                    <a href="https://www.awsom.info/strings/">Strings
                    <img src="https://images.pexels.com/photos/111287/pexels-photo-111287.jpeg?cs=srgb&dl=concert-music-musical-instrument-111287.jpg&fm=jpg" />
                    </a>
                  </div>
                </div>
                <div class="col-sm-4 offset-sm-2">
                  <div class="cards">
                    <a href="https://www.awsom.info/chamber/">Chamber
                    <img src="https://images.pexels.com/photos/1049690/pexels-photo-1049690.jpeg?cs=srgb&dl=brass-hand-instrument-1049690.jpg&fm=jpg" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer>
          <div class="footer">
            <div class="social-media">
              <a href="https://www.facebook.com/awsomWA/" class="fab fa-facebook-f social-icon"></a>
              <a href="http://www.yelp.com/biz/the-andrew-white-school-of-music-kenmore-3" class="fab fa-yelp social-icon"></a>
              <a href="http://www.instagram.com/awsomusic" class="fab fa-instagram social-icon"></a>
              <a href="https://www.linkedin.com/company/andrew-white-school-of-music/?trk=biz-companies-cym" class="fab fa-linkedin social-icon"></a>
            </div>
            <div class="site-info">
              <span class="site-address">AWSOM, PO BOX 2593, Kirkland, WA 98033</span>
              <span rel="tel" class="site-phone">(425) 951-9758</span>
              <a href="mailto:hello@awsom.info" class="site-email"><span>hello@awsom.info</span></a>
              </div>
          </div>
        </footer>
      </body>

      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
      <script src="app.js"></script>
      ```
      </Fragment>
    );
  }
}
