
import styled from "styled-components";
import FormLogin from "../components/FormLogin";
import logoKrustyKrab from "../logo/logoKrustyKrab-1.png";
import "../styles/LoginForm.css";

function Login() {
    return (
        <div className="login-layout">
            <div className="container-layout">
                <img src={logoKrustyKrab} className="logo-login" />
                <FormLogin></FormLogin>
            </div>
        </div>
    );
}

export default Login;