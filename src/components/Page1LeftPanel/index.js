import React from 'react'
import './style.scss'
import Rating from './../Rating'
import Info from './../Info'
import Certification from './../Certification'

class Page1LeftPanel extends React.Component {
  render() {
    const { skills, infos, certifications } = this.props
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

    return (
      <div className="left-col">
        <img
          src={pathPrefix + '/img/profile-pic.jpg'}
          alt="user-pic"
          className="img-circle"
        />

        <div className="info-col">
          <ul>
            {infos.map((data, i) => {
              return (
                <li key={i}>
                  <Info {...data.info} />
                </li>
              )
            })}
          </ul>
        </div>

        <div className="skill-container">
          <div className="main-heading">
            <h2 className="">
              <span className="heading-text">Skills</span>
            </h2>
          </div>
          {skills.map((data, i) => {
            return <Rating {...data.skill} key={i} />
          })}
        </div>

        <div className="info-col">
          <div className="skill-container">
            <div className="main-heading">
              <h2 className="">
                <span className="heading-text">Certifications</span>
              </h2>
            </div>
            <ul>
              {certifications.map((data, i) => {
                return data.certification.string ? (
                  <li key={i}>
                    <Certification {...data.certification} />
                  </li>
                ) : null
              })}
            </ul>
          </div>
        </div>

        <div className="info-col">
          <div className="skill-container">
            <div className="main-heading">
              <h2 className="">
                <span className="heading-text">Language</span>
              </h2>
            </div>
            <ul>
              <li>
                <div>
                  <i
                    className="fa fa-language icon-circle"
                    aria-hidden="true"
                  />{' '}
                  <a href="mailto:sandeepkhoj@gmail.com" target="_blank">
                    English
                  </a>
                </div>
              </li>
              <li>
                <div>
                  <i
                    className="fa fa-language icon-circle"
                    aria-hidden="true"
                  />{' '}
                  <a href="mailto:sandeepkhoj@gmail.com" target="_blank">
                    Hindi
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Page1LeftPanel
