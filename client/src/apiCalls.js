import axios from 'axios'
export const loginCall = async (userCridential, dispatch) => {
    dispatch({ type: "LOGIN_START" })
    try {
        const res = await axios.post("auth/login", userCridential);
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
        return;
    } catch (error) {
        dispatch({ type: "LOGIN_FAILURE", payload: error })
    }
}