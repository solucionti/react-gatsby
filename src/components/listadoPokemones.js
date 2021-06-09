import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {Link} from 'gatsby';

const ListadoPokemones = () => {

  const data = useStaticQuery(graphql`query{
      pokemons {
          pokemons(first: 150) {
              id
              name
              types
              image
#              image {
#                  childImageSharp {
#                      fluid(maxWidth: 600) {
#                          ...GatsbyImageSharpFluid
#                      }
#                  }
#              }
          }
      }
  }`)


  console.log(data.pokemons.pokemons)
  return (
    <>
      {data.pokemons.pokemons.map((pokemon) => (

        <div className="col" key={pokemon.id}>
          {pokemon.name}
          <img src={pokemon.image} alt={pokemon.name} />
          <Link to={pokemon.id}>Ver detalle</Link>

          {/*<StaticImage src={pokemon.image} alt={pokemon.name}/>*/}
        </div>
      ))}

    </>
  )
}

export default ListadoPokemones