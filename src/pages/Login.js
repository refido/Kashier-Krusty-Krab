import styled from "styled-components";
import logoKrustyKrab from "../logo/logoKrustyKrab-1.png"
import picture from "../logo/Squidward&Patrick.png";

function Login() {
    return (
        <LoginLayout>
            <Container>
                <Logo src={logoKrustyKrab} />
                <div>
                    <img src={picture} style={{ margin:40, width: 400, height:400 }}></img>

                </div>
            </Container>
        </LoginLayout>
    );
}

const LoginLayout = styled.div`
    height: max-width;
    background: linear-gradient(180deg, #83EAF3 0%, #77E1EF 26.95%, #40AEDF 67.7%, #2EA0D7 100%);
`;

const Logo = styled.img`
    margin: 30px;
    width: 74px; 
    height: 71px;
`;

const Container = styled.div`
    background-image: url('/background-bunga.png');
`;

export default Login;