import React, { Fragment, Component } from 'react';
import { Field, ErrorMessage } from 'formik';

const musicStyles = [
  { id: 0, musicStyle: 'classical' },
  { id: 1, musicStyle: 'jazz' },
  { id: 2, musicStyle: 'rock' },
  { id: 3, musicStyle: 'opera' },
];

export default class SelectMusicStyle extends Component {
  render() {
    return (
      <Fragment>
        <div>Which musical style are you most interested in learning? *</div>
        <Field
          component="select"
          name="musicStyle"
          className="app__form_dropdownbox"
        >
          <option value="">Select</option>
          {musicStyles.map(element => (
            <option key={element.id} value={element.musicStyle}>
              {element.musicStyle.replace(/^\w/, c => c.toUpperCase())}
            </option>
          ))}
        </Field>
        <ErrorMessage name="musicStyle">
          {msg => <div className="field-error">{msg}</div>}
        </ErrorMessage>
      </Fragment>
    );
  }
}
