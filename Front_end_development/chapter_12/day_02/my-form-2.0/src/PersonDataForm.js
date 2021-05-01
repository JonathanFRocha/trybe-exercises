import React from "react";
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
    const {
      values: { state },
    } = this.props;
    return statesArr.map((estado) => {
      return <option value={estado}>{estado}</option>;
    });
  }
  render() {
    const renderedOptions = this.renderStates(brState);
    const {
      values: { name, email, cpf, address, city, state },
      handleChanges,
    } = this.props;
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
            onChange={handleChanges}
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
            onChange={handleChanges}
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
            onChange={handleChanges}
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
            onChange={handleChanges}
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
            onChange={handleChanges}
          />
        </div>
        <div>
          <label>Select a country state:</label>
          <select value={state} onChange={handleChanges} name="state">
            {renderedOptions}
          </select>
        </div>
        <div>
          <h4>Select a country state:</h4>
          <div>
            <input type="radio" name="addressType" value="Apartamento" onChange={handleChanges} />
            <label>Apartamento</label>
            <input type="radio" name="addressType" value="Casa" onChange={handleChanges} />
            <label>Casa</label>
          </div>
        </div>
      </fieldset>
    );
  }
}

export default PersonDataForm;
