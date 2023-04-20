const btnRollDice = document.getElementById('btn-roll-dice');
const fieldPointsPlayer = document.getElementById('points-player');
const fieldPointsPc = document.getElementById('points-pc');
const fieldResultPlayer = document.getElementById('result-player');
const fieldResultPc = document.getElementById('result-pc');

let action = 1;  // button state

btnRollDice.addEventListener("click", function () {
    if (action === 1) {
        let dicePlayer = getRandInt(7);
        let dicePc = getRandInt(7);

        fieldPointsPlayer.innerText = dicePlayer.toString();
        fieldPointsPc.innerText = dicePc.toString();

        setWinner(dicePlayer, dicePc);

        btnRollDice.innerText = "Again ?"
        action = 2;

    } else if (action === 2) {
        resetColors();
        resetFields();

        btnRollDice.innerText = "ROLL";
        action = 1;
    }
});

function getRandInt(maxNum) {
    return Math.floor(Math.random() * maxNum);
}

function setWinner(numPlayer, numPc) {
    if (numPlayer === numPc) {
        fieldResultPlayer.innerText = "DRAW";
        fieldResultPc.innerText = "DRAW";
    } else if (numPlayer > numPc) {
        fieldResultPlayer.innerText = "WINNER";
        fieldResultPlayer.classList.add("text-success");
        fieldResultPc.innerText = "LOSE";
        fieldResultPc.classList.add("text-danger");
    } else {
        fieldResultPlayer.innerText = "LOSE";
        fieldResultPlayer.classList.add("text-danger");
        fieldResultPc.innerText = "WINNER";
        fieldResultPc.classList.add("text-success");
    }
}

function resetColors() {
    fieldResultPlayer.classList.remove("text-danger");
    fieldResultPc.classList.remove("text-danger");
    fieldResultPlayer.classList.remove("text-success");
    fieldResultPc.classList.remove("text-success");
}

function resetFields() {
    fieldPointsPlayer.innerText = "---";
    fieldPointsPc.innerText = "---"
    fieldResultPlayer.innerText = "---";
    fieldResultPc.innerText = "---";
}
