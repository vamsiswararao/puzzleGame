import {Redirect, Route} from 'react-router-dom'

const ProtectedRoute = props => {
  const jwtToken = JSON.parse(localStorage.getItem('Details'))
  console.log(jwtToken)
  if (jwtToken === null) {
    return <Redirect to="/signup" />
  }
  return <Route {...props} />
}

export default ProtectedRoute
