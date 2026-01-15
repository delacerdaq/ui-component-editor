const PREFIX = 'ui-';

export function saveState(state) {
  Object.entries(state).forEach(([key, value]) => {
    localStorage.setItem(PREFIX + key, value);
  });
}

export function loadState(defaultState) {
  const loadedState = { ...defaultState };

  Object.keys(localStorage)
    .filter(key => key.startsWith(PREFIX))
    .forEach(key => {
      const prop = key.replace(PREFIX, '');
      loadedState[prop] = localStorage.getItem(key);
    });

  return loadedState;
}
