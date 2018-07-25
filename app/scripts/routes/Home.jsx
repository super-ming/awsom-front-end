import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';

import config from 'config';
import Logo from 'components/Logo';
import { login, push } from 'actions/index';

export class Home extends React.PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
  };
  handleClickNavigation = e => {
    e.preventDefault();
    this.props.dispatch(push('/free-trial'));
  }

  handleClickLogin = (e) => {
    e.preventDefault();
    const { id } = e.target;
    (id == 'freeTrial') ? console.log(id) : this.props.dispatch(login());
  };

  render() {
    const { user } = this.props;

    return (
      <div key="Home" className="app__home app__route">
        <div className="app__container">
          <div className="app__home__wrapper">
            <div className="app__home__header">
              <Logo />
            </div>
            <h1>{config.description}</h1>
            <a
              href="#login"
              onClick={this.handleClickLogin}
              className={cx('btn btn-lg btn-primary btn-icon', {
                'btn-loading': user.status === 'running',
              })}
            >
              <i className="i-sign-in" />
              <span>Start</span>
            </a>
            <a
              href="#free-trial"
              onClick={this.handleClickNavigation}
              className={cx('btn btn-lg btn-primary btn-icon', {
                'btn-loading': user.status === 'running',
              })}
            >
              <i className="i-sign-in" />
              <span id='freeTrial' >Free Trial</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps)(Home);
