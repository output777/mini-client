import Input from "../elements/Input"
import styled from "styled-components"
import BackgroundBG from '../assets/imgs/Camp.jpg'
import Button from "../elements/Button"
import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Registercontent = () => {
    let navigate = useNavigate();

    // 아이디, 비밀번호 확인
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordCheck] = useState('');

    // 오류메시지 상태 저장
    const [idMessage, setIdMessage] = useState('');
    const [passwordMessage, setPasswordMessage] = useState('');
    const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('');

    // 중복버튼 활성화, 회원가입버튼 활성화
    const [idOverlap, setIdOverlap] = useState(false);
    const [registerBtn, setRegisterBtn] = useState(true);
    const [idDbCheck, setIdDbCheck] = useState(false);

    // 유효성 검사
    const [isId, setIsId] = useState(false);
    const [isPassword, setIsPassword] = useState(false);
    const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

    // id, password 정규식
    const idRegEx = /^[a-zA-Z0-9]{6,13}$/g;
    const passwordRegEx = /^[a-zA-Z0-9]{4,15}$/;


    const onChangeIdHandler = (e) => {
        const { value } = e.target;
        let temp = '';
        if (!idRegEx.test(value)) {
            setIdMessage('숫자, 영문자 조합 6 ~ 12자리를 입력해주세요');
            setIsId(false);
            setIdOverlap(true)
        } else {
            temp = value;
            setIdMessage('올바른 이름 형식입니다.');
            if (temp === value) {
                setIsId(true);
            } else {
                setIsId(false);
            }
            setIdOverlap(false);
        }
        setId(value);
    }

    const onChangePasswordHandler = (e) => {
        const { value } = e.target;

        if (!passwordRegEx.test(value)) {
            setPasswordMessage('숫자, 영문자 조합 4~15자리를 입력해주세요');
            setIsPassword(false);
        } else {
            setPasswordMessage('올바른 비밀번호 형식입니다.');
            setIsPassword(true);
        }
        setPassword(value);
    }

    const onChangePasswordConfirm = (e) => {
        const { value } = e.target;
        if (password === value) {
            setPasswordConfirmMessage('비밀번호가 일치합니다');
            setIsPasswordConfirm(true);
        } else {
            setPasswordConfirmMessage('비밀번호가 일치하지 않습니다')
            setIsPasswordConfirm(false);
        }
        setPasswordCheck(value);
    }


    const onClickIdCheck = async () => {
        const newIdCheck = {
            nickname: id,
        }

        try {
            const data = await axios.post('api/member/idCheck', newIdCheck)
            if (data.data) {
                setIdMessage('사용할 수 있는 아이디입니다');
                setIdDbCheck(true)
                setIdOverlap(true)
            } else {
                setIdMessage('중복되는 아이디입니다.');
                setIdDbCheck(false)
                setIdOverlap(false)
            }
        } catch (error) {
            console.log(error)
        }
    }


    const onRegisterHandler = async () => {
        const newRegister = {
            nickname: id,
            password: password,
            passwordConfirm: passwordConfirm,
        }
        try {
            const data = await axios.post('member/signup', newRegister)
            console.log(data);
            navigate('/login')
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (isId && isPassword && isPasswordConfirm && idDbCheck && idOverlap) {
            setRegisterBtn(false);
        } else {
            setRegisterBtn(true);
        }
    }, [isId, isPassword, isPasswordConfirm, idDbCheck, idOverlap])



    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <RegisterBG>
                <BGh1>Camp</BGh1>
                <StyledImg src={BackgroundBG} alt='bg' />
            </RegisterBG>
            <RegisterBox>
                <form onSubmit={(e) => e.preventDefault()}>
                    <Registertitle>SIGN UP</Registertitle>
                    <IDbox>
                        <Input
                            name="nickname"
                            className="input"
                            type="text"
                            text={idMessage}
                            placeholder="ID"
                            width='200px'
                            value={id}
                            changehandler={(e) => onChangeIdHandler(e)}
                        />
                        <Button isDisabled={idOverlap} onClickHandler={onClickIdCheck}>중복확인</Button>
                    </IDbox>
                    <Input
                        name="password"
                        className="input"
                        type="password"
                        placeholder="Password"
                        width='200px'
                        text={passwordMessage}
                        value={password}
                        changehandler={(e) => onChangePasswordHandler(e)}
                    />
                    <Input
                        name="passwordCheck"
                        className="input"
                        type="password"
                        placeholder="Confirm Password"
                        width='200px'
                        text={passwordConfirmMessage}
                        value={passwordConfirm}
                        changehandler={(e) => onChangePasswordConfirm(e)}
                    />
                    <ButtonBox>
                        <Button onClickHandler={onRegisterHandler} isDisabled={registerBtn} >회원가입</Button>
                        <Button onClickHandler={() => navigate('/login')}>이전</Button>
                    </ButtonBox>
                </form>
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
    font-family: 'Pretendard-Regular';
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
