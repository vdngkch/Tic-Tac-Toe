let btns=document.querySelectorAll(".btn");
let reset=document.querySelector("#reset");
let New=document.querySelector("#New");
let container=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let mode=document.querySelector("#mode");
let curmode="light"

let  turnO=true;

let patterns=[[0,1,2],[0,3,6],[0,4,8],
[1,4,7],[2,5,8],[2,4,6],
[6,7,8],[3,4,5]
];
btns.forEach((btn)=>{
  btn.addEventListener("click",()=>{
    if(turnO){
      btn.innerText="O";
      turnO=false;
    }else{
      btn.innerText="X";
      turnO=true;
    }
    btn.disabled=true;

  winner();
  })
})

const disablebtn=()=>{
  for(let btn of btns){
    btn.disabled=true;
  }
}


const showWinner=(winner)=>{
  msg.innerText=`Congratulations🎉🎉🎊, Winner is ${winner}`;
  container.classList.remove("hide");
  disablebtn();
};

const winner=()=> {
    for(pattern of patterns){
    let pos1=btns[pattern[0]].innerText;
    let pos2=btns[pattern[1]].innerText;
    let pos3=btns[pattern[2]].innerText;

    if(pos1 !=""&& pos2 !="" && pos3 !=""){
       if(pos1===pos2 && pos2===pos3){
        console.log("winner is ",pos1);
        showWinner(pos1);
       }
    }
  }
};

const enablebtn=()=>{
  for(let btn of btns){
    btn.disabled=false;
    btn.innerText="";
  }
}

const resetgame=()=>{
   turnO=true;
   enablebtn();
   container.classList.add("hide");
}

New.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);

mode.addEventListener("click",()=>{
  if(curmode==="light"){
    curmode="dark";
    document.querySelector("body").style.backgroundColor="#363946";
    document.querySelector("div","button","h2","p").style.color="white";
    document.querySelector("h2").style.color="white";
  }else{
    curmode="light";
    document.querySelector("body").style.backgroundColor="white";
    document.querySelector("div","button","h2","p").style.color="black";
    document.querySelector("h2",).style.color="black";

  }
});