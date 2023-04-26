import { createContext, useEffect, useReducer } from "react";
import { initialState, reducer } from "../Reducer/Appreducer";
import { json } from "react-router-dom";
export const Appcontext=createContext()

const AppcontextWrapper=({children})=>{
    /* let stateValue= localStorage.getItem('AppState',JSON.parse()) */
    const[state,dispath]=useReducer(reducer,initialState)
    let favoriteData=localStorage.getItem('AppState')

    useEffect(()=>{
        favoriteData &&(
            dispath({
                type:'LOCAL_STORAGE_DATA',
                payload:JSON.parse(favoriteData)
            })
        )
    },[])

    useEffect(()=>{
        localStorage.setItem('AppState',JSON.stringify(state.favoriteItems))
    },[state])

    return(
        <Appcontext.Provider value={[state,dispath]}>
            {children}
        </Appcontext.Provider>
    )
}

export default AppcontextWrapper