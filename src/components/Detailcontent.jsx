import reviewimg from "../assets/imgs/Camping.jpg"
import styled from "styled-components"
import { FaMapMarkerAlt } from 'react-icons/fa'
import Button from "../elements/Button"
import { useDispatch } from "react-redux"
import { __deleteCamp, __getCamps, __updateCamp } from "../redux/modules/campSlice"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Input from "../elements/Input"


const Detailcontent = ({ camps }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const [isEdit, setIsEdit] = useState(false)
    const [EditTitle, setEditTitle] = useState('')
    const [EditLocation, setEditLocation] = useState('')
    const [EditReview, setEditReview] = useState('')
    const camp = camps.find((camp) => camp.id === Number(id));
    const [PatchBtn, setPatchBtn] = useState(true)
    console.log('camp', camp);

    const onChangeTitleHandler = (e) => {
        const { value } = e.target;
        setEditTitle(value)
    }
    const onChangeLocationHandler = (e) => {
        const { value } = e.target;
        setEditLocation(value)
    }
    const onChangeReviewHandler = (e) => {
        const { value } = e.target;
        setEditReview(value)
    }



    const onClickDeleteCampHandler = (e) => {
        if (!isEdit) {
            const result = window.confirm('정말 삭제하시겠습니까?')
            e.stopPropagation();
            if (result) {
                dispatch(__deleteCamp(id));
                navigate('/')
            }
        } else {
            return setIsEdit(!isEdit)
        }
    }

    const onClickUpdateCampHandler = () => {
        setIsEdit((prev) => !prev);
        setPatchBtn(true);
        setEditTitle(camp.title);
        setEditLocation(camp.location);
        setEditReview(camp.review)
    }

    //수정완료
    const onClickUpdateHandler = () => {
        setIsEdit(!isEdit)
        const editCamp = {
            ...camp,
            id: Number(id),
            title: EditTitle,
            location: EditLocation,
            review: EditReview
        }
        dispatch(__updateCamp(editCamp));

    }

    useEffect(() => {
        if (EditTitle.trim() === '' || EditReview.trim() === '' || (EditLocation === '불가' || EditLocation === '')) {
            setPatchBtn(true);
        } else {
            setPatchBtn(false);
        }
    }, [EditTitle, EditReview, EditLocation])



    return (


        <div>
            <Mainbox>
                <Reviewimg src={camp && camp.imgUrl} alt="" />
            </Mainbox>
            <Maincontent>
                {isEdit ? (
                    <>
                        <Buttonbox>
                            <Button size='sm' onClickHandler={onClickUpdateHandler} isDisabled={PatchBtn}>수정완료</Button>
                            <Button size='sm' onClickHandler={onClickDeleteCampHandler}>수정취소</Button>
                        </Buttonbox>
                        <TilteContent><Input className="input" type='text' placeholder='제목' width='250px' value={EditTitle} changehandler={onChangeTitleHandler}></Input></TilteContent>
                        <PlaceContent>
                            <div className="select">
                                <select value={EditLocation} onChange={(e) => onChangeLocationHandler(e)} style={{ fontSize: '15px' }}>
                                    <option value='불가'>캠핑 지역을 골라주세요</option>
                                    <option>서울</option>
                                    <option>경기도</option>
                                    <option>강원도</option>
                                    <option>충청도</option>
                                    <option>경상도</option>
                                    <option>전라도</option>
                                    <option>제주도</option>
                                </select>
                            </div>
                        </PlaceContent>
                        <textarea resize='none'
                            className="input" type='text' placeholder='리뷰' value={EditReview} onChange={onChangeReviewHandler}></textarea>
                    </>)
                    : (
                        <>
                            <Buttonbox>
                                <Button size='sm' onClickHandler={onClickUpdateCampHandler}>수정하기</Button>
                                <Button size='sm' onClickHandler={onClickDeleteCampHandler}>삭제하기</Button>
                            </Buttonbox>
                            <TilteContent>{camp && camp.title}</TilteContent>
                            <PlaceContent><FaMapMarkerAlt color="#EF4C1E" />{camp && camp.location}</PlaceContent>
                            <p>{camp && camp.review}</p>
                        </>)
                }
            </Maincontent>
        </div>
    )
}
export default Detailcontent


const PrevBtn = styled.h4`
    font-size:20px;
    cursor: pointer;
    margin-left: 92%;
`

const Mainbox = styled.div`

`
const Reviewimg = styled.img`
    background-size: contain;
    background-position: center;
    width:800px;
    height: 500px;
    border-radius: 20px;
    
`
const Maincontent = styled.div`
    padding : 10px;
    position: relative;

`
const TilteContent = styled.h2`
    font-size: 30px;
    font-weight: bold;
    margin: 10px 0;
`
const PlaceContent = styled.h3`
    margin: 10px 0;
    font-size: 20px;
`

const Buttonbox = styled.div`
    position: absolute;
    right:0;
`
