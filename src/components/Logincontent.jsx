import { useEffect, useState } from "react"
import Input from "../elements/Input"
import styled from "styled-components"
import BackgroundBG from '../assets/imgs/Camp.jpg'
import Button from "../elements/Button"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { __loginCamp } from "../redux/modules/campSlice"

const Logincontent = (() => {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const { error, loginSuccess } = useSelector((state) => state.camps);

    // 로그인 메시지
    const [failLogin, setFailLogin] = useState('')

    // 로그인버튼 활성화
    const [loginBtn, setLoginBtn] = useState(true);


    const onLoginHandler = () => {
        const login = {
            nickname: id,
            password: password,
        }
        dispatch(__loginCamp(login));
    }


    useEffect(() => {
        if (id === '' || password === '') {
            setLoginBtn(true);
        } else {
            setLoginBtn(false)
        }
        if (error === 'Request failed with status code 400' && !loginSuccess) {
            setFailLogin('로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요');
        } else if (error === null && !loginSuccess) {
            setFailLogin('')
        }
        else if (error === null && loginSuccess) {
            setFailLogin('')
            navigate('/');
        }
    }, [id, password, error, loginSuccess])

    return (
        <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', alignItems: 'center' }}>
            <RegisterBG>
                <StyledImg src={BackgroundBG} alt='bg' />
                <BGh1>Camping</BGh1>
            </RegisterBG>
            <RegisterBox>
                <Registertitle>Login</Registertitle>
                <Input className="input" type="text" placeholder="ID" value={id} changehandler={(e) => setId(e.target.value)} />
                <Input className="input" type="password" placeholder="Password" value={password} changehandler={(e) => setPassword(e.target.value)} />
                <StyledLoginFailMessage>{failLogin}</StyledLoginFailMessage>
                <ButtonBox>
                    <Button onClickHandler={onLoginHandler} isDisabled={loginBtn}>로그인</Button>
                    <Button onClickHandler={() => { navigate('/register') }}>회원가입</Button>
                </ButtonBox>
            </RegisterBox>
        </form>
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
const StyledLoginFailMessage = styled.p`
    height: 1rem;
    font-size: 0.7rem;
    color:#2C3333;
`

