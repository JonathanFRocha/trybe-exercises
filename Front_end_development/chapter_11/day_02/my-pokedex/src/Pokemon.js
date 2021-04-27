import React from "react";

class Pokemon extends React.Component {
  render() {
    const { key, name, type, averageWeight, image } = this.props;
    return (
      <div key={key}>
        <h1>Pokemon Name: {name}</h1>
        <h3>Pokemon Type: {type}</h3>
        <h4>
          averageWeight: {averageWeight.value} {averageWeight.measurementUnit}
        </h4>
        <img src={image} alt={name} />
      </div>
    );
  }
}

export default Pokemon;
