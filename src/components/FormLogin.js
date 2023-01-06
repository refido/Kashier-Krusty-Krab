import { Row } from "antd";
import styled from "styled-components";
import picture from "../logo/Squidward&Patrick.png";
import "../styles/LoginForm.css";

function FormLogin() {
    return (
        <div className="formLayout">
            <div className="pict">
                <img src={picture} style={{ marginTop: 5, width: 401, height: 402 }}></img>
            </div>
            <div className="form">
                <h1>Krusty Krab</h1>
                <h3>Cashier Login</h3>
                <div className="container-form">
                    <div className="input-form">
                        <label>Username</label>
                        <input></input>
                    </div>
                    <div className="input-form">
                        <label>Password</label>
                        <input type="password"></input>
                    </div>
                    <div className="input-form">
                        <button>Login</button>
                    </div>
                </div>
                <span>Forgot Password</span>
            </div>
        </div>
    );
}

export default FormLogin;