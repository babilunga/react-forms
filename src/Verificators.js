import classnames from 'classnames';

const Verificators = (props) => {
  const { username, password, repeatPassword } = props;

  return (
    <div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <span>
            Your user name is: <strong>{username}</strong>
          </span>
        </li>
        <li className="list-group-item">
          <div className="row justify-content-around">
            <div
              className={classnames('alert alert-secondary p-2 small col-5', {
                'alert-success': password.length > 4,
                'text-muted': password.length <= 4,
              })}
            >
              {'password length > 4'}
            </div>
            <div
              className={classnames('alert alert-secondary p-2 small col-5', {
                'alert-success': password === repeatPassword && password !== '',
                'text-muted':
                  password !== repeatPassword || repeatPassword === '',
              })}
            >
              repeated password
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Verificators;
