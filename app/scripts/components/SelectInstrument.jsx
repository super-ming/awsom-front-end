import React, { Fragment, Component } from 'react';
import { Field, ErrorMessage } from 'formik';

const instruments = [
  { id: 0, instrument: 'piano' },
  { id: 1, instrument: 'guitar' },
  { id: 2, instrument: 'voice' },
  { id: 3, instrument: 'woodwinds' },
  { id: 4, instrument: 'brass' },
  { id: 5, instrument: 'drums' },
  { id: 6, instrument: 'strings' },
  { id: 7, instrument: 'chamber' },
];

export default class SelectInstrument extends Component {
  render() {
    return (
      <Fragment>
        <div>What instrument are you interested in learning? *</div>
        <Field
          component="select"
          name="instrument"
          className="app__form_dropdownbox"
        >
          <option value="">Select</option>
          {instruments.map(element => (
            <option key={element.id} value={element.instrument}>
              {element.instrument.replace(/^\w/, c => c.toUpperCase())}
            </option>
          ))}
        </Field>
        <ErrorMessage name="instrument">
          {msg => <div className="field-error">{msg}</div>}
        </ErrorMessage>
      </Fragment>
    );
  }
}
