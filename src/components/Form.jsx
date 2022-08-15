import { useState } from 'react';
import styled from 'styled-components';
import Button from '../elements/Button';
import Input from '../elements/Input';
import { BsImages } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import { __getCamps, __postCamps } from '../redux/modules/campSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Form = ({ onClickModalHandler }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  // const camps = useSelector(state => state.camps)
  const [imgUrl, setImageUrl] = useState('')
  const [title, setTitle] = useState('')
  const [location , setLocation] = useState('')
  const [review , setReview] = useState('')
  const number = 5

  console.log(title,imgUrl,location,review)

  useEffect(()=>{
    dispatch(__getCamps())
  },[dispatch])

  const onImageUploadCancleHandler = () => {
    setImageUrl('');
  }

  const onClickaddCamp = () =>{
    dispatch(__postCamps({ title:title,img:imgUrl,location:location,review:review}));
    onClickModalHandler()
  }

  return (
    <StyledFormBox>
      <div className="field py-4 px-6">
        <label className="label is-size-5">제목</label>
        <div className="control">
          <Input className="input" type="text" value={title} changehandler={(e)=>setTitle(e.target.value)} placeholder="나만의 캠핑장을 알려주세요" />
        </div>
      </div>


      <div className="field py-4 px-6">
        <label className="label is-size-5">이미지</label>
        {imgUrl === ''
          ? <label htmlFor="ex_file" className='is-size-6 p-2' style={{ width: '100%', cursor: 'pointer', display: 'block' }}><BsImages /> 클릭하세요</label>
          : <div>이미지 파일: {imgUrl} <Button onClickModalHandler={onImageUploadCancleHandler}>취소</Button></div>}
        <div className="control">
          <Input
            id="ex_file"
            className="input"
            type="file"
            accept="image/jpg, image/png, image/jpeg"
            placeholder="이미지를 넣으려면 클릭하세요"
            changehandler={(e) => setImageUrl(e.target.value)}
          />
        </div>
      </div>

      <div className="field py-4 px-6">
        <label className="label is-size-5">위치</label>
        <div className="control">
          <div className="select">
            <select value={location} onChange={(e)=>setLocation(e.target.value)}>
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
        </div>
      </div>

      <div className="field py-4 px-6">
        <label className="label is-size-5">나만의 캠프 리뷰 메시지</label>
        <div className="control">
          <textarea className="textarea" placeholder="메시지를 입력해주세요" value={review} onChange={(e)=>setReview(e.target.value)}></textarea>
        </div>
      </div>


      <div className="field is-grouped py-4 px-6">
        <div className="control">
          <Button className="button is-link" onClickModalHandler={()=>onClickaddCamp()}>Submit</Button>
        </div>
        <div className="control">
          <Button className="button is-link is-light" onClickModalHandler={onClickModalHandler}>Cancel</Button>
        </div>
      </div>
    </StyledFormBox >
  )
}

export default Form;

const StyledFormBox = styled.div`
  width: 100%;
  max-width: 768px;
  min-width: 500px;
  padding: 2rem;
  border-radius: 20px;
  background-color: #fff;
  input[type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

`