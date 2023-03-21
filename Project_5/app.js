const selects = document.querySelectorAll('.panel');
for (let select of selects){
    select.addEventListener('click', highlight);
    select.addEventListener('transitionend', highlightActive);
}
function highlight(e){
    this.classList.toggle('open');
}
function highlightActive(e){
    console.log(e.propertyName);
    if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active');   
    }
}