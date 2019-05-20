import React from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import * as authActions from '../actions/authActions'
require ('./signup.css')

const mapStateToProps = (store) => ({
  usernameStr:store.auth.usernameStr,
  passwordStr:store.auth.passwordStr,
  isLoggedIn:store.auth.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  updateUsernameStr:(e) => {dispatch(authActions.updateUsernameStr(e.target.value))},
  updatePasswordStr:(e) => {dispatch(authActions.updatePasswordStr(e.target.value))},
  signupApi:(usernameStr, passwordStr) => {dispatch(authActions.signupApi(usernameStr, passwordStr))},
});


class SignupPage extends React.Component{
  constructor(props){
    super(props);
  }
  
  // componentDidMount () {
  //   document.body.style.backgroundImage = "url('./img/food6.jpg')";
  // }

  render(){
    if (this.props.isLoggedIn === true) {
      return <Redirect to="/maincontainer"></Redirect>
    } else
    return (
      <div className="loginSignup">
        <h1 className="loginSignupHeader">Sign Up</h1>
        <img className="foodImg" src="https://img.icons8.com/bubbles/100/000000/food.png"></img> 
        {/* input field for username */}
        <div className="username input">
          <input type="text" className="loginSignupInput" value={this.props.usernameStr} onChange={this.props.updateUsernameStr}></input>
        </div>
        {/* input field for password */}
        <div className="password input">
          <input type="password" className="passwordInput" value={this.props.passwordStr} onChange={this.props.updatePasswordStr}></input>
        </div>
        {/* contains the signup and login button */}
        <div className="buttons">
          <span>
            <button id="completeSignup" onClick={(e)=>{this.props.signupApi(this.props.usernameStr, this.props.passwordStr)}}>Sign Me Up!</button>
          </span>
       </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage)
