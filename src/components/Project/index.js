import React from 'react'
import './style.scss'

class Project extends React.Component {
  render() {
    const { html, frontmatter } = this.props
    return (
      <div
        className="page-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    )
  }
}

export default Project
