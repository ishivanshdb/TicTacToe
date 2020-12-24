import React, { useContext, useEffect } from "react"
import tac from "../assets/zero.png"
import tic from "../assets/cut.png"
import back from "../assets/back.png"
import "../App.css"
import { withRouter } from "react-router-dom"
import { Button } from "reactstrap"
import { MySymbolContext } from "../context/context"
import { TIC, TAC } from "../context/constant"
import { CHANGESYMBOL } from "../context/action"

const ChoosePage = ({ history }) => {

  const { stateSymbol, dispatchSymbol } = useContext(MySymbolContext)

  useEffect(() => {
    dispatchSymbol({
      type: CHANGESYMBOL,
      payload: TIC
    })
  }, [])

  const switchSymbol = (symbl) => {
    dispatchSymbol({
      type: CHANGESYMBOL,
      payload: symbl === TIC ? TIC : TAC
    })
  }

  return (
    <div className="d-flex flex-column full-height justify-content-center align-items-center">
      <div className="d-flex flex-grow-1 justify-content-center align-items-center">
        <h3>Pick your side</h3>
      </div>
      <div className="d-flex flex-grow-1 justify-content-center align-items-center">
        <div className={`d-flex justify-content center align-items-center flex-column ${stateSymbol === TAC ? 'blur' : ''}`} onClick={() => switchSymbol(TIC)} >
          <img className="mb-3" src={tic} />
          <input className="radio-button" name="mysymbl" type="radio" checked={stateSymbol === TIC ? true : null} />
        </div>
        <div className="align-self-stretch border-right ml-2 mr-2"></div>
        <div className={`d-flex justify-content center align-items-center flex-column ${stateSymbol === TIC ? 'blur' : ''}`} onClick={() => switchSymbol(TAC)}>
          <img className="mb-3" src={tac} />
          <input className="radio-button" name="mysymbl" type="radio" checked={stateSymbol === TAC ? true : null} />
        </div>
      </div>
      <div className="d-flex flex-grow-1 justify-content-center align-items-center">
        <Button className="rounded-pill shadow" color="light" onClick={() => history.push("/play")}>
          Continue
          </Button>
      </div>
      <div className="d-flex justify-content-center flex-grow-1 flex-column align-items-start">
        <Button color="light" className="rounded-circle shadow"
          onClick={() => {
            history.push("/")
          }}>
          <img src={back} />
        </Button>
      </div>
    </div>
  )
}

export default withRouter(ChoosePage)
