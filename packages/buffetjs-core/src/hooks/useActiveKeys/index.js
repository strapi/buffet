import { useState } from 'react';
import useEventListener from '../useEventListener';

function useActiveKeys(isEnabled = true) {
  const [activeKeys, setActiveKeys] = useState([]);

  // Add keys to the array on down
  useEventListener(
    'keydown',
    e => {
      if (!activeKeys.includes(e.keyCode)) {
        setActiveKeys(prevKeys => [...prevKeys, e.keyCode]);
      }
    },
    isEnabled
  );

  // Remove keys on up
  useEventListener(
    'keyup',
    e => {
      setActiveKeys(prevKeys => prevKeys.filter(key => key !== e.keyCode));
    },
    isEnabled
  );

  return activeKeys;
}

export default useActiveKeys;
