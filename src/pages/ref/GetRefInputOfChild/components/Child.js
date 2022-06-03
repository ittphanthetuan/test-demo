import React, { useState, useEffect, useImperativeHandle } from 'react';

const Child = ({ innerRef }) => {
  let inputRef = React.createRef();
  const [value, setValue] = useState('')

  useEffect(() => {
    console.log(inputRef, 'ref in child')
  }, [])

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
        value={value}
        onChange={handleChangeValue}
      />
      <p>state: {value}</p>
    </div>
  )
}

export default React.forwardRef((props, ref) => <Child {...props} innerRef={ref} />);
