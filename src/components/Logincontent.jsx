import Input from "../elements/Input"
import styled from "styled-components"
import BackgroundBG from '../assets/Camp.jpg'

const Logincontent = (() => {
    return (
        <RegiterBG>
            <BGh1>Camping</BGh1>
            <RegisterBox>
                <Registertitle>CAMPING</Registertitle>
                <Input className="input" type="email" placeholder="ID" />
                <Input className="input" type="password" placeholder="Password" />
                <ButtonBox>
                    <button>로그인</button>
                    <button>회원가입</button>
                </ButtonBox>
            </RegisterBox>
        </RegiterBG>
    )
})

export default Logincontent

const RegiterBG = styled.div`
    background-image : url(${BackgroundBG});
    border:1px solid black;
    width: 100vw;
    height:100vh;
    background-repeat: no-repeat;
	background-size: cover;
    box-sizing: border-box;
    position: relative;
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
    font-size: 30px;
    color : black;
    letter-spacing: 2px;
`
const RegisterBox = styled.div`
    width : 550px;
    height : 600px;
    background-color: white;
    position: absolute;
    top:23%;
    right:15%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    -webkit-box-shadow: 7px 5px 10px 2px rgba(0,0,0,0.45); 
    box-shadow: 7px 5px 10px 2px rgba(0,0,0,0.45);
`
const ButtonBox = styled.div`
    display: flex;
    flex-direction: row;
    margin-top : 20px;
`


