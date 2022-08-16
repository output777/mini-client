import reviewimg from "../assets/imgs/Camping.jpg"
import styled from "styled-components"
import { FaMapMarkerAlt } from 'react-icons/fa'
import Button from "../elements/Button"
import { useDispatch } from "react-redux"
import { __deleteCamp, __getCamps } from "../redux/modules/campSlice"
import { useNavigate, useParams } from "react-router-dom"


const Detailcontent = ({ camps }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { id } = useParams();


    const onClickDeleteCampHandler = () => {
        dispatch(__deleteCamp(id));
        navigate('/')
    }

    return (
        <div>
            <Mainbox>
                <Reviewimg src={reviewimg} alt="" />
            </Mainbox>
            <Maincontent>
                <Buttonbox>
                    <Button size='sm'>수정하기</Button>
                    <Button size='sm' onClickHandler={onClickDeleteCampHandler}>삭제하기</Button>
                </Buttonbox>
                <TilteContent>{camps.title}</TilteContent>
                <PlaceContent><FaMapMarkerAlt color="#EF4C1E" />{camps.location}</PlaceContent>
                <p>{camps.review}</p>
            </Maincontent>
        </div>
    )
}
export default Detailcontent


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
