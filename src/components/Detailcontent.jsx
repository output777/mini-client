import reviewimg from "../assets/imgs/Camping.jpg"
import styled from "styled-components"
import { FaMapMarkerAlt } from 'react-icons/fa'
import Button from "../elements/Button"
import { useDispatch } from "react-redux"
import { __deleteCamp, __getCamps, __updateCamp } from "../redux/modules/campSlice"
import { useNavigate, useParams } from "react-router-dom"
import { useState } from "react"
import Input from "../elements/Input"


const Detailcontent = ({ camps }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();
    const camp = camps.find((camp)=>camp.id)
    const [isEdit,setIsEdit] = useState(false)
    const [EditTitle , setEditTitle] = useState('')
    const [EditLocation , setEditLocation] = useState('')
    const [EditReview , setEditReview] = useState('')

    const onChangeTitleHandler = (e) =>{
        const {value} = e.target;
        setEditTitle(value)
    }
    console.log(EditLocation)
    const onChangeLocationHandler = (e) =>{
        const {value} = e.target;
        setEditLocation(value)
    }
    const onChangeReviewHandler = (e) =>{
        const {value} = e.target;
        setEditReview(value)
    }
    
    const onClickDeleteCampHandler = (e) => {
        if(!isEdit){
        e.stopPropagation();
        const result = window.confirm('정말 삭제하시겠습니까?')
        if (result){
           dispatch(__deleteCamp(id));
           navigate('/')
        }else{
            return
        }
    } else {
        return setIsEdit(!isEdit)
    }
    }
    const onClickUpdateCampHandler = () =>{
        setIsEdit(true)
    }

    const onClickUpdateHandler = () => {
        setIsEdit(false)
        dispatch(__updateCamp({id:camp.id , title:camp.title , location:camp.location , review:camp.review}));
    }
    return (

    <div>
        <Mainbox>
            <Reviewimg src={reviewimg} alt="" />
        </Mainbox>
        <Maincontent>
            

            {isEdit ? (
            <>
            <Buttonbox>
            <Button size='sm' onClickHandler={onClickUpdateHandler}>수정완료</Button>
            <Button size='sm' onClickHandler={onClickDeleteCampHandler}>수정취소</Button>
            </Buttonbox>
            <TilteContent><Input className="input" type='text' placeholder='제목' width='250px' value={EditTitle} changehandler={onChangeTitleHandler}></Input></TilteContent>
            <PlaceContent>
                <div className="select">
                <select value={EditLocation} onChange={(e) => onChangeLocationHandler(e)} style={{fontSize : '15px'}}>
                 <option>캠핑 지역을 골라주세요</option>
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
            <p><Input className="input" type='text' placeholder='리뷰' width='800px' value={EditReview} changehandler={onChangeReviewHandler}></Input></p>
            </>)
            : (
            <>
            <Buttonbox>
            <Button size='sm' onClickHandler={onClickUpdateCampHandler}>수정하기</Button>
            <Button size='sm' onClickHandler={onClickDeleteCampHandler}>삭제하기</Button>
            </Buttonbox>
            <TilteContent>{camp.title}{EditTitle}</TilteContent>
            <PlaceContent><FaMapMarkerAlt color="#EF4C1E"/>{camp.location}{EditLocation}</PlaceContent>
            <p>{camp.review}</p>
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
    background-size: cover;
    background-position: center;
    width:100%;
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
