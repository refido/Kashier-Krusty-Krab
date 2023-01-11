
import styled from "styled-components";
import FormLogin from "../components/FormLogin";
import logoKrustyKrab from "../logo/logoKrustyKrab-1.png"
import picture from "../logo/Squidward&Patrick.png";

function Login() {
    return (
        <LoginLayout>
            <Container>
                <Logo src={logoKrustyKrab} />
                <FormLogin></FormLogin>
            </Container>
        </LoginLayout>
    );
}

const LoginLayout = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    background: linear-gradient(180deg, #83EAF3 0%, #77E1EF 26.95%, #40AEDF 67.7%, #2EA0D7 100%);
`;

const Logo = styled.img`
    margin: 20px;
    width: 73px; 
    height: 68px;
`;

const Container = styled.div`
    background-image: url('/background-bunga.png');
    background-repeat: no-repeat;
    display: flex;
    justify-content: row;
`;

export default Login;