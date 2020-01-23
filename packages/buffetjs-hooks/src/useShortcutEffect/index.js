import { useEffect, useRef } from 'react';

import useActiveKeys from '../useActiveKeys';

const keyCodes = {
  alt: 18,
  arrowup: 38,
  arrowdown: 40,
  enter: 13,
  f: 70,
  tab: 9,
};

function getShortcutKeys(keys) {
  return keys.split('+').map(value => keyCodes[value.toLowerCase()]);
}

function useShortcutEffect(shortcut, listener, isEnabled = true) {
  const activeKeys = useActiveKeys(isEnabled);
  const listenerRef = useRef();
  listenerRef.current = listener;

  useEffect(() => {
    const match = getShortcutKeys(shortcut).every(key =>
      activeKeys.includes(key)
    );

    if (match) {
      listenerRef.current();
    }
  }, [activeKeys, shortcut]);
}

export default useShortcutEffect;
