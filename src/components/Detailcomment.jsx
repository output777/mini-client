import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { __getComments } from "../redux/modules/commentSlice";
import Comment from "./Comment";

const Detailcomment = ({ camps, id }) => {
    const camp = camps.find((camp) => camp.id === Number(id));
    // console.log(camp);
    // console.log(camp && camp.commentList);

    return (
        <Reviewbox>
            {camp && camp.commentList.map((comment) => (
                <Comment key={comment.id} commen={comment} />
            ))}
        </Reviewbox>
    )
}

export default Detailcomment

const Reviewbox = styled.div`
    
    
`