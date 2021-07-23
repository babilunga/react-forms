import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const countries = ['Ukraine', 'Canada', 'France', 'Italy'];

export default class Traning extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      repeatPassword: '',
      countrySelect: 0,
      gender: '1',
      avatar: '',
      agree: false,
      errors: {},
    };
  }

  onSubmit = (event) => {
    event.preventDefault();

    const errors = {};

    if (this.state.username.length === 0) {
      errors.username = 'Required';
    }
    if (this.state.password.length < 3) {
      errors.password = 'Must be more than 3 characters';
    }
    if (
      this.state.repeatPassword !== this.state.password ||
      this.state.repeatPassword.length === 0
    ) {
      errors.repeatPassword = 'Must be equal to password';
    }
    if (!this.state.agree) {
      errors.agree = 'Required';
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
        `username: ${this.state.username}\npassword: ${this.state.password}\ncountry: ${this.state.countrySelect}\ngender: ${this.state.gender}`
      );
    }
  };

  onChangeInput = (event) => {
    // console.log(event.target.name, ':', event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onChangeCheckbox = (event) => {
    // console.log(event.target.name, ':', event.target.checked);
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

  getSelectItem = (collection) => {
    return collection.map((item, index) => {
      return (
        <option key={index} value={index}>
          {item}
        </option>
      );
    });
  };

  render() {
    return (
      <div className="card form-container">
        <div className="card-header h4 p-3">Registration form</div>
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="email"
                className="form-control"
                id="username"
                name="username"
                value={this.state.username}
                onChange={this.onChangeInput}
              />
              <div className="invalid-feedback">
                {this.state.errors.username ? this.state.errors.username : null}
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="text"
                className="form-control"
                id="password"
                name="password"
                value={this.state.password}
                onChange={this.onChangeInput}
              />
              <div className="invalid-feedback">
                {this.state.errors.password ? this.state.errors.password : null}
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="repeatPassword" className="form-label">
                Repeat password
              </label>
              <input
                type="text"
                className="form-control"
                id="repeatPassword"
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

            <div className="mb-3">
              <label htmlFor="countrySelect" className="form-label">
                Choose country
              </label>
              <select
                id="countrySelect"
                className="form-select mb-3"
                name="countrySelect"
                value={this.state.countrySelect}
                onChange={this.onChangeInput}
              >
                {this.getSelectItem(countries)}
              </select>
            </div>

            <fieldset className="mb-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id="male"
                  name="gender"
                  value="1"
                  checked={this.state.gender === '1'}
                  onChange={this.onChangeInput}
                />
                <label className="form-check-label" htmlFor="male">
                  male
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id="female"
                  name="gender"
                  value="2"
                  checked={this.state.gender === '2'}
                  onChange={this.onChangeInput}
                />
                <label className="form-check-label" htmlFor="female">
                  female
                </label>
              </div>
            </fieldset>

            <div className="mb-3">
              <label htmlFor="avatar" className="form-label">
                Upload avatar
              </label>
              <input
                type="file"
                className="form-control"
                id="avatar"
                name="avatar"
                onChange={this.onChangeAvatar}
              />
            </div>

            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="agree"
                name="agree"
                checked={this.state.agree}
                onChange={this.onChangeCheckbox}
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
              className="btn btn-primary"
              onClick={this.onSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
