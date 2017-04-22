import React, { Component } from 'react';

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		// this.state = {
		// 	email: '',
		// 	username: '',
		// 	password: '',
		// 	passwordconfirmation: '',
		// 	errors: {}
		// }
		this.state = { users: [] };
		// this.onChange = this.onChange.bind(this);
		// this.onSubmit = this.onSubmit.bind(this);
	}
  componentWillMount(){
    fetch("/users")
    .then(res => res.json())
    .then(users => {

    	debugger;
      this.setState({
        users 
      })
    })
  }

	// onChange(e) {
	// 	this.setState({ [e.target.name]: e.target.value });
	// }


	// onSubmit(e) {
	// 	e.preventDefault();
	// 	this.setState({ errors: {} });

	// 	this.props.userSignupRequest(this.state).then(
	// 		() => {},
	// 		(err) => this.setState({ errors: err.response.data })
	// 	);
	// }

	render() {
		return (
			<div>
			<h1>Who Are You?</h1>
			<select>
				{this.state.users.map((user, index) => <option key={index} key={user.id} value={user.id} {...user} />)}
			</select>
			</div>

		);
	}
}
// LoginForm.propTypes = {
// 	userSignupRequest: React.PropTypes.func.isRequired
// }


 export default LoginForm;