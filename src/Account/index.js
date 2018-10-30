import React, { Component } from 'react';


class Account extends Component {
  constructor(props){
    super(props)
      this.state={
        balance:0
      }
    }


  handleChange=(e)=> {

    this.setState({

    value: e.target.value

    })
  }
  handleDepositClick=(e)=> {
   // It is good practice to still prevent default behavior
   e.preventDefault();
   // set a local variable to the amount entered in the text box.
   const amount = parseInt(this.state.value);
   // set a local variable to the new balance based off of the original balance + amount
   const newBalance = this.state.balance + amount;
   // set the balance to the newBalance using the setState method (necessary)
   this.setState({
     balance: newBalance
   })
   // empty out the text box in this component
   this.state.value= '';
 }
  handleSubmit=(e) =>{
   e.preventDefault();
 }
 handleWidthdrawClick=(e)=> {
  // It is good practice to still prevent default behavior
  e.preventDefault();
  // set a local variable to the amount entered in the text box.
  const amount = parseInt(this.state.value);
  // set a local variable to the new balance based off of the original balance + amount
  const newBalance = this.state.balance - amount;
  // set the balance to the newBalance using the setState method (necessary)
  this.setState({
    balance: newBalance
  })
  // empty out the text box in this component
  this.state.value= '';
}
 handleSubmit=(e) =>{
  e.preventDefault();
}
  render() {
    // set the default class to `balance` for the balanceClass.
 let balanceClass = 'balance';
 // if the balance is 0, then add the class zero to balanceClass
 if (this.state.balance === 0) {
   balanceClass += ' zero';
 }
    return (

      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={balanceClass}>{this.state.balance}</div>
       <form >
        <input type="text"  value={this.state.value} onChange={this.handleChange}  />
        <button onClick={this.handleDepositClick} >Deposit </button>
        <button onClick={this.handleWidthdrawClick} >Widthdraw </button>
        </form>
      </div>

    )
  }
}

export default Account;
