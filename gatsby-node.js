exports.createPages = async ({ actions, graphql, reporter }) => {
  const resultado = await graphql(`query{
      pokemons {
          pokemons(first: 150) {
              id
          }
      }
  }
  `)

  //console.log(resultado.data.pokemons.pokemons);

  if (resultado.errors) {
    reporter.panic("No Hubo resultados", resultado.errors)
  }

  const pokemones = resultado.data.pokemons.pokemons
  // console.log(pokemones);

  pokemones.forEach(pokemon => {

    console.log(pokemon);
    actions.createPage({
      path: pokemon.id,
      component: require.resolve("./src/components/pokemon-single.js"),
      context: {
        id: pokemon.id
      }
    })
  })
}