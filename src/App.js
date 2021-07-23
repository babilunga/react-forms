import React from 'react';
import GenderRadio from './GenderRadio.js';
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
      country: '1',
      gender: 'male',
      avatar: 'nothing',
      age: 0,
      agree: false,
      errors: {},
    };
  }

  onSubmit = (event) => {
    event.preventDefault();

    const errors = {};

    if (this.state.username.length === 0) {
      errors.username = '*Required';
    }
    if (this.state.password.length < 5) {
      errors.password = '*Must be more than 5 characters';
    }
    if (
      this.state.repeatPassword !== this.state.password ||
      this.state.repeatPassword.length < 5 ||
      this.state.repeatPassword.length === 0
    ) {
      errors.repeatPassword = '*Must be equal to password';
    }
    if (!this.state.agree) {
      errors.agree = '*Required';
    }
    if (this.state.age < 18) {
      errors.age = '*Must be more than (or equal) 18';
    }

    if (Object.keys(errors).length > 0) {
      this.setState({
        errors: errors,
      });
    } else {
      this.setState({
        errors: {},
      });
      console.log(
        Object.keys(this.state)
          .map((item) => {
            return `${item}: ${this.state[item]}`;
          })
          .join('\n')
      );
    }
  };

  onChangeInput = (event) => {
    // console.log(`${event.target.name}: ${event.target.value}`);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onChangeCheckbox = (event) => {
    // console.log(`${event.target.name}: ${event.target.checked}`);
    this.setState({
      [event.target.name]: event.target.checked,
    });
  };

  onChangeAvatar = (event) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      this.setState({
        avatar: event.target.result,
      });
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  getOptionItems = (items) => {
    return items.map((item) => (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    ));
  };

  decrementAge = () => {
    this.setState({
      age: this.state.age - 1,
    });
  };

  incrementAge = () => {
    this.setState({
      age: this.state.age + 1,
    });
  };

  render() {
    return (
      <div className="form-container card">
        <div className="card-header p-3 h4">Registration form</div>
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
            <div className="invalid-feedback">
              {this.state.errors.username ? this.state.errors.username : null}
            </div>
          </div>

          <div className="form-group mb-3">
            <label>Password</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter password"
              name="password"
              value={this.state.password}
              onChange={this.onChangeInput}
            />
            <div className="invalid-feedback">
              {this.state.errors.password ? this.state.errors.password : null}
            </div>
          </div>

          <div className="form-group mb-3">
            <label>Repeat password</label>
            <input
              type="text"
              className="form-control"
              placeholder="Repeat password"
              name="repeatPassword"
              value={this.state.repeatPassword}
              onChange={this.onChangeInput}
            />
            <div className="invalid-feedback">
              {this.state.errors.repeatPassword
                ? this.state.errors.repeatPassword
                : null}
            </div>
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

          <GenderRadio
            isMale={this.state.gender === 'male'}
            isFemale={this.state.gender === 'female'}
            onChangeInput={this.onChangeInput}
          />

          <div className="form-group mb-3">
            <label htmlFor="formFile" className="form-label">
              Upload your avatar
            </label>
            <input
              className="form-control "
              type="file"
              id="avatar"
              name="avatar"
              onChange={this.onChangeAvatar}
            />
          </div>

          <div className="form-group mb-3">
            <div>
              <label>Age</label>
            </div>
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={this.decrementAge}
              >
                -
              </button>
              <input
                type="number"
                className="form-control"
                placeholder="Enter age"
                name="age"
                value={this.state.age}
                onChange={this.onChangeInput}
              />
              <button
                type="button"
                className="btn btn-secondary"
                onClick={this.incrementAge}
              >
                +
              </button>
            </div>
            <div className="invalid-feedback">
              {this.state.errors.age ? this.state.errors.age : null}
            </div>
          </div>

          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="agree"
              name="agree"
              value={this.state.agree}
              onChange={this.onChangeCheckbox}
              checked={this.state.agree}
            />
            <label className="form-check-label" htmlFor="agree">
              I agree with{' '}
              <span style={{ color: '#0d6efd' }}>Privacy Policy</span>
            </label>
            <div className="invalid-feedback">
              {this.state.errors.agree ? this.state.errors.agree : null}
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-block w-100"
            onClick={this.onSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
