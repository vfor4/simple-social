import { createContext, useReducer } from "react";

const INITIAL_CONTEXT = {
    user: null,
    isFetching: false,
    error: false
}

export const AuthContext = createContext(INITIAL_CONTEXT);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthContext, INITIAL_CONTEXT);
    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch
            }}
        >
            <children />
        </AuthContext.Provider>
    )
}