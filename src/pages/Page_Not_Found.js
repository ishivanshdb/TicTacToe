import React from 'react'
import '../App.css'
import back from "../assets/back.png"
import { Button } from "reactstrap"
import { withRouter } from "react-router-dom"


const PageNotFound = ({ history }) => {
    return (
        <div className="d-flex full-height flex-column justify-content-center align-items-center m-5">
            <h1 className="text-danger">404</h1>
            <h3>Page Not Found!</h3>
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
export default withRouter(PageNotFound)