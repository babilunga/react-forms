import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import classnames from 'classnames';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      repeatPassword: '',
    };
  }

  onSubmit = (event) => {
    event.preventDefault();
    console.log(
      `username: ${this.state.username},\npassword: ${this.state.password},\nrepeat password: ${this.state.repeatPassword}`
    );
    alert('Success!');
  };

  onChangeInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
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
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span>
                Your user name is: <strong>{this.state.username}</strong>
              </span>
            </li>
            <li className="list-group-item">
              <div className="row justify-content-around">
                <div
                  className={classnames(
                    'alert alert-secondary p-2 small col-5',
                    {
                      'alert-success': this.state.password.length > 4,
                      'text-muted': this.state.password.length <= 4,
                    }
                  )}
                >
                  {'password length > 4'}
                </div>
                <div
                  className={classnames(
                    'alert alert-secondary p-2 small col-5',
                    {
                      'alert-success':
                        this.state.password === this.state.repeatPassword &&
                        this.state.password !== '',
                      'text-muted':
                        this.state.password !== this.state.repeatPassword,
                    }
                  )}
                >
                  repeated password
                </div>
              </div>
            </li>
          </ul>
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
