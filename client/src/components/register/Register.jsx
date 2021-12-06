import './register.css'

export default function Register() {
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
                    <div className="loginBox">
                        <input placeholder="Username" className="loginInput" />
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <input placeholder="Password Again" className="loginInput" />
                        <button className="loginButton">Register</button>
                        <button className="loginRegisterButton">Log into your account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
