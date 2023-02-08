// Write your code here
import {Component} from 'react'

import './index.css'

import Message from '../Message'

import Login from '../Login'

import Logout from '../Logout'

class Home extends Component {
  state = {isChecked: true}

  onChange = () => {
    this.setState(prevState => ({isChecked: !prevState.isChecked}))
  }

  render() {
    const {isChecked} = this.state

    return (
      <div className="bg-container">
        <div className="message-container">
          <Message isChecked={isChecked} />
          {isChecked && <Login isChange={this.onChange} />}
          {!isChecked && <Logout isChange={this.onChange} />}
        </div>
      </div>
    )
  }
}

export default Home
