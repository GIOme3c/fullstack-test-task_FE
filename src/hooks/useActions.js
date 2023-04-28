import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { cartActions } from "@/store/cart/cart.slice"
import { stateActions } from "@/store/state/state.slice"


const allActions = {
    ...cartActions,
    ...stateActions,
}

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(allActions, dispatch)
}