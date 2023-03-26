let music;
let userInput;
let score=0;
let highscore=0;
let secretNumber=(Math.random()*10).toFixed(0);
let time=prompt(` How Many time Do you Want to try Guess a Number?`);


if(time>=0){time=time;}else{time=1;}

document.querySelector("#time").textContent='Time ' +time;

//.................................AGAIN FUNCTION.......................
function again(){
    time=prompt("How Many time Do you Want to try Guess a Number?");
    
    if(time>=0){
    time=time;
    }else{
        time=1;
    }

    document.querySelector("#time").style.color='white';        
    document.querySelector("#check").disabled=false;
    document.querySelector("#time").textContent='Time: '+time;
    //updating the HighScore...
    if(score>highscore){
        highscore=score;
        document.querySelector(".highscore").innerHTML=highscore;
    }
    //end the HighScore...«immmmmmm
    score=0;
    document.querySelector(".score").innerHTML=score;
    secretNumber=Number((Math.random()*10).toFixed(0));
    document.querySelector("body").style.background="#222";
}
//...............................




//............................................CHECK......................
function check (){

    userInput=document.querySelector("#box").value;

    if(time==0){
        document.querySelector("#check").disabled=true;
        document.querySelector("#time").style.color='red';
         document.querySelector("#time").textContent="Game's End,\n Try Again! ";
    }else{
        
        userInput=document.querySelector("#box").value;

//        if(typeof(userInput)=="number" && (userInput>=0 && userInput<=10)){

            
        time-=1;
        document.querySelector("body").style.background="darkblue";
        userInput=Number(document.querySelector(".guess").value);
        if(userInput==secretNumber){  
            document.getElementById("audio").src="assets/correct.mp4";
            document.getElementById("audio").play();
            score+=20;
            document.querySelector(".score").innerHTML=score;}else{
                document.querySelector("#audio").src="assets/wrong.mp4";
                document.getElementById("audio").play();
              }// }
            console.log(userInput);
            console.log(secretNumber);
            secretNumber=(Math.random()*10).toFixed(0);    
             document.querySelector("#time").textContent='Time: ' +time;
 
  //      }else{
    //        alert("Please write a Number in this range: 0 to 10");
      //  }
    }
}
//.........................................................
    


//...........................THE EVENTS..........................
document.querySelector(".again").addEventListener("click",again)
document.querySelector("#check").addEventListener("click",check)
//..................................................................