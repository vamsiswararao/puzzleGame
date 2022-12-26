import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import NameDetails from '../NameDetails'
import Game from '../Game'
import './index.css'

class Home extends Component {
  render() {
    const details = localStorage.getItem('Details')
    const user = JSON.parse(details)
    const onClickButton = () => {
      localStorage.removeItem('Details')
      const {history} = this.props
      history.replace('/SignUp')
    }

    return (
      <div className="game-bg">
        <div className="header-container">
          <img
            src="https://www.vippng.com/png/full/416-4161690_empty-profile-picture-blank-avatar-image-circle.png"
            alt="user"
            width="100"
            height="100"
          />
          <div className="userDetails-Container">
            <div className="text-container">
              <p>user name</p>
              <p>email</p>
              <p>date of birth</p>
              <p>Address</p>
              <p>phone number</p>
            </div>
            <ul className="details-container">
              {user.map(eachItem => (
                <NameDetails key={eachItem.id} jobDetails={eachItem} />
              ))}
            </ul>
          </div>
          <button type="button" className="logout-btn" onClick={onClickButton}>
            Logout
          </button>
        </div>
        <Game />
      </div>
    )
  }
}

export default withRouter(Home)
