import React from 'react';

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

  getInputRef = (ref) => {
    this.innerRef.current = ref
    this.props.inputRef && (this.props.inputRef.current = ref)
  }

  resetByChild = () => {
    this.innerRef.current.value = ''
  }

  render () {
    return (
      <div>
        <input
          type='text'
          ref={this.getInputRef}
          value={this.state.value}
          onChange={this.handleChangeValue}
        />
        <p>state: {this.state.value}</p>
        <button onClick={this.resetByChild}>reset input by child class</button>
      </div>
    )
  }
}

export default ChildClass;
