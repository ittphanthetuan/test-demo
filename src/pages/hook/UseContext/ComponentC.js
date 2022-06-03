import React, { useContext } from 'react';
import ThemeContext from './context/MyContext';

function ComponentC() {
  const dataContext = useContext(ThemeContext);
  return (
    <div>
      <hr />
      ComponentC
      <div>
        Name: {dataContext.name}
      </div>
    </div>
  )
}

export default ComponentC;
