import { useEffect } from "react";
import { useDispatch , useSelector} from "react-redux";
import styled from "styled-components";
import { __getCamps } from "../redux/modules/campSlice";
import { __getComments } from "../redux/modules/commentSlice";
import Comment from "./Comment";


const Detailcomment = ({id }) => {
    const dispatch = useDispatch();
    const {camps} = useSelector((state)=>state.camps)
    // console.log('camps', camps)
    const camp = camps.find((camp) => camp.id === Number(id));
    // console.log('camp',camp);
    // console.log(camp.commentList);


    useEffect(() => {
        dispatch(__getCamps());
    }, [dispatch])

    if(camp !== undefined){
        if(camp.commentList !== null){
            return (
                <Reviewbox>
                    {camp.commentList.map((comment) => (
                        <Comment key={comment.id} commen={comment} />
                    ))}
                </Reviewbox>
            )
        }
    }
    
}

export default Detailcomment

const Reviewbox = styled.div`
    
    
`