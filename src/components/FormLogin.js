import { message, Row } from "antd";
import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import picture from "../logo/Squidward&Patrick.png";
import "../styles/LoginForm.css";

function FormLogin() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // const handleUsernameChange = (e) => {
    //     setUsername(e.target.value)
    // }

    // const handlePasswordChange = (e) => {
    //     setPassword(e.target.value)
    // }

    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log(username, password);
        try {
            const res = await axios.post("http://localhost:8080/users/login", { userId: username, password: password })
            if (res.data.message === "Login Fail") {
                message.error("Something went wrong")
            } else {
                message.success("Success login")
            }
            // message.success("user login success")
        } catch (error) {
            message.error("Something went wrong")
            console.log(error);
        }
    }
    return (
        <div className="formLayout">
            <div className="pict">
                <img src={picture} style={{ marginTop: 5, width: 401, height: 402 }}></img>
            </div>
            <div className="form">
                <h1>Krusty Krab</h1>
                <h3>Cashier Login</h3>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="container-form">
                        <div className="input-form">
                            <label>Username</label>
                            <input
                                type="text"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="input-form">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="input-form">
                            <button>Login</button>
                        </div>
                    </div>
                </form>
                <span>Forgot Password</span>
            </div>
        </div >
    );
}

export default FormLogin;