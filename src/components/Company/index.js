import React from 'react'
import './style.scss'
import Project from './../Project'

class Company extends React.Component {
  render() {
    const { projects, info, start, end } = this.props
    console.log(this.props)
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    return (
      <div className="page-sections">
        {info && (
          <div className="info-section">
            <h5 className="no-bottom-margin sub-heading designation">
              {info.title}
            </h5>
            <h6 className="no-bottom-margin sub-heading-0">{info.name}</h6>
            <div className="sub-heading-1 block-left">{info.date}</div>
            <div className="sub-heading-1 block-right">{info.location}</div>
            <div className="clear-fix" />
          </div>
        )}

        <ul className="project">
          {projects.map((project, i) => {
            if (
              (start === undefined || start <= i) &&
              (end >= i || end === undefined)
            ) {
              return (
                <li key={i}>
                  <Project {...project.file} />
                </li>
              )
            } else {
              return null
            }
          })}
        </ul>
      </div>
    )
  }
}

export default Company
