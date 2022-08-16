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
        setIsEdit(!isEdit)
        dispatch(__updateCamp({id:camp.id , title:camp.title , location:camp.location , review:camp.review}));
        
    }


    return (

    <div>
        <Mainbox>
            <Reviewimg src={reviewimg} alt="" />
        </Mainbox>
        <Maincontent>
            <Buttonbox>
            <Button size='sm' onClickHandler={onClickUpdateCampHandler}>{isEdit?'수정완료' : '수정하기'}</Button>
            <Button size='sm' onClickHandler={onClickDeleteCampHandler}>{isEdit?'수정취소' : '삭제하기'}</Button>
            </Buttonbox>

            {isEdit ? (
            <>
            <TilteContent><Input className="input" type='text' placeholder='제목' width='250px'></Input></TilteContent>
            <PlaceContent><Input className="input" type='text' placeholder='지역' width='250px'></Input></PlaceContent>
            <p><Input className="input" type='text' placeholder='리뷰' width='5000px'></Input></p>
            </>)
            : (
            <>
            <TilteContent>{camp.title}</TilteContent>
            <PlaceContent><FaMapMarkerAlt color="#EF4C1E"/>{camp.location}</PlaceContent>
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
