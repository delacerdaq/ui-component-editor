const styleMap = {
    width: v => v + 'px',
    height: v => v + 'px',
    borderRadius: v => v + 'px',
    fontSize: v => v + 'px',
  };
  
  export function applyStyles(element, state) {
    Object.entries(state).forEach(([prop, value]) => {
      if (prop === 'text') {
        element.innerText = value;
        return;
      }
  
      element.style[prop] = styleMap[prop]
        ? styleMap[prop](value)
        : value;
    });
  }
  