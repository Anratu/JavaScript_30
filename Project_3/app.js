const inputs = document.querySelectorAll('.controls input');
function changeVar(){
    console.log(this.value);
    const sizing = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + sizing);
}
for (const input of inputs) {
    //input.addEventListener('change', changeVar);
    input.addEventListener('mousemove', changeVar);
}