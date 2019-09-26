import { useEffect, useRef } from 'react';

function useEventListener(event, eventListener) {
  const listenerRef = useRef();
  listenerRef.current = eventListener;

  useEffect(() => {
    function handleEvent(e) {
      listenerRef.current(e);
    }

    window.addEventListener(event, handleEvent);

    return () => {
      window.removeEventListener(event, handleEvent);
    };
  }, [event]);
}

export default useEventListener;
