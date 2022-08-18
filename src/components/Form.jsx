
import React, { useEffect } from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import Button from '../elements/Button';
import Input from '../elements/Input';
import { BsImages } from 'react-icons/bs'
import { useDispatch } from 'react-redux/es/exports';
import { __addCamp } from '../redux/modules/campSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Form = ({ onClickModalHandler }) => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState(true)

  const [imgFile, setImgFile] = useState(null);
  const [imgUrl, setImgUrl] = useState('');
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [review, setReview] = useState('');

  const [camp, setCamp] = useState({
    title: '',
    img: '',
    location: '',
    review: ''
  })




  const onChagneTitleHandler = (e) => {
    const { value } = e.target;
    setTitle(value)
  }


  const formdata = new FormData();
  const onChangeImgHandler = (e) => {
    const { files } = e.target;
    console.log('files', files)

    for (let i = 0; i < files.length; i++) {
      setImgFile(files[i])
      setImgUrl(files[i].name)
    }
  }

  const onChangeLocationHandler = (e) => {
    const { value } = e.target;
    setLocation(value)
  }

  const onChangeReviewHandler = (e) => {
    const { value } = e.target;
    setReview(value)
  }

  const onImageUploadCancleHandler = () => {
    setImgUrl('')
  }

  const onClickAddCampHandler = () => {

    const newCamp = {
      title: title,
      location: location,
      review: review,
    }
    formdata.append("multipartFile", imgFile);
    formdata.append('dto', new Blob([JSON.stringify(newCamp)], { type: "application/json" }))


    dispatch(__addCamp(formdata));
    onClickModalHandler();
  };


  useEffect(() => {
    if (title === ''
      || imgUrl === ''
      || location === ''
      || location === '캠핑 지역을 골라주세요'
      || review === ''
    ) {
      return setIsDisabled(true)
    } else {
      return setIsDisabled(false)
    }
  }, [title, imgUrl, location, review])


  return (
    <StyledFormBox>
      <div className="field py-4 px-6">
        <label className="label is-size-5">제목</label>
        <div className="control">
          <Input className="input" name='title' type="text" placeholder="나만의 캠핑장을 알려주세요" changehandler={(e) => onChagneTitleHandler(e)} />
        </div>
      </div>

      <div className="field py-4 px-6">
        <label className="label is-size-5">이미지</label>
        {imgUrl === ''
          ? <label htmlFor="ex_file" className='is-size-6 p-2' style={{ width: '100%', cursor: 'pointer', display: 'block' }}><BsImages /> 클릭하세요</label>
          : <div>이미지 파일: {imgUrl} <Button type='button' onClickHandler={onImageUploadCancleHandler}>취소</Button></div>}
        <div className="control">
          <Input
            id="ex_file"
            name='img'
            className="input"
            type="file"
            accept="image/jpg, image/png, image/jpeg"
            placeholder="이미지를 넣으려면 클릭하세요"
            changehandler={(e) => onChangeImgHandler(e)}
          />
        </div>
      </div>

      <div className="field py-4 px-6">
        <label className="label is-size-5">위치</label>
        <div className="control">
          <div className="select">
            <select name="location" onChange={(e) => onChangeLocationHandler(e)}>
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

          <textarea className="textarea" name="review" placeholder="메시지를 입력해주세요" onChange={(e) => onChangeReviewHandler(e)} style={{ resize: 'none' }} ></textarea>

        </div>
      </div>


      <div className="field is-grouped py-4 px-6">

        <form className="control" onSubmit={(e) => {
          e.preventDefault();
          onClickAddCampHandler();
        }}>

          <Button type='submit' className="button is-link" isDisabled={isDisabled}>Submit</Button>
        </form>

        <div className="control">
          <Button type='button' className="button is-link is-light" onClickHandler={onClickModalHandler} >Cancel</Button>
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