import React from 'react';
import Logo from 'components/Logo';
import { push } from 'actions/index';

console.log(this);
class Header extends React.Component {
  render() {
    return (
      <header className="app__header">
        <div className="app__container">
          <a href="/">
            <Logo />
          </a>
          <div className="app__header__menu">
            <ul className="list-unstyled">
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
