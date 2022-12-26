import './index.css'

import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

// import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'

import {withRouter, Link} from 'react-router-dom'

class Signup extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    phone: '',
    date: '',
    address: '',
    signupDetails: [
      {
        id: 1,
        name: 'a',
        email: 'a@a',
        password: '123',
        date: '11',
        address: '123',
      },
    ],
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeEmail = event => {
    this.setState({email: event.target.value})
  }

  onChangePhone = event => {
    this.setState({phone: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeDate = event => {
    this.setState({date: event.target.value})
  }

  onChangeAddress = event => {
    this.setState({address: event.target.value})
  }

  onSubmitSinUp = event => {
    event.preventDefault()
    const {
      name,
      email,
      phone,
      password,
      date,
      address,
      signupDetails,
    } = this.state

    if (name === '') {
      console.log('name field is required')
    } else if (email === '') {
      console.log('email field is required')
    } else if (password === '') {
      console.log('password field is required')
    } else if (date === '') {
      console.log('date field is required')
    } else if (address === '') {
      console.log('address field is required')
    } else {
      const newSignupDetails = {
        id: uuidv4(),
        name,
        email,
        phone,
        password,
        date,
        address,
      }
      console.log(newSignupDetails)
      this.setState(prevState => ({
        signupDetails: [...prevState.signupDetails, newSignupDetails],
        name: '',
        phone: '',
      }))
      localStorage.setItem('userDetails', JSON.stringify(signupDetails))
      const {history} = this.props
      history.replace('/')
      localStorage.setItem('Details', JSON.stringify([newSignupDetails]))
    }
  }

  render() {
    const {name, email, phone, password, date, address} = this.state
    return (
      <div className="login-container">
        <h1>Sign Up</h1>
        <form className="form-container" onSubmit={this.onSubmitSinUp}>
          <label htmlFor="name">user name</label>
          <input
            id="name"
            type="name"
            value={name}
            placeholder="Enter The User Name"
            onChange={this.onChangeName}
          />
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
            placeholder="Create The User Password"
            onChange={this.onChangePassword}
          />
          <label htmlFor="phone">phone</label>
          <input
            id="phone"
            type="text"
            value={phone}
            placeholder="Create The User Phone number"
            onChange={this.onChangePhone}
          />
          <label htmlFor="date">Date of birth</label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={this.onChangeDate}
          />
          <label htmlFor="address">Address</label>
          <input
            id="address"
            type="text"
            value={address}
            placeholder="Enter The User Address"
            onChange={this.onChangeAddress}
          />
          <button type="submit" className="signup-btn">
            submit
          </button>
          <p className="redirect-text">
            i have already account <Link to="/login">login</Link>
          </p>
        </form>
      </div>
    )
  }
}

export default withRouter(Signup)
