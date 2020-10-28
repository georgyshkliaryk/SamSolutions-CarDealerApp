import React from "react";
import Login from "../components/Login/Login";
class LoginPage extends React.Component<any, any> {
  state = {
    name: "",
  };
  constructor(props: any) {
    super(props);
  }

  updateData = (value) => {
    this.setState({ name: value });
  };

  render() {
    return (
      <>
        <Login
          updateData={() => {
            this.props.updateData2(this.state.name);
          }}
        />
      </>
    );
  }
}

export default LoginPage;
