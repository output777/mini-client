import Layout from "../components/Layout"
import Detailcontent from "../components/Detailcontent"
import styled from "styled-components"
import Detailcomment from "../components/Detailcomment"
import Detailcommentadd from "../components/Detailcommentadd"
import Header from "../components/Header"

const DetailPage = () => {
    return (
    <div>
        <StyledLandingPage>
            <Layout>
            <Header></Header>
                <DetailLayout>
                    <Detailcontent></Detailcontent>
                    <Detailcommentadd></Detailcommentadd>
                    <Detailcomment></Detailcomment>
                </DetailLayout>
            </Layout>
        </StyledLandingPage>
    </div>
)
}

export default DetailPage

const StyledLandingPage = styled.div`
  width:100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(19,41,55,1) 30%, rgba(27,62,82,1) 77%);
`
const DetailLayout = styled.div`
    width : 1000px;
    background-color: white;
    padding: 40px;
    margin: auto;
    border-radius: 20px;
`