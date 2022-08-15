import Input from "../elements/Input"
import styled from "styled-components"
import BackgroundBG from '../assets/imgs/Camp.jpg'
import Button from "../elements/Button"

const Registercontent = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <RegisterBG>
                <BGh1>Camping</BGh1>
                <StyledImg src={BackgroundBG} alt='bg' />
            </RegisterBG>
            <RegisterBox>
                <div>
                    <Registertitle>SIGN UP</Registertitle>
                    <IDbox>
                        <Input className="input" type="email" placeholder="ID" text="아이디를 입력해주세요" width='200px'/>
                        <Button>중복확인</Button>
                    </IDbox>
                    <Input className="input" type="email" placeholder="Password" text="비밀번호를 입력해주세요" width='200px' />
                    <Input className="input" type="email" placeholder="Confirm Password" text="비밀번호가 일치하지 않습니다" width='200px'/>
                    <ButtonBox>
                        <Button>회원가입</Button>
                        <Button>이전</Button>
                    </ButtonBox>
                </div>
            </RegisterBox>
        </div >
    )
}
export default Registercontent

const RegisterBG = styled.div`
    width: 65%;
    height:100vh;
    box-sizing: border-box;
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
    margin-bottom: 30px;
    font-size: 2rem;
    color : black;
    letter-spacing: 2px;
`
const RegisterBox = styled.div`
    width : 35%;
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
const IDbox = styled.div`
    display: flex;
    align-items: flex-start;
    margin-bottom:-10px;
`