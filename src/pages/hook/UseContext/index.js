import React from 'react';
import MyContext from './context/MyContext';
import ComponentA from './ComponentA';

function UseContext() {
  console.log(MyContext, 'MyContext')
  return (
    <div>
      <MyContext.Provider value={{ name: 'data name' }}>
        UseContext
        <ComponentA />
      </MyContext.Provider>
    </div>
  )
}

export default UseContext;
