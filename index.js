// let playerXicon="fas fa-times";
// let playerOicon="far fa-circle";
let playerXicon="X";
let playerOicon="O";

const b=document.querySelector(".borad");
const eachb=b.querySelectorAll("section span"); // selecting each box

let gamover=false;

let drawe=true;
let occupedbox=0;

let turn="X";
const change= ()=>{
return turn === "X"?"O":"X";
}
const checkwin= ()=>{
  let win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
    
  ]
  win.forEach(e=>{
    if((eachb[e[0]].innerText===eachb[e[1]].innerText)&&(eachb[e[1]].innerText===eachb[e[2]].innerText)&&(eachb[e[0]].innerText!=="")){
      document.querySelector(".info").innerHTML=eachb[e[0]].innerText + " Won";
      gamover=true;
      occupedbox=0;
    }
    
  })
}

function draw(){
  for(var i=0;i<9;i++){
    if(document.querySelector(`.box${i}`).innerText!=""){
      drawe=false;
    }
    else{
      drawe=true;
    }
  }
  return drawe;
}



for(let i=0;i<eachb.length;i++){
  eachb[i].addEventListener("click",function(){
     if(eachb[i].innerText=== ""){
      eachb[i].innerText=turn;
      turn=change();
      checkwin();

      if(!gamover){
        document.getElementsByClassName("info")[0].innerText="Turn for " + turn ;
      }
      occupedbox+=1;
      console.log(occupedbox);
     }

     if (occupedbox==9 && !draw() && !gamover){  //draw
      console.log("bjbjbj");
      occupedbox=0;
      document.querySelector(".info").innerText = " Draw";
      gamover=true;
      
     }
   
   }
  )
}


const reset=document.querySelector(".reset");
reset.addEventListener("click",()=>{
  occupedbox=0;
  for(let i=0;i<eachb.length;i++){
    eachb[i].innerText="";
    turn="X"
    document.getElementsByClassName("info")[0].innerText="Turn for " + turn ;
    gamover=false;
  }
  
})