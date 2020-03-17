import React from "react";
import { Link } from "react-router-dom";
import "./Login.scss";
import SearchButton from "../buttons/SearchButton/SearchButton";

import password1 from '../../public/assets/imgs/password.png';

interface ILogin {
    loginError1: string;
    passwordError1: string;
    loginValue1: string;
    passwordValue1: string;

    loginError2: string;
    passwordError2: string;
    confirmPasswordError: string,
    confirmPasswordValue: string,
    loginValue2: string;
    passwordValue2: string;

    passwordType: string;
}

class Login extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  state: ILogin = {
      loginError1: "",
      passwordError1: "",
      loginValue1: "",
      passwordValue1: "",

      loginError2: "",
      passwordError2: "",
      confirmPasswordError: "",
      confirmPasswordValue: "",
      loginValue2: "",
      passwordValue2: "",

      passwordType: "password"
  };

  handleChangeValue1(event) {
    this.setState({
      loginValue1: event.target.value
    });
  }

  handleChangePassword1(event) {
    this.setState({
      passwordValue1: event.target.value
    });
  }

  handleChangeValue2(event) {
    this.setState({
      loginValue2: event.target.value
    });
  }

  handleChangePassword2(event) {
    this.setState({
      passwordValue2: event.target.value
    });
  }
  handleChangeConfirmPassword2(event) {
    this.setState({
      confirmPasswordValue: event.target.value
    });
  }

  render() {
    return (
      <div className="login">
        <div className="login__title">Login or register now!</div>
        <div className="main__container">
          <div className="login__container">
            <div className="login__container-title small-title">LOGIN</div>
            <form
              className="login__container-form"
              onSubmit={event => {
                event.preventDefault(); // Prevents page reloading

                const loginRegExp = new RegExp("^[a-zA-Z][a-zA-Z0-9-_\.]{0,20}$");
                const passwordRegExp = new RegExp("^[a-zA-Z][a-zA-Z0-9-_\.]{0,20}$");

                if (this.state.loginValue1 == "") {      //login value check
                  this.setState({
                    loginError1: "enter your login!"
                  });
                } else {
                  if (loginRegExp.test(this.state.loginValue1) == false) { 
                    this.setState({
                      loginError1: "only A..z, 0..9, _ and . avaliable!"
                    });
                  } 
                  else {
                    this.setState({
                      loginError1: ""
                    });
                  }
                }
                if (this.state.passwordValue1 == "") {       //password value check
                  this.setState({
                    passwordError1: "enter your password!"
                  });
                } else {
                  if (passwordRegExp.test(this.state.passwordValue1) == false) { 
                    this.setState({
                      passwordError1: "only eng letters and digits!"
                    });
                  } 
                  else {
                    this.setState({
                      passwordError1: ""
                  });
                }
                
              }
                console.log(this.state.loginValue1);
              }}
            >
              <input //LOGIN
                type="text"
                placeholder="login"
                value={this.state.loginValue1}
                onChange={this.handleChangeValue1.bind(this)}
              />
              <br />
              <span className="login__error">{this.state.loginError1}</span>
              <br />
              <input //PASSWORD
                type="text"
                placeholder="password"
                value={this.state.passwordValue1}
                onChange={this.handleChangePassword1.bind(this)}
              />
              <br />
              <span className="login__error">{this.state.passwordError1}</span>
              <br />
              <span className="additional">
                <Link to="">forgot password?</Link>
              </span>
              <div className="login__btn">
                {/* <Link to="/"> */}
                <SearchButton content="Confirm" />
                {/* </Link> */}
              </div>
            </form>
          </div>

{/* -------------------------------------------------------------------------------------------- */}


          <div className="register__container">
            <div className="login__container-title small-title">REGISTER</div>
            <form 
              className="login__container-form"
              onSubmit={event => {
                event.preventDefault(); // Prevents page reloading

                const loginRegExp = new RegExp("^[a-zA-Z][a-zA-Z0-9-_\.]{0,20}$");
                const passwordRegExp = new RegExp("^[a-zA-Z][a-zA-Z0-9-_\.]{0,20}$");

                if (this.state.loginValue2 == "") {      //login value check
                  this.setState({
                    loginError2: "enter your login!"
                  });
                } else {
                  if (loginRegExp.test(this.state.loginValue2) == false) { 
                    this.setState({
                      loginError2: "only A..z, 0..9, _ and . avaliable!"
                    });
                  } 
                  else {
                    this.setState({
                      loginError2: ""
                    });
                  }
                }
                if (this.state.passwordValue2 == "") {       //password value check
                  this.setState({
                    passwordError2: "enter your password!"
                  });
                } else {
                  if (passwordRegExp.test(this.state.passwordValue2) == false) { 
                    this.setState({
                      passwordError2: "only eng letters and digits!"
                    }); 
                  }
                  else {
                    this.setState({
                      passwordError2: ""
                    });
                  }
                }
                if (this.state.passwordValue2 != this.state.confirmPasswordValue) {   //confirm password check
                  this.setState({
                    confirmPasswordError: "passwords don't match!"
                  });
                }
                else {
                  this.setState({
                    confirmPasswordError: ""
                  });
                }








                console.log(this.state.loginValue2);
              }}
              >
            
              <input type="text"
              placeholder="login"
              value={this.state.loginValue2}
              onChange={this.handleChangeValue2.bind(this)}
              />
              <br />
              <span className="login__error">{this.state.loginError2}</span>
              <br />
              <input 
              type={this.state.passwordType} 
              placeholder="password"
              className="input1"
              value={this.state.passwordValue2} 
              onChange={this.handleChangePassword2.bind(this)} 
              /> <a onClick={
                () => {
                  if (this.state.passwordType == "text") {
                  this.setState({
                    passwordType: "password"
                  })
                }
                else {
                  this.setState({
                    passwordType: "text"
                  })
                }
                }
              }><img className="password-visible" src={password1}/></a>
              <br />
              <span className="login__error">{this.state.passwordError2}</span>
              <br />
              <input 
              type={this.state.passwordType}  
              placeholder="confirm password" 
              value={this.state.confirmPasswordValue}
              onChange={this.handleChangeConfirmPassword2.bind(this)} 
              />
              <br />
            <span className="login__error">{this.state.confirmPasswordError}</span>
              <br />
              <span className="additional">
                <Link to="">sign in as a guest</Link>
              </span>
              <div className="register__btn">
                {/* <Link to="/"> */}
                  <SearchButton content="Confirm" />
                {/* </Link> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
