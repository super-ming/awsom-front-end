import React, { Fragment } from 'react';

export default class Confirmation extends React.Component {
  // state = { matchTeacher: 'Mr. Shorofsky' };

  render() {
    return (
      <Fragment>
        <div className="app__container">
          <div className="app__confirmation">
            <h1>Success!</h1>
            <p>
              A confirmation for the following appointment will be sent to your
              email address.
            </p>
            <div className="match-details">
              {/* <div>Teacher: {this.state.matchTeacher}</div> */}
              <div>Teacher: Mr. Shorofsky</div>
              <div>Date: Friday, September 7, 2018</div>
              <div>Time: 5:30pm</div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
