let btnel1=document.getElementById("button1");
let point1counter=1;
let point2counter=1;
let point=document.querySelector("p");
let btnel2=document.getElementById("button2");
let point2=document.getElementById("point2");
let winner_notification=document.getElementById("dot");

// $(document).ready(winnerhide())
// function winnerhide(){
//     win1.hidden;
//     win2.hidden;
// }
btnel1.addEventListener("click",function ()
{

    point.textContent=point1counter++;
    youWin();

   // console.log(player1)
   //  console.log(pointcounter);
   //  console.log(player1count)
});

btnel2.addEventListener("click",function ()
{
   // $("h2").hide();
    point2.textContent=point2counter++;
    youWin();
    // youWin();
    // console.log(player2count)
});
youWin();

function youWin(){

    if(point1counter>point2counter){
    winner_notification.textContent="winner";
    winner_notification.style.color="red";
    winner_notification.style.fontSize="24px"}
    else if(point2counter>point1counter){
        winner_notification.textContent="winner";
        winner_notification.style.color="blue"
        winner_notification.style.fontSize="24px"
    }
}


