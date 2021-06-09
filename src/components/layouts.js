import React from "react"
import Header from "./header"
import Helmet from "react-helmet"

const Layout = (props) => {
  return (
    <>
      <Helmet>
        <title>Poke Ilogica</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
              integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
              crossOrigin="anonymous" />
      </Helmet>
      <Header></Header>
      {props.children}
    </>
  )
}

export default Layout