import './index.css'

import {Component} from 'react'

import {withRouter, Link} from 'react-router-dom'

class Login extends Component {
  state = {
    email: '',
    password: '',
  }

  onChangeEmail = event => {
    this.setState({email: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSignUp = event => {
    event.preventDefault()
    const {email, password} = this.state
    if (email === '') {
      console.log('email field is required')
    } else if (password === '') {
      console.log('password field is required')
    } else {
      const data = localStorage.getItem('userDetails')
      const userData = JSON.parse(data)
      console.log(userData, 'news')
      const userLogin = userData.filter(
        each => each.email === email && each.password,
      )
      if (userLogin.length === 0) {
        console.log('invalid')
      } else {
        console.log('user login successfully')
        const {history} = this.props
        history.replace('/')
        localStorage.setItem('Details', JSON.stringify(userLogin))
      }
    }
  }

  render() {
    const {email, password} = this.state
    return (
      <div className="login-container">
        <h1>Login</h1>
        <form className="form-container" onSubmit={this.onSubmitSignUp}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            placeholder="Enter The User Email"
            onChange={this.onChangeEmail}
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            placeholder="Enter The User Password"
            onChange={this.onChangePassword}
          />
          <button type="submit" className="login-btn">
            Log In
          </button>
          <p className="redirect-text">
            i have dont have account <Link to="/signup">SignUp</Link>
          </p>
        </form>
      </div>
    )
  }
}

export default withRouter(Login)
