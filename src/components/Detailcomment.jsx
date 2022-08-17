import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { __getComments } from "../redux/modules/commentSlice";
import Comment from "./Comment";

const Detailcomment = ({ comment, id }) => {
    // console.log(comment)

    return (
        <Reviewbox>
            {/* {comment.map((commen) => (
                commen.commentID === id ?
                    <Comment key={commen.id} commen={commen} id={id} /> : null
            ))} */}
        </Reviewbox>
    )
}

export default Detailcomment

const Reviewbox = styled.div`
    
    
`