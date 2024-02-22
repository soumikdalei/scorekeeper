const p1button=document.querySelector("#p1")
const p2button=document.querySelector("#p2")
const p1display=document.querySelector("#player1")
const p2display=document.querySelector("#player2")
const resetbutton=document.querySelector("#r")
const winningscorevalue=document.querySelector("#playto")
let count1=0;
let count2=0;
let winningscore=5;
let gameover=false
p1button.addEventListener('click',function(){
    if(!gameover){count1++;
    if(count1===winningscore){
        gameover=true
        p1display.classList.add('winner')
        p2display.classList.add('loser')
        p1button.disabled=true
        p2button.disabled=true
    }
    p1display.textContent=count1;}
})
p2button.addEventListener('click',function(){
    if(!gameover){count2++;
    if(count2===winningscore){
        gameover=true
        p2display.classList.add('winner')
        p1display.classList.add('loser')
        p1button.disabled=true
        p2button.disabled=true
    }
    p2display.textContent=count2;}
})
winningscorevalue.addEventListener('change',function(){
    winningscore=parseInt(this.value)
    reset();
})
resetbutton.addEventListener('click',reset)
function reset(){
    gameover=false
    count1=0; count2=0;
    p1display.textContent=count1
    p2display.textContent=count2
    p1display.classList.remove('winner','loser')
    p2display.classList.remove('winner','loser')
    p1button.disabled=false
    p2button.disabled=false
}