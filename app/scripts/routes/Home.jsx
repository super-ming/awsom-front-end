import React, { Fragment } from 'react';

import '../../styles/routes/_newhome.scss';
import piano from '../../../assets/media/images/piano.jpg';
import guitar from '../../../assets/media/images/guitar.jpg';
import drums from '../../../assets/media/images/drums.jpg';
import brass from '../../../assets/media/images/brass.jpg';
import strings from '../../../assets/media/images/strings.jpg';
import woodwind from '../../../assets/media/images/woodwind.jpg';
import voice from '../../../assets/media/images/voice.jpg';
import chamber from '../../../assets/media/images/chamber.jpg';


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ticker: false,
      opacity: false,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (!this.state.ticker) {
      if (window.scrollY > 50) {
        this.setState({ ticker: true, opacity: true });
        // console.log(this.state.ticker);
      }
    }
  }

  render() {
    return (
      <Fragment>
        <main>
          <div className="main-wrapper">
            <div className="intro">
              <h1>Making music. Your home. Your time.</h1>
              <p>
                We are excited that you are looking into the journey of learning
                music with us. We hire only the highest quality of teachers to
                assist our students as they embark on the exciting opportunity
                of starting or continuing with an instrument. Follow the links
                below to find out more about the instruments we offer.
              </p>
            </div>
            <div id="choose-adv" className="nav-down">
              <h1
                style={{
                  opacity: `${this.state.opacity ? '1' : '0'}`,
                  transition: 'opacity .5s ease-in',
                }}
              >
                Choose Your Instrument
              </h1>
            </div>
            <div className="wrapper container-fluid">
              <div className="row">
                <div className="col-sm-4 offset-sm-2 card-container">
                  <div className="cards">
                    <img src={piano} />
                    <div className="image-caption-wrapper">
                      <a
                        className="image-caption"
                        href="https://www.awsom.info/piano/"
                      >
                        Piano
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 card_container">
                  <div className="cards">
                    <img src={ guitar } />
                    <div className="image-caption-wrapper">
                      <a
                        className="image-caption"
                        href="https://www.awsom.info/guitar/"
                      >
                        Guitar
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4 offset-sm-2">
                  <div className="cards">
                    <img src={ drums } />
                    <div className="image-caption-wrapper">
                      <a
                        className="image-caption"
                        href="https://www.awsom.info/drums/"
                      >
                        Drums
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="cards">
                    <img src={ woodwind } />
                    <div className="image-caption-wrapper">
                      <a
                        className="image-caption"
                        href="https://www.awsom.info/woodwind/"
                      >
                        Woodwind
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4 offset-sm-2">
                  <div className="cards">
                    <img src={ voice } />
                    <div className="image-caption-wrapper">
                      <a
                        className="image-caption"
                        href="https://www.awsom.info/voice/"
                      >
                        Voice
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="cards">
                    <img src={ brass } />
                    <div className="image-caption-wrapper">
                      <a
                        className="image-caption"
                        href="https://www.awsom.info/brass/"
                      >
                        Brass
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4 offset-sm-2">
                  <div className="cards">
                    <img src={ strings } />
                    <div className="image-caption-wrapper">
                      <a
                        className="image-caption"
                        href="https://www.awsom.info/strings/"
                      >
                        Strings
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="cards">
                    <img src={ chamber } />
                      <a
                        className="image-caption"
                        href="https://www.awsom.info/chamber/"
                      >
                        Chamber
                      </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        {/* ``` */}
      </Fragment>
    );
  }
}
