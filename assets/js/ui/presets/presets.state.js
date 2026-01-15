let presets = [];

export function setPresets(list) {
  presets = list;
}

export function getPresets() {
  return presets;
}

export function addPreset(name, state) {
  const preset = {
    id: crypto.randomUUID(),
    name,
    state: JSON.parse(JSON.stringify(state)),
  };

  presets.push(preset);
  return preset;
}

export function removePreset(id) {
  presets = presets.filter(preset => preset.id !== id);
}

export function getPresetById(id) {
  return presets.find(preset => preset.id === id);
}
