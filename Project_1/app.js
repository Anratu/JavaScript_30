
const blocks = document.querySelectorAll(`.key`);
window.addEventListener('keydown', function(e){
    //console.log(e.key);
    const buttons = document.querySelector(`.${e.key}`);
    const span = document.querySelector(`.key span.${e.key}`);
    const audios = document.querySelector(`audio.${e.key}`);
    
    //console.log(span.textContent.toLowerCase());
    //console.log(buttons.textContent.toLowerCase());
    //console.log(audios);
    if(!audios) return;
    audios.currentTime = 0;
    audios.play();
    //console.log(span);
    //console.log(blocks);
    for (let block in blocks){
        if(blocks[block].firstElementChild === span){
            blocks[block].classList.add('playing');
        }
    //console.log(block);
    }
});
for (let block of blocks){
    //console.log(block);
    block.addEventListener('transitionend', function(e){
        //console.log(e);
        block.classList.remove('playing');
    });
}