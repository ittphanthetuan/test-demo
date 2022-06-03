import React, { useState, useImperativeHandle } from 'react';

const Child = ({ innerRef }) => {
  const [value, setValue] = useState('')

  useImperativeHandle(innerRef, () => ({
    handleResetValue
  }))

  const handleChangeValue = (e) => {
    setValue(e.target.value)
  }

  const handleResetValue = () => {
    setValue('')
  }

  return (
    <div>
      <input
        type='text'
        ref={innerRef}
        value={value}
        onChange={handleChangeValue}
      />
      <p>state: {value}</p>
    </div>
  )
}

export default React.forwardRef((props, ref) => <Child {...props} innerRef={ref} />);