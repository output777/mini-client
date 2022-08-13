import Input from "../elements/Input"
import styled from "styled-components"
import BackgroundBG from '../assets/imgs/Camp.jpg'

const Registercontent = () => {
    return (
        <RegiterBG>
            <BGh1>Camping</BGh1>
            <RegisterBox>
                <Registertitle>SIGN UP</Registertitle>
                <Input className="input" type="email" placeholder="ID" text="아이디를 입력해주세요"/>
                <Input className="input" type="email" placeholder="Password" text="비밀번호를 입력해주세요"/>
                <Input className="input" type="email" placeholder="Confirm Password" text="비밀번호가 일치하지 않습니다"/>
                <ButtonBox>
                    <button>회원가입</button>
                    <button>이전</button>
                </ButtonBox>
            </RegisterBox>
        </RegiterBG>
    )
}
export default Registercontent

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
    background-color:white;
    border-radius: 20px;
    position: absolute;
    top:23%;
    right:15%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    -webkit-box-shadow: 7px 5px 10px 2px rgba(0,0,0,0.45); 
    box-shadow: 7px 5px 10px 2px rgba(0,0,0,0.45);
`
const ButtonBox = styled.div`
    display: flex;
    flex-direction: row;
    margin-top : 20px;
`