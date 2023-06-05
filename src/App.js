import { useEffect } from "react";
import { useState } from "react";
import Box from "./components/Box";
import "./index.css";

function App() {
  const [winner, setWinner] = useState("");
  const [player, setPlayer] = useState(1);
  const [boxes, setBoxes] = useState([
    { id: 1, active: false, free: true, remark: "", playerNum: 0 },
    { id: 2, active: false, free: true, remark: "", playerNum: 0 },
    { id: 3, active: false, free: true, remark: "", playerNum: 0 },
    { id: 4, active: false, free: true, remark: "", playerNum: 0 },
    { id: 5, active: false, free: true, remark: "", playerNum: 0 },
    { id: 6, active: false, free: true, remark: "", playerNum: 0 },
    { id: 7, active: false, free: true, remark: "", playerNum: 0 },
    { id: 8, active: false, free: true, remark: "", playerNum: 0 },
    { id: 9, active: false, free: true, remark: "", playerNum: 0 },
  ]);

  useEffect(() => {
    checkNums();
  }, [player]);
  useEffect(() => {
    setTimeout(() => {
      computerPlay();
    }, 500);
  }, [boxes]);

  function changeTicState(id) {
    if (player === 1) {
      setBoxes(() => {
        return boxes.map((obj) => {
          if (obj.id === id) {
            return {
              ...obj,
              free: false,
              active: true,
              remark: "o",
              playerNum: 1,
            };
          }
          return obj;
        });
      });
      setPlayer(2);
    }
  }

  function computerPlay() {
    if (player === 2) {
      let freeBoxes1 = boxes.filter((obj) => obj.free === true);
      let freeBoxes = freeBoxes1.map((a) => a.id);
      let randomNumber = (min, max) => {
        return ~~(Math.random() * (max - min + 1) + min);
      };
      let userBoxes = boxes.filter((a) => a.playerNum === 1).map((a) => a.id);

      let wc = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7],
      ];

      let computerChoice = 0;

      if (userBoxes.length <= 1) {
        if (boxes[4].free === true) {
          computerChoice = 5;
        } else {
          computerChoice = freeBoxes[randomNumber(1, freeBoxes.length - 1)];
        }

        setBoxes(() => {
          return boxes.map((obj) => {
            if (freeBoxes.length >= 1 && obj.id === computerChoice) {
              return {
                ...obj,
                free: false,
                active: true,
                remark: "x",
                playerNum: 2,
              };
            }
            return obj;
          });
        });
      } else if (userBoxes.length === 2) {
        let possibleWC = [];
        for (let n = 0; n < wc.length; n++) {
          if (userBoxes.some((a) => wc[n].includes(a))) {
            possibleWC.push(wc[n]);
          }
        }
        let suggestedBox = [];

        for (let n = 0; n < possibleWC.length; n++) {
          if (
            possibleWC[n].includes(userBoxes[0]) &&
            possibleWC[n].includes(userBoxes[1])
          ) {
            suggestedBox.push(possibleWC[n]);
          }
        }
        let computerChoice2 = suggestedBox
          .flat()
          .filter((x) => !userBoxes.includes(x));
        if (freeBoxes.includes(computerChoice2[0]) === true) {
          computerChoice2 = suggestedBox
            .flat()
            .filter((x) => !userBoxes.includes(x));
        } else {
          computerChoice2 = [freeBoxes[randomNumber(1, freeBoxes.length - 1)]];
        }

        setBoxes(() => {
          return boxes.map((obj) => {
            if (freeBoxes.length > 1 && obj.id === computerChoice2[0]) {
              return {
                ...obj,
                free: false,
                active: true,
                remark: "x",
                playerNum: 2,
              };
            }
            return obj;
          });
        });
      } else if (userBoxes.length >= 3) {
        let possibleWC = [];
        for (let n = 0; n < wc.length; n++) {
          if (userBoxes.some((a) => wc[n].includes(a))) {
            possibleWC.push(wc[n]);
          }
        }
        let suggestedBox = [];

        for (let n = 0; n < possibleWC.length; n++) {
          if (
            possibleWC[n].includes(userBoxes[0]) &&
            possibleWC[n].includes(userBoxes[1])
          ) {
            suggestedBox.push(possibleWC[n]);
          }
        }
        let computerChoice3 = suggestedBox
          .flat()
          .filter((x) => !userBoxes.includes(x));
        if (freeBoxes.includes(computerChoice3[0]) === true) {
          console.log("jest w nim ");
          computerChoice3 = suggestedBox
            .flat()
            .filter((x) => !userBoxes.includes(x));
        } else {
          computerChoice3 = [freeBoxes[randomNumber(1, freeBoxes.length - 1)]];
        }

        setBoxes(() => {
          return boxes.map((obj) => {
            if (freeBoxes.length > 1 && obj.id === computerChoice3[0]) {
              return {
                ...obj,
                free: false,
                active: true,
                remark: "x",
                playerNum: 2,
              };
            }
            return obj;
          });
        });
      }
    }
    setPlayer(1);
  }
  function resetGame(id) {
    setWinner(0);
    setBoxes((prev) => {
      return [
        { id: 1, active: false, free: true, remark: "", playerNum: 0 },
        { id: 2, active: false, free: true, remark: "", playerNum: 0 },
        { id: 3, active: false, free: true, remark: "", playerNum: 0 },
        { id: 4, active: false, free: true, remark: "", playerNum: 0 },
        { id: 5, active: false, free: true, remark: "", playerNum: 0 },
        { id: 6, active: false, free: true, remark: "", playerNum: 0 },
        { id: 7, active: false, free: true, remark: "", playerNum: 0 },
        { id: 8, active: false, free: true, remark: "", playerNum: 0 },
        { id: 9, active: false, free: true, remark: "", playerNum: 0 },
      ];
    });
  }

  const checkNums = () => {
    const winningCombination = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [7, 5, 3],
    ];
    let tempXArray = [];
    let tempOArray = [];
    let playerO = boxes.filter((obj) => obj.playerNum === 2);
    let playerOArray = playerO.map((obj) => obj.id);
    let playerX = boxes.filter((obj) => obj.playerNum === 1);
    let playerXArray = playerX.map((obj) => obj.id);
    if (playerXArray.length > 2) {
      for (let n = 0; n < winningCombination.length; n++) {
        let check = winningCombination[n].every((element) =>
          playerXArray.includes(element)
        );
        tempXArray.push(check);
      }
      if (tempXArray.includes(true)) {
        setWinner(1);
      }
    }
    if (playerOArray.length > 1) {
      for (let n = 0; n < winningCombination.length; n++) {
        let check = winningCombination[n].every((element) =>
          playerOArray.includes(element)
        );
        tempOArray.push(check);
      }
      if (tempOArray.includes(true)) {
        setWinner(2);
      }
    }
  };
  let champion;
  if (winner === 0) {
    champion = "unknown yet";
  } else if (winner === 1) {
    champion = "You";
  } else {
    champion = "Computer";
  }

  return (
    <>
      <div className="game-container">
        <div id="winner-text">The winner is: {champion}</div>
        <div className="boxes-container">
          {boxes.map((a) => (
            <Box
              id={a.id}
              remark={a.remark}
              free={a.free}
              active={a.active}
              changeTic={() => changeTicState(a.id)}
            />
          ))}
        </div>
        <div id="buttons-container">
          <button className="button current-player">
            {" "}
            Current player: {player}{" "}
          </button>
          <button
            className="button new-game"
            onClick={() => {
              return resetGame();
            }}
          >
            New Game
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
