import { defaultState, state } from './core/state.js';
import { saveState, loadState } from './core/storage.js';
import { initControls, syncControls } from './ui/controls.js';
import { renderPreview } from './ui/preview.js';
import { renderCss } from './ui/cssViewer.js';

const controls = document.getElementById('controls');
const button = document.querySelector('.btn');
const cssText = document.querySelector('.css');

function render(isReset = false) {
  renderPreview(button, state);
  renderCss(cssText, button);

  if (!isReset) {
    saveState(state);
  }

  syncControls(controls, state);
}

function init() {
  const loadedState = loadState(defaultState);
  Object.assign(state, loadedState);

  syncControls(controls, state);
  initControls(controls, render);
  render();
}

init();
