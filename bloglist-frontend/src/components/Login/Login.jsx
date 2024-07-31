import PropTypes from 'prop-types'

const Login = ({ username, password, setPassword, setUsername, onSubmit }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>Username</label>
        <input
          type='text'
          value={username}
          name='Username'
          onChange={(event) => setUsername(event.target.value)}
          data-testid='username'
        />
        <label>Password</label>
        <input
          type='password'
          value={password}
          name='Password'
          onChange={(event) => setPassword(event.target.value)}
          data-testid='password'
        />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

Login.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
  setUsername: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default Login
