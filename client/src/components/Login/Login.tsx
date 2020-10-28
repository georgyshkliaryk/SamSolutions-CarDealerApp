import React from "react";
import { Link } from "react-router-dom";

import "./Login.scss";
import SearchButton from "../buttons/SearchButton/SearchButton";
import { Redirect } from "react-router-dom";

import password1 from "../../public/assets/imgs/password.png";

import translate from "../../i18n/translate";

interface ILogin {
  //  LOGIN
  loginError1: string;
  passwordError1: string;

  loginValue1: string;
  usersArray: string[];
  passwordValue1: string;

  //  REGISTER
  loginError2: string;
  passwordError2: string;
  confirmPasswordError: string;
  confirmPasswordValue: string;
  loginValue2: string;
  passwordValue2: string;

  passwordType1: string;
  passwordVisibilityImg1: any;
  passwordType2: string;
  passwordVisibilityImg2: any;
}

class Login extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    const token: any = localStorage.getItem("token");

    let loggedIn: boolean = true;
    if (token == null) {
      loggedIn = false;
    }

    this.state = {
      //  LOGIN
      loginError1: "",
      passwordError1: "",
      loggedIn,

      loginValue1: "",
      passwordValue1: "",
      usersArray: [],

      login: false,
      store: null,

      //  REGISTER
      loginError2: "",
      passwordError2: "",
      confirmPasswordError: "",
      confirmPasswordValue: "",
      loginValue2: "",
      passwordValue2: "",

      passwordType1: "password",
      passwordVisibilityImg1: require("../../public/assets/imgs/password.png"),
      passwordType2: "password",
      passwordVisibilityImg2: require("../../public/assets/imgs/password.png"),
    };
  }

  // state: ILogin = {
  //     loginError1: "",
  //     passwordError1: "",
  //     loginValue1: "",
  //     passwordValue1: "",

  //     loginError2: "",
  //     passwordError2: "",
  //     confirmPasswordError: "",
  //     confirmPasswordValue: "",
  //     loginValue2: "",
  //     passwordValue2: "",

  //     passwordType1: "password",
  //     passwordVisibilityImg1: require('../../public/assets/imgs/password.png'),
  //     passwordType2: "password",
  //     passwordVisibilityImg2: require('../../public/assets/imgs/password.png')
  //};

  handlePasswordVisibility1() {
    if (this.state.passwordType1 == "text") {
      this.setState({
        passwordType1: "password",
        passwordVisibilityImg1: require("../../public/assets/imgs/password.png"),
      });
    } else {
      this.setState({
        passwordType1: "text",
        passwordVisibilityImg1: require("../../public/assets/imgs/password2.png"),
      });
    }
  }

  handlePasswordVisibility2() {
    if (this.state.passwordType2 == "text") {
      this.setState({
        passwordType2: "password",
        passwordVisibilityImg2: require("../../public/assets/imgs/password.png"),
      });
    } else {
      this.setState({
        passwordType2: "text",
        passwordVisibilityImg2: require("../../public/assets/imgs/password2.png"),
      });
    }
  }

  handleChangeValue1(event) {
    this.setState({
      loginValue1: event.target.value,
    });
  }

  handleChangePassword1(event) {
    this.setState({
      passwordValue1: event.target.value,
    });
  }

  handleChangeValue2(event) {
    this.setState({
      loginValue2: event.target.value,
    });
  }

  handleChangePassword2(event) {
    this.setState({
      passwordValue2: event.target.value,
    });
  }

  handleChangeConfirmPassword2(event) {
    this.setState({
      confirmPasswordValue: event.target.value,
    });
  }

  // login() {
  //   fetch("http://localhost:5000/api/ads", {
  //     method: "POST",
  //     body: JSON.stringify(this.state.loginValue1)
  //   }).then((response: any) => {
  //     response.json().then((result: any) => {
  //       console.warn("result: ", result);
  //       localStorage.setItem(
  //         "login",
  //         JSON.stringify({
  //           login: true,
  //           token: result.token
  //         })
  //       );
  //     });
  //   });
  // }

  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <div className="login">
        <div className="login__title">
          {translate("loginNow")}
          {/* Login or register now! */}
        </div>
        <div className="main__container">
          <div className="login__container">
            <div className="login__container-title small-title">
              {translate("loginCaps")}
            </div>
            <form
              className="login__container-form"
              onSubmit={(event) => {
                event.preventDefault(); // Prevents page reloading
                let newArr: string[] = [];
                let i: number = 0;
                i++;
                if (
                  this.state.loginValue1 !== "" &&
                  this.state.passwordValue1 !== "" &&
                  this.state.loginError1 == "" &&
                  this.state.passwordError1 == ""
                ) {
                  newArr.push(this.state.loginValue1);
                  this.props.updateData(this.state.loginValue1);
                  newArr.push(this.state.loginValue1);
                  sessionStorage.setItem(
                    Math.random().toString(),
                    this.state.loginValue1
                  );

                  // this.setState({usersArray: newArr});
                  // console.log(this.state.usersArray);

                  //TODO: jwt

                  localStorage.setItem("token", "dsfskfmsgdfdhdgjsdglw");
                  this.setState({
                    loggedIn: true,
                  });
                }

                // this.login();

                const loginRegExp = new RegExp(
                  "^[a-zA-Z][a-zA-Z0-9-_.]{0,20}$"
                );
                const passwordRegExp = new RegExp(
                  "^[a-zA-Z][a-zA-Z0-9-_.]{0,20}$"
                );

                if (this.state.loginValue1 == "") {
                  //login value check
                  this.setState({
                    loginError1: "enter your login!",
                  });
                } else {
                  if (loginRegExp.test(this.state.loginValue1) == false) {
                    this.setState({
                      loginError1: "only A..z, 0..9, _ and . avaliable!",
                    });
                  } else {
                    this.setState({
                      loginError1: "",
                    });
                  }
                }
                if (this.state.passwordValue1 == "") {
                  //password value check
                  this.setState({
                    passwordError1: "enter your password!",
                  });
                } else {
                  if (passwordRegExp.test(this.state.passwordValue1) == false) {
                    this.setState({
                      passwordError1: "only eng letters and digits!",
                    });
                  } else {
                    this.setState({
                      passwordError1: "",
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
                type={this.state.passwordType1}
                placeholder="password"
                value={this.state.passwordValue1}
                onChange={this.handleChangePassword1.bind(this)}
                className="input1"
              />
              <a onClick={this.handlePasswordVisibility1.bind(this)}>
                <img
                  className="password-visible"
                  src={this.state.passwordVisibilityImg1}
                />
              </a>
              <br />
              <span className="login__error">{this.state.passwordError1}</span>
              <br />
              <span className="additional">
            <Link to="">{translate("forgotPassword")}</Link>
              </span>
              <div className="login__btn">
                {/* <Link to="/"> */}
                <SearchButton content={translate("confirmBtn")} />
                {/* </Link> */}
              </div>
            </form>
          </div>

          {/* -------------------------------------------------------------------------------------------- */}
        </div>
      </div>
    );
  }
}

export default Login;
