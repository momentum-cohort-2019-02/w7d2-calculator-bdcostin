import React, { Component } from 'react'

class KeypadComponent extends Component {
  render () {
    return (
      <div className='button'>
        <button name='(' onClick={e => this.props.onClick(e.target.name)} />
      </div>
    )
  }
}
