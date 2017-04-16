import React, { Component } from 'react';
import Input from './Input';

class MainForm extends Component {
  constructor() {
    super();
    // Creating a giant state object to hold all of our form data
    this.state = {
      pay: {
        month: "",
        takeHome: "",
        frequency: ""
      },
       food: {
        groceries: "",
        eatingOut: ""
      },
       clothing: {
         clothingAdult: '',
         clothingKids:'',
         dryCleaning:''
       },
       utilities: {
         electricity: '',
         mobilePhone:'',
         gas:'',
         trash: '',
         water:'',
         internet:'',
         cable:''
       },
       housing: {
         mortgageRent: '',
         secondMortgage:'',
         taxes:'',
         repairsMaint: '',
         dues:'',
       },
       savings: {
         emergency: '',
         retirement:'',
         college:''
       },
       medical: {
         medications:'',
         doctorBills:'',
         hospitalBills:'',
         otherMedical:'',
         otherMedical2:'',
         otherMedical3:''
       },
        section: "pay",
        section: "food",
        section: "clothing",
        section: "utilities",
        section: "housing",
        section: "savings",
        section: "medical"
    };

    // binding our methods which get passed as callbacks
    this.handleInputChange = this.handleInputChange.bind(this);
    this.getSalary = this.getSalary.bind(this);
  }

  // this function handles any input changes and updates the state
  handleInputChange(event, type, field) {
    const newState = Object.assign({}, this.state);
    newState[type][field] = event.target.value;
    this.setState(newState);
  }
  
  getSalary() {
    console.log("Your salary is" + this.state.pay.frequency * this.state.pay.takeHome);
  }

  renderPay() {
    return (
      <div>
      <h1> Your Pay </h1>
        <br />
        <label>Current Month:</label>
        <Input onChange={(event) => this.handleInputChange(event, "pay", "month") } value={this.state.pay.month}  />
        <br />
        <br />
        <label>Weekly Take Home:</label>
        <Input onChange={(event) => this.handleInputChange(event, "pay", "takeHome") } value={this.state.pay.takeHome}  />
        <br />
        <br />
        <label>How Often do you get payed every Month:</label>
        <Input onChange={(event) => this.handleInputChange(event, "pay", "frequency") } value={this.state.pay.frequency}  />
        <br />
        <br />
        <button onClick={() => this.setState({section: "food"})}>Next</button>
      </div>
    );
  }

  renderFood() {
    return (
      <div>
        <h1> Food </h1>
          <br />
          <label>Groceries:</label>
          <Input onChange={(event) => this.handleInputChange(event, "food", "groceries") } value={this.state.food.groceries}  />
          <br />
          <br />
          <label>Eating Out:</label>
          <Input onChange={(event) => this.handleInputChange(event, "food", "eatingOut") } value={this.state.food.eatingOut}  />
          <br />
          <br />
          <button onClick={() => this.setState({section: "pay"})}>Back </button>
          <button onClick={() => this.setState({section: "clothing"})}>Next</button>
      </div>
    );
  }

  renderClothing() {
    return (
      <div>
        <h1> Clothing </h1>
          <br />
          <label>Clothes For Adult:</label>
          <Input onChange={(event) => this.handleInputChange(event, "clothing", "clothingAdult") } value={this.state.clothing.clothingAdult}  />
          <br />
          <br />
          <label>Clothing For Kids:</label>
          <Input onChange={(event) => this.handleInputChange(event, "clothing", "clothingKids") } value={this.state.clothing.clothingKids}  />
          <br />
          <br />
          <label>Laundry/Dry Clothing:</label>
          <Input onChange={(event) => this.handleInputChange(event, "clothing", "dryCleaning") } value={this.state.clothing.dryCleaning}  />
          <br />
          <br />
          <button onClick={() => this.setState({section: "food"})}>Back </button>
          <button onClick={() => this.setState({section: "utilities"})}>Next</button>
      </div>
    );
  }

  renderUtilities() {
    return (
      <div>
        <h1> Utilities </h1>
          <br />
          <label>Electricity:</label>
          <Input onChange={(event) => this.handleInputChange(event, "utilities", "electricity") } value={this.state.utilities.electricity}  />
          <br />
          <br />
          <label>Mobile Phone:</label>
          <Input onChange={(event) => this.handleInputChange(event, "utilities", "mobilePhone") } value={this.state.utilities.mobilePhone}  />
          <br />
          <br />
          <label>Gas:</label>
          <Input onChange={(event) => this.handleInputChange(event, "utilities", "gas") } value={this.state.utilities.gas}  />
          <br />
          <br />
          <label>Trash:</label>
          <Input onChange={(event) => this.handleInputChange(event, "utilities", "trash") } value={this.state.utilities.trash}  />
          <br />
          <br />
          <label>Water:</label>
          <Input onChange={(event) => this.handleInputChange(event, "utilities", "water") } value={this.state.utilities.water}  />
          <br />
          <br />
          <label>Internet:</label>
          <Input onChange={(event) => this.handleInputChange(event, "utilities", "internet") } value={this.state.utilities.internet}  />
          <br />
          <br />
          <label>Cable:</label>
          <Input onChange={(event) => this.handleInputChange(event, "utilities", "cable") } value={this.state.utilities.cable}  />
          <br />
          <br />
          <button onClick={() => this.setState({section: "clothing"})}>Back </button>
          <button onClick={() => this.setState({section: "housing"})}>Next</button>
      </div>
    );
  }

