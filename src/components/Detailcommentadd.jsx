import styled from "styled-components"
import Input from "../elements/Input"
import Button from '../elements/Button'


const Detailcommentadd = () => {
    return (
    <Reviewbox>
        <Reviewh1>의견쓰기</Reviewh1>
        <Inputbox>
            <Input className="input" type="text" placeholder="닉네임(2-7자 이내)" width="150px"/>
            <Input className="input" type="text" placeholder="리뷰(200자 이내)" width="650px" />
            <Button size='sm' >Submit</Button>
        </Inputbox>
    </Reviewbox>

    )
}
export default Detailcommentadd

const Reviewh1 = styled.h1`
    font-size: 20px;
    margin-bottom: 10px;
`
const Inputbox = styled.div`
    display: flex;
    gap : 10px;
    height: 40px;
    justify-content: center;
    
`
const Reviewbox = styled.div`
    padding : 20px;
`