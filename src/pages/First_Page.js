import React from "react"
import logo from "../assets/logo.png"
import "../App.css"
import { withRouter } from "react-router-dom"
import { Button } from "reactstrap"

const FirstPage = ({ history }) => {
  return (
    <div className="d-flex flex-column full-height justify-content-center align-items-center">
      <div className="d-flex flex-grow-1 justify-content-center align-items-center">
        <div className="d-flex justify-content center align-items-center">
          <img src={logo} />
        </div>

      </div>
      <div className="d-flex flex-grow-1 justify-content-center align-items-center flex-column">
        <div className="d-flex justify-content-center flex-grow-1">
          <h3>Choose your play mode</h3>
        </div>
        <div className="d-flex justify-content-center flex-grow-1 flex-column">
          <Button color="primary" className="rounded-pill shadow mb-3"
            onClick={() => {
              history.push("/notfound")
            }}
          >
            With AI
          </Button>
          <Button
            color="light"
            className="rounded-pill shadow"
            onClick={() => {
              history.push("/choose")
            }}
          >
            With a friend
          </Button>
        </div>
      </div>
    </div>
  )
}

export default withRouter(FirstPage)
