import React, { Fragment } from 'react';
import Header from '../components/Header';

export default class Match extends React.Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="app__container">
          <div className="app__matchfound">
            <h1>We have a great match for you!</h1>
            <p>
              Please Confirm, Cancel, or Try Again to look for a different date.
            </p>
            <div className="app__matchdetails">
              <div>Teacher: Mr. Shorofsky</div>
              <div>Date: Friday, September 7, 2018</div>
              <div>Time: 5:30pm</div>
            </div>
          </div>
          <div className="app__matchbuttons">
            <button type="submit" className="btn btn-primary">
              CONFIRM
            </button>
            <button type="submit" className="btn btn-primary">
              CANCEL
            </button>
            <button type="submit" className="btn btn-primary">
              TRY AGAIN
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}
