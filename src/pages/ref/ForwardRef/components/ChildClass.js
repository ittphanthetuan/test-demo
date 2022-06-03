import React, { useState, useEffect } from 'react';

class ChildClass extends React.Component {
  constructor(props) {
    super(props)
    this.innerRef = React.createRef()
    this.state = {
      value: ''
    }
  }
  componentDidMount() {
    console.log(this.inputRef, 'ref in child')
  }

  handleChangeValue = (e) => {
    this.setState({ value: e.target.value });
  }

  handleResetValue = () => {
    this.setState({ value: '' });
  }

  render () {
    return (
      <div>
        <input
          type='text'
          ref={this.props.innerRef}
          value={this.state.value}
          onChange={this.handleChangeValue}
        />
        <p>state: {this.state.value}</p>
      </div>
    )
  }
}

export default React.forwardRef((props, ref) => <ChildClass {...props} innerRef={ref} />);
