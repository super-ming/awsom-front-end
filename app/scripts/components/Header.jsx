import React from 'react';
import Logo from 'components/Logo';
import { push } from 'actions/index';
import HeaderMenu from 'components/HeaderMenu';

class Header extends React.Component {
  render() {
  const nav = [
    {
      id: 1,
      title: "LEARN",
      url: "/",
      children: [
        {
          id: 7,
          title: "PIANO",
          url: "https://www.awsom.info/piano/"
        },
        {
          id: 8,
          title: "GUITAR",
          url: "https://www.awsom.info/guitar/"
        },
        {
          id: 9,
          title: "VOICE",
          url: "https://www.awsom.info/voice/"
        }, {
          id: 10,
          title: "WOODWINDS",
          url: "https://www.awsom.info/woodwinds/"
        }, {
          id: 11,
          title: "BRASS",
          url: "https://www.awsom.info/brass/"
        }, {
          id: 12,
          title: "DRUMS",
          url: "https://www.awsom.info/drums/"
        }, {
          id: 13,
          title: "STRINGS",
          url: "https://www.awsom.info/strings/"
        }, {
          id: 14,
          title: "CHAMBER",
          url: "https://www.awsom.info/chamber/"
        }
      ]
    },
    {
      id: 2,
      title: "TEACHERS",
      url: "/",
      children: [
        {
          id: 15,
          title: "LOS ANGELES, CA",
          url: "https://www.awsom.info/los-angeles/"
        }, {
          id: 16,
          title: "MADISON, WI",
          url: "https://www.awsom.info/madison-wi-1/"
        }, {
          id: 17,
          title: "SEATTLE, WA",
          url: "https://www.awsom.info/seattle-was/"
        }
      ]
    },
    {
      id: 3,
      title: "BLOG",
      url: "https://www.awsom.info/blog"
    }, {
      id:4,
      title: "QUESTIONS",
      url: "/",
      children: [
        {
          id: 18,
          title: "FAQ'S",
          url: "https://www.awsom.info/faqs/"
        }, {
          id: 19,
          title: "TEACHER RATES",
          url: "https://www.awsom.info/teacherrates/"
        }, {
          id: 20,
          title: "TUITION POLICY",
          url: "https://www.awsom.info/tuition-policy/"
        }, {
          id: 21,
          title: "SUMMER LESSONS",
          url: "https://www.awsom.info/summerpolicy/"
        }, {
          id: 22,
          title: "TERMS",
          url: "https://www.awsom.info/terms/"
        }, {
          id: 23,
          title: "EDUCATOR REQUEST FORM",
          url: "https://www.awsom.info/class/"
        }
      ]
    },
    {
      id: 5,
      title: "RECITALS",
      url: "https://www.awsom.info/recitals-1"
    }, {
      id: 6,
      title: "CAREERS",
      url: "/",
      children: [
        {
          id: 24,
          title: "CAREERS",
          url: "https://www.awsom.info/careers/"
        }
      ]
      }
    ];

    return (
      <header className="app__header">
        <div className="app__container">
          <a href="/">
            <Logo />
          </a>
          <div className="app__header__menu">
            <ul className="list-unstyled">
              { nav.map((menu) =>
                <HeaderMenu
                  key={menu.id}
                  id={menu.id}
                  title={menu.title}
                  url={menu.url}
                  subMenu={menu.children} />
              )
              }
              <li className="app__header_freebutton">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => this.props.dispatch(push('/free-trial'))}
                >
                  FREE TRIAL
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
