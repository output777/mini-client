import Layout from "./Layout"
import Detailcontent from './Detailcontent'
import styled from "styled-components"
import Detailcomment from "./Detailcomment"
import Detailcommentadd from "./Detailcommentadd"
import Header from "./Header"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { __getCamps } from "../redux/modules/campSlice"
import { __addComment } from "../redux/modules/commentSlice"
import { useParams } from "react-router-dom"

const Detailcontainer = () => {
    const dispatch = useDispatch()
    const { id } = useParams();
    const { camps, user } = useSelector((state) => state.camps);

    useEffect(() => {
        dispatch(__getCamps());
    }, [dispatch])

    return (
        <div>
            <StyledLandingPage className="pb-6">
                <Layout>
                    <Header user={user}></Header>
                    <DetailLayout>
                        <Detailcontent camps={camps} id={id}></Detailcontent>
                        <Detailcommentadd camps={camps} id={id}></Detailcommentadd>
                        <Detailcomment camps={camps} id={id}></Detailcomment>
                    </DetailLayout>
                </Layout>
            </StyledLandingPage>
        </div>
    )
}

export default Detailcontainer

const StyledLandingPage = styled.div`
  width:100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(19,41,55,1) 30%, rgba(27,62,82,1) 77%);
`
const DetailLayout = styled.div`
    width : 1000px;
    background-color: white;
    padding: 30px;
    margin: auto;
    border-radius: 20px;
`