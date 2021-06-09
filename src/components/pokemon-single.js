import React from "react"
import { graphql } from "gatsby"

export const query = graphql`
    query MyQuery($id: String) {
        pokemons {
            pokemon(id: $id) {
                image
                maxCP
                name
                number
                resistant
            }
        }
    }
`

const PokemonSingle = ({data:{pokemons:{pokemon}}}) => {

console.log(pokemon);

  return (
    <h1>Pokemon Single {pokemon.name}</h1>
  )
}

export default PokemonSingle