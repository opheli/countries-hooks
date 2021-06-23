import React from 'react'


class Card extends React.Component {
  render() {
    return (
      <div className="card mx-auto" style={{ width: '250px' }}>
        <img src={this.props.flag} class="card-img-top" alt="flag" />
        <div className="card-body">
          <h2> Country: {this.props.name}</h2>
          <h3>Capital: {this.props.capital}</h3>
          <p>Region: {this.props.region}</p>
          <p>Population: {this.props.population}</p>
        </div>
      </div>

    )
  }
}

export default Card