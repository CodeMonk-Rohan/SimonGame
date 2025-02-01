let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","blue","green"]

let started=false
let level=0;

let h2= document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game Started");
        started=true
        levelUp();
    }
})

function btnFlash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)
}

function userFlash(btn){
    btn.classList.add("userFlash")
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250)
}

function levelUp(){
    userSeq=[]
    level++
    h2.innerText=`Level ${level}`
    let rndIdx = Math.floor(Math.random()*4)
    let rndColor = btns[rndIdx]
    let rndBtn = document.querySelector(`.${rndColor}`)
    gameSeq.push(rndColor)
    btnFlash(rndBtn)
}

let body=document.querySelector("body")
let skore = document.querySelector(".skore")
let displaySkore= document.querySelector(".displaySkore")

function checkAns(idx){
 
            if(gameSeq[idx]==userSeq[idx]){
                if(userSeq.length==gameSeq.length){
                    setTimeout(levelUp,1000)
                }
            }
            else{
                body.classList.add("redEnd")
                setTimeout(function(){
                    body.classList.remove("redEnd")
                },300)
                h2.innerText=`Game Over! Press Any Key to Play Again`
                skore.innerText=level-1
                skore.classList.remove("skore")
                displaySkore.classList.remove("displaySkore")
                reset()

            }
        }

let allBtns = document.querySelectorAll(".btn")
for (btn of allBtns){
    btn.addEventListener("click",function(){
        userFlash(this)
        let userColor = this.getAttribute("id")
        console.log(userColor)
        userSeq.push(userColor)
        checkAns(userSeq.length-1)

    })
}
function reset(){
    gameSeq=[]
    userSeq=[]
    level=0
    started=false
}