import * as React from "react"
import Layout from "../components/layouts"
import ListadoPokemones from "../components/listadoPokemones"

const IndexPage = () => (
  <Layout>
    <h1>Listado de Pokemones</h1>

    <div className="container">
      <div className="row">
        <ListadoPokemones></ListadoPokemones>



      </div>
    </div>

  </Layout>
)

export default IndexPage
