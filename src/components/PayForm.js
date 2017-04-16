import React, { Component } from 'react';

class PayForm extends Component {
    constructor(){
        super();

        this.state = {
            payform : {}
        }
    }

	render() {
    	return (

		<div class="row">
			<div class="col-md-4 col-md-offset-4">
				<h1 class="text-center">Budget</h1>
			</div>
			<div class="col-md-4 col-md-offset-4">
				<h2 class="text-center">Pay</h2>
				<form id="payForm" name="payForm">
				   <div class="form-group">
				     <label for="month">Current Month</label>
				     <input type="text" class="form-control" id="month" name="month" placeholder="Current Month">
				   </div>
					<div class="form-group">
					  <label for="payFrequency">How many Times are you getting paid this month</label>
					  <input type="number" class="form-control" id="payFrequency" name="payFrequency" data-key="payFrequency" placeholder="times per month">
					</div>
					<div class="form-group">
					  <label for="takeHome">Current Take Home Pay Per Check After Taxes</label>
					  <input type="number" class="form-control" id="takeHome" name="takeHome" data-key="takeHome" placeholder="After Taxes">
					</div>
				  
				  <button type="submit" id="payFormButton" class="btn btn-default">Submit</button>
				</form>
			</div>
		</div>

	<div class="row">
	   );
  	}
}

export default PayForm;