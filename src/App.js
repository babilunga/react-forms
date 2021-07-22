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
      country: '',
      gender: 'male',
      agree: false,
      avatar: '',
      errors: {},
    };
  }

  onSubmit = (event) => {
    event.preventDefault();

    const errors = {};

    if (this.state.username.length < 3) {
      errors.username = 'Must be more than 3 characters';
    }
    if (this.state.password.length < 5) {
      errors.password = 'Must be more than 5 characters';
    }
    if (
      this.state.repeatPassword !== this.state.password ||
      this.state.repeatPassword.length < 5 ||
      this.state.repeatPassword.length === 0
    ) {
      errors.repeatPassword = 'Must be equal to password';
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
        `Submited: \nUsername: ${this.state.username}\nPassword: ${this.state.password}`
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
    console.log(`${event.target.name}: ${event.target.checked}`);
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

  render() {
    return (
      <div className="form-container card">
        <div className="card-header p-3 h4">Registration form</div>
        <form className="form card-body ">
          <div className="form-group mb-2">
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
          <div className="form-group mb-2">
            <label>Password</label>
            <input
              type="password"
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
          <div className="form-group mb-2">
            <label>Repeat password</label>
            <input
              type="password"
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

          <hr />

          <div className="form-group mb-2">
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

          <hr />

          <div className="form-group mb-2">
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

          <hr />

          <div className="form-check mb-2">
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
              Agree
            </label>
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
