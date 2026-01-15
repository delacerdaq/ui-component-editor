import {
    addPreset,
    removePreset,
    getPresets,
    getPresetById,
    setPresets,
  } from './presets.state.js';
  
  import {
    savePresets,
    loadPresets,
  } from './presets.storage.js';
  
  import {
    renderPresets,
    bindPresetEvents,
  } from './presets.ui.js';
  
  import { state } from '../../core/state.js';
  import { renderPreview } from '../../ui/preview.js';
  import { renderCss } from '../../ui/cssViewer.js';
  import { syncControls } from '../../ui/controls.js';
  
  export function initPresets({
    form,
    input,
    list,
    button,
    cssViewer,
    controls,
  }) {
    const storedPresets = loadPresets();
    setPresets(storedPresets);
    renderPresets(list, getPresets());
  
    form.addEventListener('submit', event => {
      event.preventDefault();
  
      const name = input.value.trim();
      if (!name) return;
  
      addPreset(name, state);
      savePresets(getPresets());
      renderPresets(list, getPresets());
  
      input.value = '';
    });
  
    bindPresetEvents(list, {
      onApply(id) {
        const preset = getPresetById(id);
        if (!preset) return;
  
        Object.assign(state, preset.state);
  
        syncControls(controls, state);
        renderPreview(button, state);
        renderCss(cssViewer, button);
      },
  
      onDelete(id) {
        removePreset(id);
        savePresets(getPresets());
        renderPresets(list, getPresets());
      },
    });
  }  