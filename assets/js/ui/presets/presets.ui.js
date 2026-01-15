export function renderPresets(listElement, presets) {
    listElement.innerHTML = '';
  
    if (!presets.length) {
      listElement.innerHTML = '<li>No presets saved</li>';
      return;
    }
  
    presets.forEach(preset => {
      const li = document.createElement('li');
  
      li.innerHTML = `
        <span>${preset.name}</span>
        <button data-action="apply" data-id="${preset.id}">Apply</button>
        <button data-action="delete" data-id="${preset.id}">Delete</button>
      `;
  
      listElement.appendChild(li);
    });
  }
  
  export function bindPresetEvents(listElement, handlers) {
    listElement.addEventListener('click', event => {
      const button = event.target;
      if (!button.dataset.action) return;
  
      const { action, id } = button.dataset;
  
      if (action === 'apply') {
        handlers.onApply(id);
      }
  
      if (action === 'delete') {
        handlers.onDelete(id);
      }
    });
  }  