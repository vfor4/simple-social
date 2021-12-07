import './login.css'
import { useRef } from 'react'

export default function Login() {

    const email = useRef()
    const password = useRef()
    const handleClick = (e) => {
        e.preventDefault()
        console.log(email.current.value)
    }
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
                        <input placeholder="Password" type="password" minLength="6" className="loginInput" required ref={password}/>
                        <button className="loginButton" >LogIn</button>
                        <span className="loginForgot">Forgot Password</span>
                        <button className="loginRegisterButton">Create a new account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
