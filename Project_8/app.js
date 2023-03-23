const canvas = document.querySelector('canvas');//#draw
//console.dir(canvas);
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// console.log(ctx);
// console.dir(ctx);
ctx.strokeStyle = 'black';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;
let isDrawing = false;
let direction = true;
let lastX = 0;
let lastY = 0;
let hue = 0;

function draw(e){
    if (!isDrawing){
        //console.log(isDrawing);
        return;
    }
   // console.log(e);
    ctx.strokeStyle = `hsl(${hue},100%,50% )`;
    //ctx.lineWidth = hue;
    ctx.beginPath();// start from
    ctx.moveTo(lastX, lastY);//go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
    hue++;
    if(hue > 360){
        hue = 0;
    }
    if (ctx.lineWidth <=1 || ctx.lineWidth >= 70){
        direction = !direction;
    }
    if (direction){
        ctx.lineWidth++;
    }else{
        ctx.lineWidth--;
    }
}
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
// canvas.addEventListener('touchmove', (e) => {
//     isDrawing = true;
//     [lastX, lastY] = [e.offsetX, e.offsetY];
// });
// canvas.addEventListener('touchstart', draw);
// canvas.addEventListener('touchend', () => isDrawing = false);
