const controls = document.getElementById('controls');
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');
controls.addEventListener('change', handleChange);

const handleStyle = {
    element: btn,
    backgroundColor(value){
        this.element.style.backgroundColor = value;
    },
    height(value) {
        this.element.style.height = value + 'px';
    },
    width(value) {
        this.element.style.width = value + 'px';
    },
    text(value) {
        this.element.innerText = value;
    },
    color(value) {
        this.element.style.color = value;
    },
    border(value) {
        this.element.style.border = value;
    },
    borderRadius(value) {
        this.element.style.borderRadius = value + 'px';
    },
    fontFamily(value) {
        this.element.style.fontFamily = value;
    },
    fontSize(value) {
        this.element.style.fontSize = value + 'px';
    },
    fontWeight(value) {
        this.element.style.fontWeight = value;
    },
    textAlign(value) {
        this.element.style.textAlign = value;
    },
    textShadow(value) {
        this.element.style.textShadow = value;
    },
    textDecoration(value) {
        this.element.style.textDecoration = value;
    },
    boxShadow(value) {
        this.element.style.boxShadow = value;
    },
}

function showCss() {
    cssText.innerHTML = '<span>' + btn.style.cssText.split('; ').join(';</span><span>');
}

function saveValues(name, value) {
    localStorage.setItem(`ui-${name}`, value);
  }  

function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    handleStyle[name](value);
    saveValues(name, value);
    showCss();
}

function setValues() {
    Object.keys(localStorage)
        .filter(key => key.startsWith('ui-'))
        .forEach(key => {
        const prop = key.replace('ui-', '');
        const value = localStorage.getItem(key);

        if (handleStyle[prop]) {
            handleStyle[prop](value);
            controls.elements[prop].value = value;
        }
        });

    showCss();
}
setValues();
