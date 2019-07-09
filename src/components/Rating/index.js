import React from 'react'

class Rating extends React.Component {
  render() {
    const { skillName, rating } = this.props
    const userRating = []
    for (let i = 0; i < rating; i++) {
      userRating.push(
        <i className="fa fa-circle fa-2x" aria-hidden="true" key={i} />
      )
    }
    while (userRating.length < 5) {
      userRating.push(
        <i
          className="fa fa-circle-thin fa-2x"
          aria-hidden="true"
          key={userRating.length}
        />
      )
    }

    return (
      <div className="skill-col">
        <div>{skillName}</div>
        <div className="col-group rating">{userRating}</div>
      </div>
    )
  }
}

export default Rating
