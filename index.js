const p1button=document.querySelector("#p1")
const p2button=document.querySelector("#p2")
const p1display=document.querySelector("#player1")
const p2display=document.querySelector("#player2")
const resetbutton=document.querySelector("#r")
const winninigscorevalue=document.querySelector("#e")
let count1=0;
let count2=0;
let winningscore=5;
let gameover=false
p1button.addEventListener('click',function(){
    if(!gameover){count1++;
    if(count1===winningscore){
        gameover=true
    }
    p1display.textContent=count1;}
})
p2button.addEventListener('click',function(){
    if(!gameover){count2++;
    if(count2===winningscore){
        gameover=true
    }
    p2display.textContent=count2;}
})
winningscore.addEventListener('change',function(){
    winningscore=parseInt(this.value)
})
resetbutton.addEventListener('click',function(){
    gameover=false
    count1=0; count2=0;
    p1display.textContent=count1
    p2display.textContent=count2
})