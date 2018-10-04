import React, { Fragment } from 'react';

export default class FreeTrial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputvalue: '',
      instrument: '',
      style: '',
      experience: '',
      haveInstrument: false,
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      days: {
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false
      },
      allergies: '',
      specialNeeds: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { id, value } = event.target;
    this.setState({
      [id]: value
    });
  }
  render() {
    return (
      <Fragment>
        <div className="app__container">
          <div className="app__freetrial_description">
            <h1>Let's find a great teacher in your area!</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div className="app__form">
            <form>
              <div className="app__form_item">
                <div>What instrument are you interested in learning? *</div>
                <select className="app__form_dropdownbox">
                  <option value="piano">Piano</option>
                  <option value="guitar">Guitar</option>
                  <option value="didgeridoo">Didgeridoo</option>
                  <option value="turntables">Turntables</option>
                </select>
              </div>
              <div className="app__form_item">
                <div>
                  Which musical style are you most interested in learning? *
                </div>
                <select className="app__form_dropdownbox">
                  <option value="classical">Classical</option>
                  <option value="jazz">Jazz</option>
                  <option value="rock">Rock</option>
                  <option value="opera">Opera</option>
                </select>
              </div>
              <div className="app__form_item">
                <div>Previous musical experience: *</div>
                <select className="app__form_dropdownbox">
                  <option value="beginner">Beginner: 0-2 years</option>
                  <option value="intermediate">Intermediate: 3-4 years</option>
                  <option value="advanced">Advanced: 5+ years</option>
                </select>
              </div>
              <div className="app__form_item">
                <div>Do you have an instrument already? *</div>
                <select className="app__form_dropdownbox">
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>
              <div className="app__form_item">
                <div>Address: *</div>
                <input
                  type="text"
                  id="address1"
                  className="app__form_input"
                  value={this.state.address1}
                  onChange={this.handleChange}
                />
                <div className="app__form_addresssub">Address 1</div>
                <input
                  type="text"
                  id="address2"
                  className="app__form_input"
                  value={this.state.address2}
                  onChange={this.handleChange}
                />
                <div className="app__form_addresssub">Address 2</div>
                <input
                  type="text"
                  id="city"
                  className="app__form_input"
                  value={this.state.city}
                  onChange={this.handleChange}
                />
                <div className="app__form_addresssub">City</div>
                <input
                  type="text"
                  id="state"
                  className="app__form_input"
                  value={this.state.state}
                  onChange={this.handleChange}
                />
                <div className="app__form_addresssub">State</div>
                <input
                  type="text"
                  id="zip"
                  className="app__form_input"
                  value={this.state.zip}
                  onChange={this.handleChange}
                />
                <div className="app__form_addresssub">Zip</div>
              </div>
              <div className="app__form_item">
                <div>What are the best days and times for lessons? *</div>
                <ul className="list-unstyled">
                  <li>
                    <button
                      type="button"
                      id="monday"
                      className="btn btn-outline-secondary"
                    >
                      Monday
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      id="tuesday"
                      className="btn btn-outline-secondary"
                    >
                      Tuesday
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      id="wednesday"
                      className="btn btn-outline-secondary"
                    >
                      Wednesday
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      id="thursday"
                      className="btn btn-outline-secondary"
                    >
                      Thursday
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      id="friday"
                      className="btn btn-outline-secondary"
                    >
                      Friday
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      id="saturday"
                      className="btn btn-outline-secondary"
                    >
                      Saturday
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      id="sunday"
                      className="btn btn-outline-secondary"
                    >
                      Sunday
                    </button>
                  </li>
                </ul>
              </div>
              <div className="app__form_item">
                <div>Allergies:</div>
                <input
                  className="app__form_input"
                  id="allergies"
                  type="text"
                  value={this.state.allergies}
                  onChange={this.handleChange}
                />
              </div>
              <div className="app__form_item">
                <div>Special Needs:</div>
                <input
                  className="app__form_input"
                  id="needs"
                  type="text"
                  value={this.state.needs}
                  onChange={this.handleChange}
                />
              </div>
              <div className="app__form_container">
                <button type="submit" className="btn btn-primary">
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}
