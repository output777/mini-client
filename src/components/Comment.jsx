import Button from "../elements/Button"
import styled from "styled-components"
import { useDispatch } from "react-redux"
import { __deleteComment, __updateComment } from "../redux/modules/commentSlice";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Input from "../elements/Input";
import { __getCamps } from "../redux/modules/campSlice";


const Comment = ({ commen }) => {
    // console.log('commen', commen)
    const dispatch = useDispatch()

    const { id } = useParams()
    const [nickname, setNickname] = useState('')
    const [comment, setComment] = useState('')
    const [isEdit, setIsEdit] = useState(false)
    const [PatchBtn, setPatchBtn] = useState(true)

    const onChangeNickname = (e) => {
        const { value } = e.target;
        setNickname(value)
    }
    const onChangeComment = (e) => {
        const { value } = e.target;
        setComment(value)
    }


    //삭제하기
    const onDeleteCommentHandler = async (e) => {
        if (!isEdit) {
            const result = window.confirm('정말 삭제하시겠습니까?')
            e.stopPropagation();
            if (result) {
                const deletedata = { commentID: commen.id, campingID: id }
                await dispatch(__deleteComment(deletedata));
                await dispatch(__getCamps());
            }
        }
    }

    //수정완료
    const onUpdateCommentHandler = async () => {
        const commentText = {
            // nickname: nickname,
            content: comment,
            campingID: id,
            commentID: commen.id
        }
        await dispatch(__updateComment(commentText));
        await dispatch(__getCamps());
        setIsEdit(!isEdit);
    }

    //수정하기 , 취소하기
    const onUpdateCommentToggleHandler = () => {
        setIsEdit(!isEdit)
        setNickname(commen.nickname)
        setComment(commen.comment)

    }

    useEffect(() => {
        if (comment === '') {
            setPatchBtn(true);
        } else {
            setPatchBtn(false);
        }
    }, [nickname, comment])




    return (
        <div>
            <div className="box mb-3">
                <article className="media">
                    <div className="media-content">
                        <Contentbox>
                            {isEdit ?
                                <>
                                    <Textbox>
                                        {/* <Input className="input" type='text' placeholder='닉네임' width='150px' value={nickname} changehandler={onChangeNickname}></Input> */}
                                        <Input className="input" type='text' placeholder='댓글' width='700px' value={comment || ''} changehandler={onChangeComment}></Input>
                                    </Textbox>
                                    <Buttonbox>
                                        <Button size='sm' isDisabled={PatchBtn} onClickHandler={onUpdateCommentHandler}>완료</Button>
                                        <Button size='sm' onClickHandler={onUpdateCommentToggleHandler}>취소</Button>
                                    </Buttonbox>
                                </> :
                                <>
                                    <Textbox>
                                        <strong>{commen.memberName}</strong>
                                        <br />
                                        {commen.content}
                                    </Textbox>
                                    <Buttonbox>
                                        <Button size='sm' onClickHandler={onUpdateCommentToggleHandler}>수정</Button>
                                        <Button size='sm' onClickHandler={onDeleteCommentHandler}>삭제</Button>
                                    </Buttonbox>
                                </>}
                        </Contentbox>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default Comment

const Contentbox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Pretendard-Regular';
`

const Textbox = styled.div`
    word-break:break-all;
`

const Buttonbox = styled.div`
    display: flex;
    height: 30px;
    
`