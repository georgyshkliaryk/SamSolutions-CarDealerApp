import React from "react";
import { Link } from "react-router-dom";
import "./Login.scss";
import SearchButton from "../buttons/SearchButton/SearchButton";

interface ILogin {
  loginError: string;
  passwordError: string;
  confirmPasswordError: string;
  loginValue: string;
  passwordValue: string;
}

class Login extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  state: ILogin = {
    loginError: "",
    passwordError: "",
    confirmPasswordError: "",
    loginValue: "",
    passwordValue: ""
  };

  handleChangeValue(event) {
    this.setState({
      loginValue: event.target.value
    });
  }

  handleChangePassword(event) {
    this.setState({
      passwordValue: event.target.value
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

                if (this.state.loginValue == "") {      //login value check
                  this.setState({
                    loginError: "enter your login!" 
                  });
                } else {
                  if (loginRegExp.test(this.state.loginValue) == false) { 
                    this.setState({
                      loginError: "only A..z, 0..9, _ and . avaliable!"
                    });
                  } 
                  else {
                    this.setState({
                      loginError: ""
                    });
                  }
                }



                if (this.state.passwordValue == "") {       //password value check
                  this.setState({
                    passwordError: "enter your password!"
                  });
                } else {
                  if (passwordRegExp.test(this.state.passwordValue) == false) { 
                    this.setState({
                      passwordError: "only eng letters and digits!" 
                    });
                  } 
                  else {
                    this.setState({
                      passwordError: "",
                  });
                }
                
              }
                //this.setState({
                // loginValue: this.props.value,
                // loginError: this.state.loginError,
                //passwordValue: ""
                // });
                console.log(this.state.loginValue);
              }}
            >
              <input //LOGIN
                type="text"
                placeholder="login"
                value={this.state.loginValue}
                onChange={this.handleChangeValue.bind(this)}
              />
              <br />
              <span className="login__error">{this.state.loginError}</span>
              <br />
              <input //PASSWORD
                type="text"
                placeholder="password"
                value={this.state.passwordValue}
                onChange={this.handleChangePassword.bind(this)}
              />
              <br />
              <span className="login__error">{this.state.passwordError}</span>
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
          <div className="register__container">
            <div className="login__container-title small-title">REGISTER</div>
            <form className="login__container-form">
              <input type="text" placeholder="login" />
              <br />
              <span className="login__error"></span>
              <br />
              <input type="password" placeholder="password" />
              <br />
              <span className="login__error"></span>
              <br />
              <input type="password" placeholder="confirm password" />
              <br />
              <span className="login__error"></span>
              <br />
              <span className="additional">
                <Link to="">sign in as a guest</Link>
              </span>
              <div className="register__btn">
                <Link to="/">
                  <SearchButton content="Confirm" />
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
