import React from 'react'

class Info extends React.Component {
  render() {
    const { string, type, icon, link } = this.props

    return (
      <div>
        <i className={'fa ' + icon + ' icon-circle'} aria-hidden="true" />{' '}
        <a href={link} target="_blank">
          {string}
        </a>
      </div>
    )
  }
}

export default Info
