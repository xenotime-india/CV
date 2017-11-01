import React from 'react';
import './style.scss';
import Certification from './../Certification';

class Page2LeftPanel extends React.Component {

  render() {
    const { certifications } = this.props;
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__;

    return (
      <div className="left-col">
        <div className="info-col">
          <div className="skill-container">
            <div className="main-heading">
              <h2 className="">
                <span className="heading-text">Certifications</span>
              </h2>
            </div>
            <ul>
                {
                  certifications.map((data, i) => {
                    return <li key={i}><Certification {...data.certification}/></li>
                  })
                }
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
                <div><i className="fa fa-language icon-circle" aria-hidden="true"></i> <a
                  href="mailto:sandeepkhoj@gmail.com"
                  target="_blank">English</a>
                </div>
              </li>
              <li>
                <div><i className="fa fa-language icon-circle" aria-hidden="true"></i> <a
                  href="mailto:sandeepkhoj@gmail.com"
                  target="_blank">Hindi</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

      </div>
    )
  }
}

export default Page2LeftPanel
