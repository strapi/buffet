import { useRef, useEffect } from 'react';

// Hook taken from https://github.com/hupe1980/react-is-mounted-hook

function useIsMounted() {
  const ref = useRef(true);

  useEffect(() => {
    ref.current = true;

    return () => {
      ref.current = false;
    };
  }, []);

  return ref.current;
}

export default useIsMounted;
