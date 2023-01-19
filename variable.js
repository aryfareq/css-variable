var inputs = document.querySelectorAll('input');
function changes(){
    const pix = this.dataset.sizing || '';
    console.log(this.value);
    document.documentElement.style.setProperty(`--${this.name}`,this.value + pix);
};
inputs.forEach(inputs => inputs.addEventListener('change',changes));
inputs.forEach(inputs => inputs.addEventListener('mousemove',changes));