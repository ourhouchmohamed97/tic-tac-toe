const startBtn = document.querySelector("#startBtn");
const restartBtn = document.querySelector("#restartBtn");

startBtn.addEventListener("click",()=>{

    const p1 = document.querySelector("#player1").value;

    const p2 = document.querySelector("#player2").value;

    GameController.start(p1,p2);

    DisplayController.render();

    document.querySelector("#status").textContent =
        `${GameController.getCurrentPlayer().name}'s Turn`;

});

restartBtn.addEventListener("click",()=>{

    GameController.start(
        document.querySelector("#player1").value,
        document.querySelector("#player2").value
    );

    DisplayController.render();

    document.querySelector("#status").textContent =
        `${GameController.getCurrentPlayer().name}'s Turn`;

});