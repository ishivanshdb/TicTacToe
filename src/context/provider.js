import React, { useReducer } from "react"
import { MySymbolReducer } from "./reducer"
import { TIC } from "./constant"
import { MySymbolContext } from "./context"

const Provider = (props) => {
  const [stateSymbol, dispatchSymbol] = useReducer(MySymbolReducer, TIC)

  return (
    <MySymbolContext.Provider value={{ stateSymbol, dispatchSymbol }}>
      {props.children}
    </MySymbolContext.Provider>
  )
}

export default Provider
