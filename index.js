let player1 , player2 ;
let winner_text;
const btn = document.querySelector("#refreshBtn");
btn.addEventListener("click" , ()=>{

    player1 = Math.floor((Math.random() * 6) + 1);
    player2 = Math.floor((Math.random() * 6) + 1);

    // document.querySelector(".winner").style.transition = "all 8s";

    player1_image = "./images/dice" + player1 + ".png";
    player2_image = "./images/dice" + player2 + ".png";

    console.log(player1_image + " " + player2_image);
    document.querySelector("#image1").setAttribute("src" , player1_image);
    document.querySelector("#image2").setAttribute("src" , player2_image);

    if(player1 > player2){
        winner_text = "Player 1 is the Winner";
    }
    else if(player2 > player1){
        winner_text = "Player 2 is the Winner";
    }
    else{
        winner_text = "It's a draw";
    }

    document.querySelector(".winner").textContent = winner_text;
})