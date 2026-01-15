import { updateState } from '../core/state.js';

export function initControls(form, onChange) {
  form.addEventListener('input', event => {
    const { name, value } = event.target;
    if (!name) return;

    updateState(name, value);
    onChange();
  });
}

export function syncControls(form, state) {
  Object.entries(state).forEach(([prop, value]) => {
    if (form.elements[prop]) {
      form.elements[prop].value = value;
    }
  });
}
