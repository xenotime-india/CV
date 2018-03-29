import React from 'react'
import get from 'lodash/get'
import './style.scss'

class Header extends React.Component {
  render() {
    return (
      <div className=" top-heading">
        <h1 className="user-name">Sandeep Kumar</h1>
        <h5 className="sub-heading">Technical Architect | Full Stack Developer | Programming Geek</h5>
        <div className="half-line"></div>
        <div className=""></div>
        <p className="top-margin">In eight years of span, I’ve helped my team to deliver the solutions on time and solve
          complex problems using technology.</p>
      </div>
    )
  }
}

export default Header
