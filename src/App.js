import {Route, Switch, Redirect} from 'react-router-dom'
import SignUp from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/signup" component={SignUp} />
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
