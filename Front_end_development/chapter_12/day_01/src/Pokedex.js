import React from "react";
import PokeButton from "./PokeButton";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokes: this.props.pokemons,
      index: 0,
      type: "all",
    };
  }

  updatePokes(type) {
    const { pokemons } = this.props;
    if (type === "all") {
      this.setState({ pokes: pokemons, index: 0 });
    } else {
      const filteredPokes = pokemons.filter((el) => el.type === type);
      this.setState({ pokes: filteredPokes, index: 0 });
    }
  }

  filterPoke(e) {
    const type = e.target.innerText;
    this.setState({ type });
    this.updatePokes(type);
  }

  getPokeTypes() {
    const { pokemons } = this.props;

    return Array.from(new Set(pokemons.map(({ type }) => type)));
  }

  nextPoke() {
    this.setState((state, _props) => ({
      index: state.index + 1,
    }));
  }

  render() {
    const types = this.getPokeTypes();
    const { pokes, index } = this.state;
    return (
      <div className="pokedex">
        <Pokemon pokemon={pokes[index]} />
        <div className="btnContainer">
          <button className="btnFilter" onClick={(e) => this.filterPoke(e)}>
            all
          </button>
          {types.map((type) => (
            <PokeButton onClick={(e) => this.filterPoke(e)} key={type} type={type} />
          ))}
        </div>
        <button
          className="btnNext"
          disabled={this.state.pokes[index + 1] === undefined}
          onClick={() => this.nextPoke()}
        >
          Next
        </button>
      </div>
    );
  }
}

export default Pokedex;
