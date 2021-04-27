import React from "react";
import Pokemon from "./Pokemon";
import pokemons from "./data";

// {
//   id: 25,
//   name: "Pikachu",
//   type: "Electric",
//   averageWeight: {
//     value: 6.0,
//     measurementUnit: "kg",
//   },
//   image: "https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png",
//   moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)",
// },

class Pokedex extends React.Component {
  render() {
    return pokemons.map((pokemon) => {
      const { id, name, type, averageWeight, image } = pokemon;
      return (
        <Pokemon key={id} name={name} type={type} averageWeight={averageWeight} image={image} />
      );
    });
  }
}

export default Pokedex;
