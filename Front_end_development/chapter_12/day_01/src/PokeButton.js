import React from "react";

class PokeButton extends React.Component {
  render() {
    const { type, onClick } = this.props;
    return (
      <button className="btnFilter" onClick={onClick}>
        {type}
      </button>
    );
  }
}

export default PokeButton;
