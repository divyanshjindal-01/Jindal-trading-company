// taking rock paper scissorss as variable

const choices = document.querySelectorAll(".choice");
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let messege = document.querySelector("#msg");
//check who winn!!!

checkpoint=(userchoice,compchoice)=>{
    let options =["rock","paper","scissors"];
   if (userchoice===compchoice){
    console.log("its a tie!!");
    messege.innerText="Its a tie!🙄🙄";

   }
   else if (
    (userchoice ==="rock" && compchoice ==="scissors") ||
    (userchoice ==="paper" && compchoice ==="rock") ||
    (userchoice ==="scissors" && compchoice ==="paper")
   ){
    console.log("you winn!!");
    messege.innerText="You winn!🥳🥳";
    const userwin = document.querySelector("#user");
    let ucurrentvalue =userwin.innerText;
    ucurrentvalue++;
    console.log(ucurrentvalue);
    userwin.innerText=ucurrentvalue;
   }
   else{
    console.log("you loss!!");
    messege.innerText="You loss😫😫";
    const compwin = document.querySelector("#comp");
    let ccurrentvalue =compwin.innerText;
    ccurrentvalue++;
    console.log(ccurrentvalue);
    compwin.innerText=ccurrentvalue;
   }
}

// comp choice

const genCompChoice = ()=>{
    let options =["rock","paper","scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
};

// main function

const playgame =(userchoice)=>{
    console.log("choice of user:- ", userchoice);
    const compchoice = genCompChoice();
    console.log("choice of computer:- ", compchoice);
    checkpoint(userchoice, compchoice);
};
 

// user choice

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        let userchoice = choice.getAttribute("id"); 
        playgame(userchoice);
    });
});