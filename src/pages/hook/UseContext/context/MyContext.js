import React from 'react';

const dataContext = {
  color: 'red Context',
  name: 'name Context'
};

const MyContext = React.createContext(dataContext);

export default MyContext;
