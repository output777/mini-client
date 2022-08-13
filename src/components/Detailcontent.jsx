import reviewimg from "../assets/imgs/Camping.jpg"
import styled from "styled-components"
import {FaMapMarkerAlt} from 'react-icons/fa'
import Button from "../elements/Button"
const Detailcontent = () => {

    return (
    <div>
        <Mainbox>
            <Reviewimg src={reviewimg} alt="" />
        </Mainbox>
        <Maincontent>
            <Buttonbox>
            <Button size='sm'>수정하기</Button>
            <Button size='sm'>삭제하기</Button>
            </Buttonbox>
            <TilteContent>항해99 지옥캠프</TilteContent>
            <PlaceContent><FaMapMarkerAlt color="#EF4C1E"/>서울시 강남구 어쩌구저쩌구</PlaceContent>
            <p>캠핑장 소개 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima inventore voluptatibus corrupti iusto non! Omnis voluptatum repellat saepe, ab recusandae corrupti ipsa, aspernatur reprehenderit quaerat sunt veritatis accusamus totam vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, velit deleniti debitis autem eveniet quas, fuga ab nihil natus ipsum placeat. Iusto excepturi ipsam quasi quisquam earum, nam possimus exercitationem.</p>
        </Maincontent>
    </div>
    )
}
export default Detailcontent


const Mainbox= styled.div`

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
const PlaceContent =styled.h3`
    margin: 10px 0;
    font-size: 20px;
`

const Buttonbox = styled.div`
    position: absolute;
    right:0;
`
