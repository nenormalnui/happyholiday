import { createContext, useContext } from "react";
import { URI_API } from "../Const/const";
import { useFetch } from "../hooks/useFetch";
import { holidaysContext } from "./holidaysContext";

export const textContext = createContext({});

export const TextContextProvider = ({children}) => {
    const {holiday} = useContext(holidaysContext);
    const [{text}] = useFetch(holiday ? `${URI_API}text/${holiday}` : '')
    return (
        <textContext.Provider value={{text}}>
            {children}
        </textContext.Provider>
    )
}