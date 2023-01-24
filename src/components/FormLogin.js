import { message } from "antd";
import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import picture from "../logo/Squidward&Patrick.png";
import "../styles/LoginForm.css";

function FormLogin() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault()
        try {
            dispatch({ type: "SHOW_LOADING" });
            const res = await axios.post("https://krusty-crab-server.vercel.app/users/login", { userId: username, password: password })
            if (res.data.message === "Login Fail") {
                message.error("Something went wrong")
            } else {
                dispatch({ type: "HIDE_LOADING" });
                message.success("Success login")
                localStorage.setItem("auth", JSON.stringify(res.data));
                navigate("/cashier");
            }
        } catch (error) {
            message.error("Something went wrong")
            console.log(error);
        }
    }, [navigate, username, password, dispatch])

    useEffect(() => {
        if (localStorage.getItem("auth")) {
            localStorage.getItem("auth"); navigate("/cashier");
        }
    }, [navigate]);

    return (
        <div className="formLayout">
            <div className="pict">
                <img alt="" src={picture} style={{ marginTop: 5, width: 401, height: 402 }}></img>
            </div>
            <div className="form">
                <h1>Krusty Krab</h1>
                <h3 className="login-sub-title">Cashier Login</h3>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="container-form">
                        <div className="input-form-login">
                            <label>Username</label>
                            <input
                                type="text"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="input-form-login">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="input-form-login">
                            <button>Login</button>
                        </div>
                    </div>
                </form>
            </div>
        </div >
    );
}

export default FormLogin;