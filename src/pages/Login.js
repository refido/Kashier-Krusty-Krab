import { useSelector } from "react-redux";
import FormLogin from "../components/FormLogin";
import Spinner from "../components/Spinner";
import logoKrustyKrab from "../logo/logoKrustyKrab-1.png";
import "../styles/LoginForm.css";

function Login() {

    const { loading } = useSelector((state) => state.rootReducer);

    return (
        <div className="login-layout">
            {loading && <Spinner />}
            <div className="container-layout">
                <img src={logoKrustyKrab} alt="" className="logo-login" />
                <FormLogin />
            </div>
        </div>
    );
}

export default Login;