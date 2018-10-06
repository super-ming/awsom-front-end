import React, { Fragment, Component } from 'react';
import { Field, ErrorMessage } from 'formik';

const experienceLevels = [
  { id: 0, experienceLevel: 'beginner', label: 'Beginner: 0-2 years' },
  { id: 1, experienceLevel: 'intermediate', label: 'Intermediate: 3-4 years' },
  { id: 2, experienceLevel: 'advanced', label: 'Advanced: 5+ years' },
];

export default class SelectExperienceLevel extends Component {
  render() {
    return (
      <Fragment>
        <div>Previous musical experience: *</div>
        <Field
          component="select"
          name="experienceLevel"
          className="app__form_dropdownbox"
        >
          <option value="">Select</option>
          {experienceLevels.map(element => (
            <option key={element.id} value={element.experienceLevel}>
              {element.label}
            </option>
          ))}
        </Field>
        <ErrorMessage name="experienceLevel">
          {msg => <div className="field-error">{msg}</div>}
        </ErrorMessage>
      </Fragment>
    );
  }
}
