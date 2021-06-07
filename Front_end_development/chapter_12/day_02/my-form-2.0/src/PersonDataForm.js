import React from "react";
import { connect } from "react-redux";
import handlePersonData from "./actions/personDataAction";
const brState = [
  "AC",
  "AL",
  "AM",
  "AP",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MT",
  "MS",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RO",
  "RS",
  "RR",
  "SC",
  "SE",
  "SP",
  "TO",
];
class PersonDataForm extends React.Component {
  renderStates(statesArr) {
    // const {
    //   values: { state },
    // } = this.props;
    return statesArr.map((estado, index) => {
      return (
        <option key={index} value={estado}>
          {estado}
        </option>
      );
    });
  }

  render() {
    const renderedOptions = this.renderStates(brState);
    const { name, email, cpf, address, city, state, handleChanges } = this.props;

    return (
      <fieldset>
        <div>
          <label>Nome:</label>
          <input
            maxLength="40"
            required
            type="text"
            name="name"
            value={name}
            onChange={(e) => handleChanges(e.target.name, e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            maxLength="50"
            required
            type="text"
            name="email"
            value={email}
            onChange={(e) => handleChanges(e.target.name, e.target.value)}
          />
        </div>
        <div>
          <label>CPF:</label>
          <input
            maxLength="11"
            required
            type="text"
            name="cpf"
            value={cpf}
            onChange={(e) => handleChanges(e.target.name, e.target.value)}
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            maxLength="200"
            required
            type="text"
            name="address"
            value={address}
            onChange={(e) => handleChanges(e.target.name, e.target.value)}
          />
        </div>
        <div>
          <label>city:</label>
          <input
            maxLength="28"
            required
            type="text"
            name="city"
            value={city}
            onChange={(e) => handleChanges(e.target.name, e.target.value)}
          />
        </div>
        <div>
          <label>Select a country state:</label>
          <select
            value={state}
            onChange={(e) => handleChanges(e.target.name, e.target.value)}
            name="state"
          >
            {renderedOptions}
          </select>
        </div>
        <div>
          <h4>Select a country state:</h4>
          <div>
            <input
              type="radio"
              name="addressType"
              value="Apartamento"
              onChange={(e) => handleChanges(e.target.name, e.target.value)}
            />
            <label>Apartamento</label>
            <input
              type="radio"
              name="addressType"
              value="Casa"
              onChange={(e) => handleChanges(e.target.name, e.target.value)}
            />
            <label>Casa</label>
          </div>
        </div>
      </fieldset>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.personDataReducer.name,
  email: state.personDataReducer.email,
  cpf: state.personDataReducer.cpf,
  address: state.personDataReducer.address,
  city: state.personDataReducer.city,
  state: state.personDataReducer.state,
});

const mapDispatchToProps = (dispatch) => ({
  handleChanges: (inputName, value) => dispatch(handlePersonData(inputName, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonDataForm);
