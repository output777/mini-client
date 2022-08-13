import Input from "../elements/Input"
import styled from "styled-components"
import BackgroundBG from '../assets/imgs/Camp.jpg'
import Button from "../elements/Button"

const Logincontent = (() => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <RegisterBG>
                <StyledImg src={BackgroundBG} alt='bg' />
                <BGh1>Camping</BGh1>
            </RegisterBG>
            <RegisterBox>
                <Registertitle>Login</Registertitle>
                <Input className="input" type="email" placeholder="ID" />
                <Input className="input" type="password" placeholder="Password" />
                <ButtonBox>
                    <Button>로그인</Button>
                    <Button>회원가입</Button>
                </ButtonBox>
            </RegisterBox>
        </div>
    )
})

export default Logincontent

const RegisterBG = styled.div`
    width: 65%;
    height:100vh;
    box-sizing: border-box;
    /* position: relative; */
`

const StyledImg = styled.img`
    height:100%;
    background-size: cover;
    background-position: center;
    display: block;
`

const BGh1 = styled.h1`
    font-size: 50px;
    font-weight: bold;
    top: 10%;
    left:10%;
    position: absolute;
    color:orange;
`
const Registertitle = styled.h2`
    margin-bottom: 20px;
    font-size: 2rem;
    color : #000;
    letter-spacing: 2px;
`
const RegisterBox = styled.div`
    width : 35%;
    height : 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const ButtonBox = styled.div`
    display: flex;
    flex-direction: row;
    margin-top : 20px;
`


