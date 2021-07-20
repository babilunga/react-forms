import React from 'react';
// import Verificators from './Verificators.js';
import countries from './data/countries.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      repeatPassword: '',
      country: '',
      gender: 'male',
    };
  }

  onSubmit = (event) => {
    event.preventDefault();
    console.log(
      `username: ${this.state.username},\npassword: ${this.state.password},\nrepeat password: ${this.state.repeatPassword}\ncountry: ${this.state.country}\ngender: ${this.state.gender}`
    );
    alert('Success!');
  };

  onChangeInput = (event) => {
    console.log(`${event.target.name}: ${event.target.value}`);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  getOptionItems = (items) => {
    return items.map((item) => (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    ));
  };

  render() {
    return (
      <div className="form-container card">
        <div className="card-header p-3 h3">Registration</div>
        <form className="form card-body ">
          <div className="form-group mb-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter username"
              name="username"
              value={this.state.username}
              onChange={this.onChangeInput}
            />
          </div>
          <div className="form-group mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              name="password"
              value={this.state.password}
              onChange={this.onChangeInput}
            />
          </div>
          <div className="form-group mb-3">
            <label>Repeat password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Repeat password"
              name="repeatPassword"
              value={this.state.repeatPassword}
              onChange={this.onChangeInput}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="countrySelect">Country</label>
            <select
              className="form-select"
              id="countrySelect"
              name="country"
              value={this.state.country}
              onChange={this.onChangeInput}
            >
              {this.getOptionItems(countries)}
            </select>
          </div>
          <fieldset>
            <div>Gender</div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="flexRadioDefault1"
                name="gender"
                value="male"
                checked={this.state.gender === 'male'}
                onChange={this.onChangeInput}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                male
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="flexRadioDefault2"
                name="gender"
                value="female"
                checked={this.state.gender === 'female'}
                onChange={this.onChangeInput}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                female
              </label>
            </div>
          </fieldset>
          {/* 
          <Verificators
            username={this.state.username}
            password={this.state.password}
            repeatPassword={this.state.repeatPassword}
          /> 
          */}

          <button
            type="submit"
            className="btn btn-primary btn-block w-100 mt-2"
            onClick={this.onSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
