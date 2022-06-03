import React, { useEffect } from 'react';
import Child from './components/Child';
import ChildClass from './components/ChildClass';

const GetRefInputOfChild = () => {
  const refOfChildFunc = React.createRef();
  const refOfChildClass = React.createRef();
  const inputRefClass = React.createRef();

  useEffect(() => {
    console.log(refOfChildFunc, 'ref in parent')
    console.log(refOfChildClass, 'ref in parent')
  }, [refOfChildFunc, refOfChildClass]);

  const handleResetStateFunc = () => {
    refOfChildFunc.current.handleResetValue()
  }

  const handleResetStateClass = () => {
    refOfChildClass.current.handleResetValue()
  }

  const handleResetInputClass = () => {
    inputRefClass.current.value = ''
  }

  return (
    <div>
      <h1>get input of child function</h1>
      <Child ref={refOfChildFunc} />
      <button onClick={handleResetStateFunc}>Reset value</button>
      <hr />
      <h1>get input of child class</h1>
      <ChildClass ref={refOfChildClass} inputRef={inputRefClass} />
      <button onClick={handleResetStateClass}>Reset value</button>
      <button onClick={handleResetInputClass}>Reset value input</button>
    </div>
  )
}

export default GetRefInputOfChild;