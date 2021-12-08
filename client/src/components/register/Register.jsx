import axios from 'axios';
import {useRef} from 'react'
import { useNavigate } from 'react-router';
import './register.css'

export default function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const navigate = useNavigate()
    const handleClick = async (e) => {
        e.preventDefault();
        if(password.current.value !== passwordAgain.current.value){
            password.current.setCustomValidity("Password don't match. Please try again!!!")
        }else{
            const user ={
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            }
            try{
                await axios.post("auth/register", user)
                navigate("/login")
            }catch(err){
                console.log(err);
            }
        }
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
                        <input placeholder="Username" required ref={username} className="loginInput" />
                        <input placeholder="Email" type="email" required ref={email} className="loginInput" />
                        <input placeholder="Password" minLength="6" type="password" required ref={password} className="loginInput" />
                        <input placeholder="Password Again" type="password" ref={passwordAgain} className="loginInput" />
                        <button className="loginButton">Register</button>
                        <button className="loginRegisterButton">Log into your account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
