const secondHand = document.querySelector(`.second-hand`);
const minHand = document.querySelector(`.min-hand`);
const hourHand = document.querySelector(`.hour-hand`);
const hands = document.querySelectorAll(`.hand`);
//console.dir(secondHand);
function setTime(){
    const time = new Date();
    //console.log(time);
    const second = time.getSeconds();
    //console.log(second);
    const min = time.getMinutes();
    //console.log(min);
    const hour = time.getHours();
    //console.log(hour);
    const secondDegree = ((second/60)*360) + 90;
    //console.log(secondDegree);
    const minDegree = ((min/60)*360) + 90;
    const hourDegree = ((Math.abs(hour-12)/12)*360) + 90;
    //console.log(minDegree);
    //console.log(hourDegree);
    secondHand.style.transform = `rotate(${secondDegree}deg)`;
    minHand.style.transform = `rotate(${minDegree}deg)`;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
    for (let hand of hands){
        if (second === 0){
            hand.style.transition = `none`;
        }else {
            hand.style.transition = 'all 0.5s';
        }
    }
}
setInterval(setTime, 1000);