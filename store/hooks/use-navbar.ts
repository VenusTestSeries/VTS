import React from "react"
import navbarSlice from "store/slices/navbar";
import useAppDispatch from "./use-dispatch";
import useAppSelector from "./use-selector"

const { actions } = navbarSlice

const useNavbar = () => {
    const navBarState = useAppSelector((state) => state.navbar)
    const dispatch = useAppDispatch();
    const toggleNavbar = React.useCallback((value: boolean) => {
        dispatch(actions.toggle(value))
    }, [dispatch])

    return {
        toggleNavbar,
        navBarState
    }
}

export default useNavbar