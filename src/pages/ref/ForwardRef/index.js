import React, { useEffect } from 'react';
import Child from './components/Child';
import ChildClass from './components/ChildClass';

const ForwardRef = () => {
  const inputRefOfChild = React.createRef();
  const inputRefOfChildClass = React.createRef();

  useEffect(() => {
    console.log(inputRefOfChild, 'ref function in parent')
    console.log(inputRefOfChildClass, 'ref class in parent')
  }, [inputRefOfChild, inputRefOfChildClass]);

  const handleResetInput = () => {
    inputRefOfChild.current.value = ''
  }

  const handleResetInputClass = () => {
    inputRefOfChildClass.current.value = ''
  }

  return (
    <div>
      <h1>ForwardRef</h1>
      <Child ref={inputRefOfChild} />
      <button onClick={handleResetInput}>Reset value</button>
      <hr />
      
      <h1>ForwardRef Class</h1>
      <ChildClass ref={inputRefOfChildClass} innner />
      <button onClick={handleResetInputClass}>Reset value class</button>
    </div>
  )
}

export default ForwardRef;