  renderHousing() {
    return (
      <div>
        <h1> Housing </h1>
          <br />
          <label>Mortgage or Rent:</label>
          <Input onChange={(event) => this.handleInputChange(event, "housing", "mortgageRent") } value={this.state.housing.mortgageRent}  />
          <br />
          <br />
          <label>Second Mortgage:</label>
          <Input onChange={(event) => this.handleInputChange(event, "housing", "secondMortgage") } value={this.state.housing.secondMortgage}  />
          <br />
          <br />
          <label>Taxes:</label>
          <Input onChange={(event) => this.handleInputChange(event, "housing", "taxes") } value={this.state.housing.taxes}  />
          <br />
          <br />
          <label>Repairs & Maintance:</label>
          <Input onChange={(event) => this.handleInputChange(event, "housing", "repairsMaint") } value={this.state.housing.repairsMaint}  />
          <br />
          <br />
          <label>Housing Dues or Maintance Fees:</label>
          <Input onChange={(event) => this.handleInputChange(event, "housing", "dues") } value={this.state.housing.dues}  />
          <br />
          <br />
          <button onClick={() => this.setState({section: "utilities"})}>Back </button>
          <button onClick={() => this.setState({section: "savings"})}>Next</button>
      </div>
    );
  }

  renderSavings() {
    return (
      <div>
        <h1> Saving </h1>
          <br />
          <label>Emergency Savings:</label>
          <Input onChange={(event) => this.handleInputChange(event, "savings", "emergency") } value={this.state.savings.emergency}  />
          <br />
          <br />
          <label>Retirement:</label>
          <Input onChange={(event) => this.handleInputChange(event, "savings", "retirement") } value={this.state.savings.retirement}  />
          <br />
          <br />
          <label>College:</label>
          <Input onChange={(event) => this.handleInputChange(event, "savings", "college") } value={this.state.savings.college}  />
          <br />
          <br />
          <button onClick={() => this.setState({section: "housing"})}>Back </button>
          <button onClick={() => this.setState({section: "medical"})}>Next</button>
      </div>
    );
  }

  renderMedical() {
    return (
      <div>
        <h1> Medical </h1>
          <br />
          <label>Medications:</label>
          <Input onChange={(event) => this.handleInputChange(event, "medical", "medications") } value={this.state.medical.medications}  />
          <br />
          <br />
          <label>Doctor Bills:</label>
          <Input onChange={(event) => this.handleInputChange(event, "medical", "doctorBills") } value={this.state.medical.doctorBills}  />
          <br />
          <br />
          <label>Hospital Bills:</label>
          <Input onChange={(event) => this.handleInputChange(event, "medical", "hospitalBills") } value={this.state.medical.hospitalBills}  />
          <br />
          <br />
          <label>Other Medical:</label>
          <Input onChange={(event) => this.handleInputChange(event, "medical", "otherMedical") } value={this.state.medical.otherMedical}  />
          <br />
          <br />
          <label>Other Medical:</label>
          <Input onChange={(event) => this.handleInputChange(event, "medical", "otherMedical2") } value={this.state.medical.otherMedical2}  />
          <br />
          <br />
          <label>Other Medical:</label>
          <Input onChange={(event) => this.handleInputChange(event, "medical", "otherMedical3") } value={this.state.medical.otherMedical3}  />
          <br />
          <br />
          <button onClick={() => this.setState({section: "savings"})}>Back </button>
          <button onClick={() => this.setState({section: "Insurance"})}>Next</button>
      </div>
    );
  }

  renderForm() {
    if (this.state.section === "pay") {
      return this.renderPay();
    } 
    else if(this.state.section === "food"){
      return this.renderFood();
    }
    else if(this.state.section === "clothing"){
      return this.renderClothing();
    }
    else if(this.state.section === "utilities"){
      return this.renderUtilities();
    }
    else if(this.state.section === "housing"){
      return this.renderHousing();
    }
    else if(this.state.section === "savings"){
      return this.renderSavings();
    }
    else if(this.state.section === "medical"){
      return this.renderMedical();
    }
  }

  // renderForm decides what parts of the form to render

  render() {
    console.log(this.state);
    return (
      <div>
       {this.renderForm()}
      </div>
    );
  }
}

export default MainForm;