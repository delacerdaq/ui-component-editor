export function renderCss(cssElement, button) {
    cssElement.innerHTML =
      '<span>' +
      button.style.cssText.split('; ').join(';</span><span>');
  }
  