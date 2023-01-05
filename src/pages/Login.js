import styled from "styled-components";
import logoKrustyKrab from "../logo/logoKrustyKrab-1.png"

function Login() {
    return(
        <LoginLayout> 
             <Logo src={logoKrustyKrab} />
        </LoginLayout>
    );
}

const LoginLayout = styled.div`
    height: 100vh;
    display: flex;
    background: linear-gradient(180deg, #83EAF3 0%, #77E1EF 26.95%, #40AEDF 67.7%, #2EA0D7 100%);
`;

const Logo = styled.img`
    margin: 20;
    width: 50; 
    height: 50;
`;

export default Login;