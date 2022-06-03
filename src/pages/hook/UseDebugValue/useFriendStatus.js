// useDebugValue(value)
// only use useDebugValue in custom hook

import { useState, useDebugValue } from 'react';

function useFriendStatus(friendID) {
  const [isOnline, ] = useState(null);

  // ...

  // Show a label in DevTools next to this Hook
  // e.g. "FriendStatus: Online"
  useDebugValue(isOnline ? 'Online' : 'Offline');
  useDebugValue(isOnline ? 'Online2' : 'Offline2');

  return isOnline;
}

export default useFriendStatus;
