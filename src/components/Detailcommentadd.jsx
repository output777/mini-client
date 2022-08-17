import styled from "styled-components"
import Input from "../elements/Input"
import Button from '../elements/Button'
import { useDispatch } from "react-redux"
import { __getCamps } from "../redux/modules/campSlice"
import { __addComment, __getComments } from "../redux/modules/commentSlice"
import { useEffect, useState } from "react"


const Detailcommentadd = ({ camps, id }) => {
    const dispatch = useDispatch()
    const regex = /^[0-9]+$/;
    const camp = camps.find((camp) => camp.id === Number(id));
    // console.log('camp', camp)

    const [nickname, setNickname] = useState('')
    const [comment, setComment] = useState('')

    const onChangenickname = (e) => {
        const { value } = e.target;
        setNickname(value)
    }
    const onChangecomment = (e) => {
        const { value } = e.target;
        setComment(value.toString())
    }


    const onClickAddCommentHandler = async () => {
        if (comment.trim() === '') {
            window.alert('내용을 입력해주세요')
        }
        else if (regex.test(comment) === true) {
            comment.toString()
            // window.alert('숫자만 입력하시면 안됩니다');
            // setComment('');
            await dispatch(__addComment({ nickname: camp.nickname, comment: comment, commentID: Number(id) }))
        }
        else {
            await dispatch(__addComment({ nickname: camp.nickname, comment: comment, commentID: Number(id) }))
            await dispatch(__getCamps());
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