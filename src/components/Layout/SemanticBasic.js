import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import '../style/SemanticBasic.scss'

class SemanticBasic extends Component {
  render() {
    return (
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
        />
      </Helmet>
    )
  }
}

export default SemanticBasic
