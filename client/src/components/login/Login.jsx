import './login.css'
import { useContext, useRef } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { loginCall } from '../../apiCalls'
import { CircularProgress } from '@material-ui/core'
export default function Login() {

    const email = useRef();
    const password = useRef();
    const { user, isFetching, error, dispatch } = useContext(AuthContext)
    const handleClick = (e) => {
        e.preventDefault();
        loginCall({ email: email.current.value, password: password.current.value }, dispatch);
    };

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Bookbook</h3>
                    <span className="loginDesc">Nói nhỏ cho mình bookbook
                        <br />
                        Và bookbook sẽ nói cho cả thế giới</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder="Email" className="loginInput" type="email" required ref={email} />
                        <input placeholder="Password" type="password" minLength="6" className="loginInput" required ref={password} />
                        <button className="loginButton" disabled={isFetching} >{isFetching ? <CircularProgress color="white" size="20px" /> : "login"}</button>
                        <span className="loginForgot">Forgot Password</span>
                        <button className="loginRegisterButton" disabled={isFetching}>{isFetching ? <CircularProgress color="white" size="20px" /> : "Create a new account"}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
