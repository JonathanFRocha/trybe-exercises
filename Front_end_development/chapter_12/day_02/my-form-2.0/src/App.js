import "./App.css";
import React from "react";
import Form from "./Form";
const InitState = {
  name: "",
  email: "",
  cpf: "",
  address: "",
  city: "",
  state: "SC",
  addressType: "",
  resume: "",
  job: "",
  jobDescription: "",
};

class App extends React.Component {
  constructor() {
    super();
    this.state = InitState;
  }

  handleChanges(e) {
    const { value, name } = e.target;
    let newValue = value;
    if (name === "name") {
      newValue = value.toUpperCase();
    }
    this.changeState(newValue, name);
  }

  handleBlur;

  changeState(value, name) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className="container">
        <Form handleChanges={(e) => this.handleChanges(e)} values={this.state} />
      </div>
    );
  }
}

export default App;
