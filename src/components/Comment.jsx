import Button from "../elements/Button"
import styled from "styled-components"

const comment = () => {
    return (
        <div>
            <div className="box mb-3">
                <article className="media">
                    <div className="media-content">
                        <Contentbox>
                            <p>
                                <strong>John Smith</strong>
                                <br />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                            </p>
                            <Buttonbox>
                                <Button size='sm'>수정</Button>
                                <Button size='sm'>삭제</Button>
                            </Buttonbox>
                        </Contentbox>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default comment

const Contentbox = styled.div`
    display: flex;
    align-items: center;
`

const Buttonbox = styled.div`
    width:20%;
    display: flex;
    height: 30px;
    
`