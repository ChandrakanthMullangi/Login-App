// Write your code here
import './index.css'

const Logout = props => {
  const {isChange} = props

  return (
    <button type="button" className="btn" onClick={isChange}>
      Logout
    </button>
  )
}

export default Logout
