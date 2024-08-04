import "./App.css";
import rock from "./icons/rock.png";
import paper from "./icons/paper.png";
import scissor from "./icons/scissors.png";
import { useEffect, useState } from "react";

function App() {
  const options = ["rock", "paper", "scissor"];

  const [user, setUser] = useState("");
  const [play, setPlay] = useState("start");
  const [comp, setComp] = useState("");
  const [userScore, setUserScore] = useState(0);
  const [compScore, setCompScore] = useState(0);
  const [drawScore, setDrawScore] = useState(0);
  const [msg, setMsg] = useState("Play your move");

  useEffect(() => {
    if (user && comp) {
      compare();
    }
  }, [user, comp]);

  function compare() {
    console.log("user:" + user);
    console.log("comp:" + comp);

    if (user === comp) {
      setDrawScore(drawScore + 1);
      setMsg("Draw !");
    } else if (
      (user === "rock" && comp === "paper") ||
      (user === "paper" && comp === "scissor") ||
      (user === "scissor" && comp === "rock")
    ) {
      setCompScore(compScore + 1);
      setMsg("System Win !");
    } else if (
      (user === "paper" && comp === "rock") ||
      (user === "scissor" && comp === "paper") ||
      (user === "rock" && comp === "scissor")
    ) {
      setUserScore(userScore + 1);
      setMsg("You Win !");
    }
  }

  function handleRock() {
    setUser("rock");
    setComp(options[Math.floor(Math.random() * options.length)]);
  }

  function handlePaper() {
    setUser("paper");
    setComp(options[Math.floor(Math.random() * options.length)]);
  }

  function handleScissor() {
    setUser("scissor");
    setComp(options[Math.floor(Math.random() * options.length)]);
  }
  function handleReplay() {
    setUser("");
    setComp("");
    setUserScore(0);
    setCompScore(0);
    setDrawScore(0);
    setMsg("Play your move");
    setPlay("start");
  }

  return (
    <div className="App">
      <div className="head">
        <h1>Rock Paper Scissors</h1>
      </div>

      <div className="ottf">
        <main
          className="main"
          style={{ borderRight: "1px solid rgba(128, 121, 255, 0.316)" }}
        >
          {play === "stop" && (
            <div
              style={{
                margin: "1%",
                fontSize: "25px",
                color: "rgb(41, 131, 209)",
              }}
            >
              " Make Your Choice "
            </div>
          )}
          <div className="content 1">
            <div className="icon" id="rock">
              <img
                className="img"
                src={rock}
                onClick={play === "stop" ? handleRock : () => {}}
                alt=""
              ></img>
            </div>

            <div className="icon" id="paper">
              <img
                className="img"
                src={paper}
                onClick={play === "stop" ? handlePaper : () => {}}
                alt=""
              ></img>
            </div>

            <div className="icon" id="scissor">
              <img
                className="img"
                src={scissor}
                onClick={play === "stop" ? handleScissor : () => {}}
                alt=""
              ></img>
            </div>
          </div>

          <div className="messages 3">
            <div className="msg-container">
              {msg === "You Win !" && (
                <p
                  className="msg text"
                  style={{ color: "green", fontSize: "40px" }}
                >
                  {msg}
                </p>
              )}
              {msg === "System Win !" && (
                <p
                  className="msg text"
                  style={{ color: "red", fontSize: "40px" }}
                >
                  {msg}
                </p>
              )}
              {msg === "Draw !" && (
                <p
                  className="msg text"
                  style={{ color: "purple", fontSize: "40px" }}
                >
                  {msg}
                </p>
              )}
            </div>

            <div className="msg-container">
              {play === "start" && (
                <button
                  type="button"
                  onClick={() => {
                    setPlay("stop");
                  }}
                  className="btn text"
                >
                  Start
                </button>
              )}
              {play === "stop" && (
                <button
                  type="button"
                  onClick={handleReplay}
                  className="btn text"
                  style={{ backgroundColor: "rgb(51, 26, 109)" }}
                >
                  Replay
                </button>
              )}
            </div>
          </div>
        </main>

        <div className="score-section">
          <div className="comp score 2">
            <div>
              <p className="text unli">Your choice</p>
              {user !== "" ? (
                <div className="icon" id={user}>
                  {user === "rock" && (
                    <img className="img-1" src={rock} alt=""></img>
                  )}
                  {user === "paper" && (
                    <img className="img-1" src={paper} alt=""></img>
                  )}
                  {user === "scissor" && (
                    <img className="img-1" src={scissor} alt=""></img>
                  )}
                </div>
              ) : (
                ""
              )}
              <p className="comp-choice">{user}</p>
            </div>

            <div>
              <p className="text unli">System choice</p>
              {comp !== "" ? (
                <div className="icon" id={comp}>
                  {comp === "rock" && (
                    <img className="img-1" src={rock} alt=""></img>
                  )}
                  {comp === "paper" && (
                    <img className="img-1" src={paper} alt=""></img>
                  )}
                  {comp === "scissor" && (
                    <img className="img-1" src={scissor} alt=""></img>
                  )}
                </div>
              ) : (
                ""
              )}
              <p className="comp-choice">{comp}</p>
            </div>
          </div>

          <div
            className="scores-head 4"
            style={{ backgroundColor: "rgba(163, 249, 242, 0.215)" }}
          >
            <div
              className="scores text score"
              style={{
                color: "rgb(130, 69, 39)",
                marginTop: "5%",
                fontFamily: "cursive",
              }}
            >
              Score Bord
            </div>

            <div className="scores">
              <div className="score" style={{ color: "green" }}>
                <p className="user-score">{userScore}</p>
                <p className="text">You</p>
              </div>
              <div className="score" style={{ color: "red" }}>
                <p className="computer-score">{compScore}</p>
                <p className="text">System</p>
              </div>
              <div className="score" style={{ color: "purple" }}>
                <p className="computer-score">{drawScore}</p>
                <p className="text">Draw</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
