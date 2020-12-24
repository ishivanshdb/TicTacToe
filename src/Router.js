import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "react-toastify/dist/ReactToastify.css"
import FirstPage from "./pages/First_Page"
import ChoosePage from "./pages/Choose_Page"
import App from "./App"
import PageNotFound from "./pages/Page_Not_Found"
import Provider from "./context/provider"

const Router = () => {
  return (
    <BrowserRouter>
      <Provider>
        <Switch>
          <Route path="/" component={FirstPage} exact />
          <Route path="/choose" component={ChoosePage} exact />
          <Route path="/play" component={App} exact />
          <Route path="/notfound" component={PageNotFound} exact />
        </Switch>
      </Provider>
    </BrowserRouter>
  )
}

export default Router
