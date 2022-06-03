import React from 'react';
import useFriendStatus from './useFriendStatus'

function UseDebugValue() {
  const debug = useFriendStatus();
  console.log(debug, 'debug')
  return (
    <div>UseDebugValue</div>
  )
}

export default UseDebugValue;
