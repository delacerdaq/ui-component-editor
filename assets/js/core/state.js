export const defaultState = {
    text: 'Click me',
    color: '#000000',
    backgroundColor: '#ffffff',
    width: 200,
    height: 40,
    border: '',
    borderRadius: 4,
    fontFamily: 'Arial',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    textDecoration: 'none',
    boxShadow: '',
  };
  
  export let state = { ...defaultState };
  
  export function updateState(prop, value) {
    state[prop] = value;
  }

  export function resetState() {
    Object.keys(state).forEach(key => {
      state[key] = defaultState[key];
    });
  }
  
  