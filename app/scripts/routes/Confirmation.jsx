import React, { Fragment } from 'react';

export default class Confirmation extends React.Component {
  state = { matchTeacher: 'Mr. Shorofsky' };

  render() {
    return (
      <Fragment >
        <h1>Success!</h1>
        <img src="http://placehold.it/150" alt="success" />
        <p>A confirmation for the following appointment will be sent to your email address.</p>
        <div className="match-details">
          <div>Teacher: {this.state.matchTeacher}</div>
        </div>
      </Fragment>
    );
  }
}
