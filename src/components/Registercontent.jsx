import Input from "../elements/Input"
import styled from "styled-components"
import BackgroundBG from '../assets/imgs/Camp.jpg'
import Button from "../elements/Button"
import { useState } from "react"
import { useDispatch } from "react-redux"
import axios from "axios"

const Registercontent = () => {
    const [id, setId] = useState('');
    const [idReg, setIdReg] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordCheck] = useState('');


    const onChangeIdHandler = (e) => {
        const { value } = e.target;
        setId(value);
        let regExp = /^[a-z]+[a-z0-9]{5,19}$/g;
        setIdReg(regExp.test(id));

    }

    const onRegisterHandler = async () => {
        const newRegister = {
            nickname: id,
            password: password,
            passwordConfirm: passwordConfirm,
        }

        try {
            const data = await axios.post('http://13.125.227.32/api/member/signup', newRegister)
            console.log(data);

        } catch (error) {
            console.log(error)
        }
    }

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
                        <Input
                            name="nickname"
                            className="input"
                            type="email"
                            placeholder="ID"
                            width='200px'
                            value={id}
                            changehandler={(e) => onChangeIdHandler(e)}
                        />
                        <Button>중복확인</Button>
                    </IDbox>
                    <p>{!idReg
                        ? '영문자로 시작하는 영문자 또는 숫자 6~20자를 입력해주세요'
                        : '올바른 아이디 입니다.'
                    }</p>
                    <Input
                        name="password"
                        className="input"
                        type="password"
                        placeholder="Password"
                        text={password.length === 0 ? '비밀번호를 입력해주세요' : '비밀번호를 입력하고 있습니다'}
                        width='200px'
                        value={password}
                        changehandler={(e) => setPassword(e.target.value)}
                    />
                    <Input
                        name="passwordCheck"
                        className="input"
                        type="password"
                        placeholder="Confirm Password"
                        text={
                            passwordConfirm.length === 0 ? '비밀번호 확인을 입력해주세요' : password !== passwordConfirm ?
                                '비밀번호가 일치하지 않습니다' : '비밀번호가 일치합니다'
                        }
                        width='200px'
                        value={passwordConfirm}
                        changehandler={(e) => setPasswordCheck(e.target.value)}
                    />
                    <ButtonBox>
                        <Button onClickHandler={onRegisterHandler}>회원가입</Button>
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