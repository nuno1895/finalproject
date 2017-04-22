var express = require('express');
var Validator = require('validator');
var isEmpty = require('lodash/isEmpty');

let router = express.Router();

function validateInput(data) {
	let errors = {};
	
	if(!Validator.isEmail(data.email)){
		errors.email = "Email is invalid";
	}

	if(Validator.isNull(data.email)){
		errors.email = "Email is Required";

	}
	if(Validator.isNull(data.username)){
		errors.username = "A User Name is Required";

	}
	if(Validator.isNull(data.password)){
		errors.password = "Password is Required";

	}	
	if(Validator.isNull(data.passwordConfirmation)){
		errors.passwordConfirmation = "Please Confirm Password";

	}
	if(!Validator.equals(data.password, data.passwordConfirmation)){
		errors.passwordConfirmation = "Passwords Must Match";
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
}

router.post('/', (req, res) => {
	const { errors, isValid } = validateInput(req.body);

	if (!isValid) {
		res.status(400).json(errors);
	}

});

 module.exports = router;