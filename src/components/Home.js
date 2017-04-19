import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Nav from './Nav'
import App from '../App'
import Name from './Name'
import Results from './Results'
import HomePage from './HomePage'
import Login from './Login'

const Home = (props) => (
<Router>
	<div>
		<Nav />
		<Route exact path="/" component={HomePage} />
		<Route exact path="/login" component={Login} />
		<Route exact path="/mainform" component={App} />
		<Route path="/name" component={Name} />
		<Route path="/results" component={Results} />
	</div>
</Router>
)

export default Home;