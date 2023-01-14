import FormLogin from "../components/FormLogin";
import logoKrustyKrab from "../logo/logoKrustyKrab-1.png";
import "../styles/LoginForm.css";

function Login() {
    return (
        <div className="login-layout">
            <div className="container-layout">
                <img src={logoKrustyKrab} alt="" className="logo-login" />
                <FormLogin />
            </div>
        </div>
    );
}

export default Login;