// Write your code here
import './index.css'

const Message = props => {
  const {isChecked} = props

  return (
    <h1 className="heading"> {isChecked ? 'Please Login' : 'Welcome User'}</h1>
  )
}

export default Message
