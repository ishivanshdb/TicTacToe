import React, { useState, useContext, useEffect } from "react"
import "./App.css"
import tac from "./assets/zero.png"
import tic from "./assets/cut.png"
import backgroud from "./assets/background.png"
import { withRouter } from "react-router-dom"
import back from "./assets/back.png"
import homepage from "./assets/homepage.png"
import { Button } from "reactstrap"
import { TIC, TAC, DRAW } from "./context/constant"
import { MySymbolContext } from "./context/context"

var items = new Array(9).fill("empty")
const App = ({ history }) => {
  const [state, setState] = useState({
    symbol: TIC,
    ticScore: 0,
    tacScore: 0,
    message: null,
  })

  const { symbol, ticScore, tacScore, message } = state

  const { stateSymbol } = useContext(MySymbolContext)

  useEffect(() => {
    setState({
      symbol: stateSymbol,
      ticScore: 0,
      tacScore: 0,
      message: null,
    })
  }, [])

  const onPress = (index) => {
    if (items[index] === "empty") {
      items[index] = symbol === TIC ? TIC : TAC
      setState({
        symbol: symbol === TIC ? TAC : TIC,
        ticScore: ticScore,
        tacScore: tacScore,
        message: null,
      })
    }
    var winner = winLogic()
    if (winner) {
      if (winner === DRAW) {
        setState({
          symbol: stateSymbol,
          ticScore: ticScore,
          tacScore: tacScore,
          message: DRAW,
        })
        return
      }
      setState({
        symbol: stateSymbol,
        ticScore: winner === TIC ? ticScore + 1 : ticScore,
        tacScore: winner === TAC ? tacScore + 1 : tacScore,
        message: winner + " Win's",
      })
    }
  }

  const getIcon = (val) => {
    switch (val) {
      case TIC:
        return tic
      case TAC:
        return tac
      default:
        return backgroud
    }
  }

  const winLogic = () => {
    if (
      items[0] !== "empty" &&
      items[0] === items[1] &&
      items[0] === items[2]
    ) {
      return items[0]
    } else if (
      items[3] !== "empty" &&
      items[3] === items[4] &&
      items[3] === items[5]
    ) {
      return items[3]
    } else if (
      items[6] !== "empty" &&
      items[6] === items[7] &&
      items[6] === items[8]
    ) {
      return items[6]
    } else if (
      items[0] !== "empty" &&
      items[0] === items[3] &&
      items[0] === items[6]
    ) {
      return items[0]
    } else if (
      items[1] !== "empty" &&
      items[1] === items[4] &&
      items[1] === items[7]
    ) {
      return items[1]
    } else if (
      items[2] !== "empty" &&
      items[2] === items[5] &&
      items[2] === items[8]
    ) {
      return items[2]
    } else if (
      items[0] !== "empty" &&
      items[0] === items[4] &&
      items[0] === items[8]
    ) {
      return items[0]
    } else if (
      items[2] !== "empty" &&
      items[2] === items[4] &&
      items[2] === items[6]
    ) {
      return items[2]
    } else if (!items.includes("empty")) {
      return DRAW
    }
  }

  const reset = () => {
    items = Array(9).fill("empty")
    setState({
      symbol: stateSymbol,
      ticScore: ticScore,
      tacScore: tacScore,
      message: null,
    })
  }

  return (
    <div className="d-flex full-height justify-content-center align-items-center flex-column">
      {message ? (
        <div className="d-flex flex-column justify-content-end flex-grow-1">
          <div
            className={`d-flex alert ${message === DRAW ? "alert-danger" : "alert-info"
              }`}
          >
            {message}
          </div>
        </div>
      ) : (
          ""
        )}
      <div className="d-flex flex-column justify-content-center flex-grow-3">
        <div className="d-flex justify-content-between">
          <h5 className="rounded-pill p-2">{TIC}</h5>
          <h5 className="rounded-pill shadow p-2 bg-white">
            {ticScore} : {tacScore}
          </h5>
          <h5 className="rounded-pill p-2">{TAC}</h5>
        </div>
        <div className="d-flex flex-wrap justify-content-center align-items-center bg-light m-2 rounded">
          {items.map((val, index) => {
            return (
              <Button
                className="play-button btn-outline-light border-3 bg-white"
                color="white"
                onClick={!message ? () => onPress(index) : null}
              >
                <img
                  className="bg-transparent"
                  src={getIcon(val)}
                  width="50px"
                  height="50px"
                />
              </Button>
            )
          })}
        </div>
      </div>
      <div className="d-flex flex-column justify-content-start flex-grow-1 flex-column">
        {message ? (
          <Button
            color="primary"
            onClick={reset}
            className="rounded-pill shadow mb-5"
          >
            One more game
          </Button>
        ) : (
            ""
          )}
        <div className="d-flex justify-content-center align-content-center">
          <Button color="light" className="rounded-circle shadow m-1"
            onClick={() => {
              history.push("/choose")
            }}>
            <img src={back} className="bg-transparent" />
          </Button>
          <Button color="light" className="rounded-circle shadow m-1"
            onClick={() => {
              history.push("/")
            }}>
            <img src={homepage} className="bg-transparent" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default withRouter(App)
