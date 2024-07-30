let player1 = "Player1";
let player2 = "Player2";
let player3 = "Player3";

function editNames() {
    player1 = prompt("Enter Player1 Name");
    player2 = prompt("Enter Player2 Name");
    player3 = prompt("Enter Player3 Name");

    if (player1.length < 1 || player2.length < 1 || player3.length < 1) {
        alert("Please Enter a valid name");
        return;
    }
    document.querySelector("p.Player1").innerHTML = player1;
    document.querySelector("p.Player2").innerHTML = player2;
    document.querySelector("p.Player3").innerHTML = player3;
}

function rollTheDice() {
    let diceNum1 = document.querySelector(".img1");
    let diceNum2 = document.querySelector(".img2");
    let diceNum3 = document.querySelector(".img3");

    diceNum1.setAttribute("src", "diceroll.gif")
    diceNum2.setAttribute("src", "diceroll.gif")
    diceNum3.setAttribute("src", "diceroll.gif")

    let result = document.querySelector("h1")
    setTimeout(() => {
        let randomNumber1 = Math.floor(Math.random() * 6) + 1;
        let randomNumber2 = Math.floor(Math.random() * 6) + 1;
        let randomNumber3 = Math.floor(Math.random() * 6) + 1;

        diceNum1.setAttribute("src", `dice${randomNumber1}.png`);
        diceNum2.setAttribute("src", `dice${randomNumber2}.png`);
        diceNum3.setAttribute("src", `dice${randomNumber3}.png`);

        if (randomNumber1 === randomNumber2 || randomNumber2 === randomNumber3) {
            result.innerHTML = "It's a Draw!";
        } else if (randomNumber1 >= randomNumber2 && randomNumber1 >= randomNumber3) {
            result.innerHTML = `${player1} Wins!`;
        } else if (randomNumber2 >= randomNumber1 && randomNumber2 >= randomNumber3) {
            result.innerHTML = `${player2} Wins!`;
        } else if (randomNumber3 >= randomNumber1 && randomNumber3 >= randomNumber2) {
            result.innerHTML = `${player3} Wins!`;
        }


    }, 2500)

}

editNames();
rollTheDice();