import styled from "styled-components"
import Input from "../elements/Input"
import Button from '../elements/Button'
import { useDispatch } from "react-redux"
import { __addComment, __getComments } from "../redux/modules/commentSlice"
import { useEffect, useState } from "react"


const Detailcommentadd = ({ id }) => {
    const dispatch = useDispatch()

    const [nickname, setNickname] = useState('')
    const [comment, setComment] = useState('')

    const onChangenickname = (e) => {
        const { value } = e.target;
        setNickname(value)
    }
    const onChangecomment = (e) => {
        const { value } = e.target;
        setComment(value)
    }


    const onClickAddCommentHandler = () => {
        if (nickname.trim() === '' || comment.trim() === '') {
            window.alert('내용을 입력해주세요')
        } else {
            dispatch(__addComment({ nickname: nickname, comment: comment, commentID: id }))
            setNickname('');
            setComment('');
        }
    }

    return (
        <Reviewbox>
            <Reviewh1>의견쓰기</Reviewh1>
            <Inputbox>
                {/* <Input className="input" type="text" placeholder="닉네임(2-7자 이내)" width="150px" value={nickname} changehandler={onChangenickname} minLength="2" maxLength="7"/> */}
                <Input className="input" type="text" placeholder="리뷰(200자 이내)" width="833px" value={comment} changehandler={onChangecomment} maxLength="200" />
                <Button size='sm' onClickHandler={onClickAddCommentHandler}>Submit</Button>
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
    /* justify-content: center; */
    
`
const Reviewbox = styled.div`
    padding : 20px;
`