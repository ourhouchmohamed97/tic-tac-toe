const DisplayController = (()=>{

    const boardDiv = document.querySelector("#board");
    const status = document.querySelector("#status");

    const render = ()=>{

        boardDiv.innerHTML = "";

        Gameboard.getBoard().forEach((cell,index)=>{

            const square = document.createElement("div");

            square.classList.add("cell");

            square.textContent = cell;

            square.addEventListener("click",()=>{

                const result = GameController.playRound(index);

                render();

                if(result==="Continue")
                    status.textContent =
                        `${GameController.getCurrentPlayer().name}'s Turn`;

                else
                    status.textContent = result;

            });

            boardDiv.appendChild(square);

        });

    };

    return {render};

})();