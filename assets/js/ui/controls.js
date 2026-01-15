import { updateState, resetState } from '../core/state.js';
import { clearState } from '../core/storage.js';

export function initControls(form, onChange) {
  form.addEventListener('input', event => {
    const { name, value } = event.target;
    if (!name) return;

    updateState(name, value);
    onChange();
  });

  const resetBtn = document.getElementById('reset');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      resetState();
      clearState();
      onChange(true);
    });
  }
}

export function syncControls(form, state) {
  Object.entries(state).forEach(([prop, value]) => {
    if (form.elements[prop]) {
      form.elements[prop].value = value;
    }
  });
}