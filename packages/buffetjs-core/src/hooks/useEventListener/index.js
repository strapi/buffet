import { useEffect, useRef } from 'react';

function useEventListener(event, eventListener, isEnabled = true) {
  const listenerRef = useRef();
  listenerRef.current = eventListener;

  useEffect(() => {
    function handleEvent(e) {
      listenerRef.current(e);
    }

    if (isEnabled) {
      window.addEventListener(event, handleEvent);
    } else {
      window.removeEventListener(event, handleEvent);
    }

    return () => {
      window.removeEventListener(event, handleEvent);
    };
  }, [event, isEnabled]);
}

export default useEventListener;
