import React from 'react'


class Button extends React.Component {
  render() {
    return (
      <button type="button" className="btn btn-primary nb-5 m-1 mb-3 mt-5" onClick={this.props.onClick}>
        {this.props.children}
      </button>
    )
  }
}

export default Button