import React from 'react'
import { siteMetadata } from '../../gatsby-config'

import './../styles/init.scss'
import 'font-awesome/css/font-awesome.css'

class Template extends React.Component {
  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    const { location, children } = this.props
    return <div>{children()}</div>
  }
}

export default Template
