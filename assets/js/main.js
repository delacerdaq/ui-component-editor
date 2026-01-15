import { defaultState, state } from './core/state.js';
import { saveState, loadState } from './core/storage.js';
import { initControls, syncControls } from './ui/controls.js';
import { renderPreview } from './ui/preview.js';
import { renderCss } from './ui/cssViewer.js';
import { initPresets } from './ui/presets/presets.controller.js';

const presetForm = document.getElementById('preset-form');
const presetInput = document.getElementById('preset-name');
const presetList = document.getElementById('preset-list');
const controls = document.getElementById('controls');
const button = document.querySelector('.btn');
const cssText = document.querySelector('.css');

initPresets({
  form: presetForm,
  input: presetInput,
  list: presetList,
  button,
  cssViewer: cssText,
  controls,
});

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
