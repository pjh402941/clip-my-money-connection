import React, { useCallback, useState, useRef } from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import moment from "moment";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  text-align: center;
  background-color: #f5f0e4;
  -ms-overflow-style: none;
  font-family: "Inter", sans-serif;

  /* 미디어 쿼리 적용 */
  @media (hover: hover) {
    width: 390px;
    margin: 0 auto;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

const BodyWrapper = styled.div`
  flex: 1; /* 남은 공간을 채우도록 설정 */
  overflow: auto; /* 스크롤이 있는 경우 내용을 스크롤합니다. */
`;

const Header = styled.header`
position: relative;
height: 46px;
background: #55877e;
`;

const BackButton = styled.img`
position: relative;
margin-left: -90%;
padding-top: 15px;
`;

const Body = styled.div`
  height: 77%;
  margin: 0 20px;
  margin-top: 19px;
`;

const FormHeader = styled.div`
  border-radius: 6px;
  background: #55877e;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  height: 76px;
  box-sizing: border-box;
  padding: 8px 13px 8px 10px;
`;

const Date = styled.div`
  display: inline-block;
  box-sizing: border-box;
  width: 70%;
  height: 60px;
  background-color: white;
  float: left;
  padding: 21px;
  border-radius: 6px;
  text-align: center;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 700;
`;

const SubmitBox = styled.div`
  display: inline-block;
  box-sizing: border-box;
  float: right;
  width: 20%;
  height: 56px;
  margin-top: 3px;
  background-color: white;
  border-radius: 6px;
  padding: 16px 2%;
  font-family: Inter;
`;
const SubmitIcon = styled.img`
  float: left;
`;

const SubmitButton = styled.button`
  background-color: white;
  float: right;
  border: none;
  color: #214a43;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  padding: 0;
  top: 10px;
  margin-top: 4px;
  font-family: "Inter", sans-serif;
`;

const FormContent = styled.div`
  box-sizing: border-box;
  height: 480px;
  border-radius: 6px;
  background: #b3dbd4;
  padding: 8px 5px;
  margin-top: 15px;
  box-shadow: 2px 0 8px #b8b5ac, -2px 0 8px #b8b5ac;
`;
const Bottom = styled.img`
  width: 100%;
  margin-top: -3px;
  filter: drop-shadow(0px 4px 3px #b8b5ac);
`;

const Title = styled.input`
  border-radius: 6px;
  background: #fff;
  border: none;
  width: 95%;
  height: 39px;
  margin: 0;
  text-align: center;
  font-family: "Inter", sans-serif;
  ::placeholder {
    font-family: "Inter", sans-serif;
    color: #b3dbd4;
  }
  &:focus {
    outline: none;
  }
`;

const Footer = styled.footer`
  background: #55877e;
  height: 80px;
  width: 100%;
  margin-top: 40px;
`;

const ToolBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 100%;
  align-items: center;
  padding: 0 15px;
`;

const Bottombox = styled.div`
  position: center;
  border-radius: 6px;
  background-color: white;
  width: 96%;
  height: 45px;
  margin-top: 7px;
  margin-left: 7px;
  text-align: center;
  font-family: "Inter", sans-serif;
`;

const Totaltext = styled.text`
  display: flex;
  width: 120px;
  height: 40px;
  flex-direction: column;
  justify-content: center;
  color: #214a43;
  text-align: right;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Totalprice = styled.text`
  display: flex;
  width: 120px;
  height: 40px;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  margin-top: -40px;
  margin-left: 200px;
  color: #214a43;
  text-align: left;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const TodoInsert = styled.button`
  background: none;
  outline: none;
  border: none;
  border-radius: 6px;
  background: #868e96;
  color: white;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1.7rem;
  display: center;
  width: 325px;
  height: 45px;
  cursor: pointer;
  margin-top: 5px;
  transition: 0.1s background ease-in;
  &:hover {
    background: #adb5bd;
  }
`;
const Line = styled.img`
  /*line 스타일링*/
`;

const TextIcon = styled.img`
  /* TextIcon 스타일링 */
`;

const ColorIcon = styled.img`
  /* ColorIcon 스타일링 */
`;

const LayoutIcon = styled.img`
  /* LayoutIcon 스타일링 */
`;

const Writeform1 = () => {
  const navigate = useNavigate();

  const onClickBtn = () => {
    navigate(-1); // 바로 이전 페이지로 이동, '/main' 등 직접 지정도 당연히 가능
  };

  const handleSubmitBoxClick = () => {
    navigate("/save");
  };

  // 날짜를 형식에 맞게 포맷하여 가져오는 함수
  const getFormattedDate = () => {
    const today = moment().format("YYYY . MM . DD ddd");
    return today;
  };

  return (
    <Container>
      <BodyWrapper>
        <Header>
          <BackButton
            onClick={onClickBtn}
            src="images/뒤로가기.png"
            alt="back"
            width="16px"
          />
        </Header>
        <Body>
          <form>
            <FormHeader>
              <Date>{getFormattedDate()}</Date>
              <SubmitBox onClick={handleSubmitBoxClick}>
                <SubmitIcon
                  onClick={handleSubmitBoxClick}
                  src="images/저장.png"
                  alt="save"
                  width="24px"
                ></SubmitIcon>
                <SubmitButton onClick={handleSubmitBoxClick} type="submit">
                  저장
                </SubmitButton>
              </SubmitBox>
            </FormHeader>
            <FormContent>
              <Title
                name="title"
                placeholder="제목을 입력하세요"
                maxLength="30"
              />
              <Line src="images/line.png" alt="line"></Line>
              <Bottombox>
                <Totaltext>TOTAL</Totaltext>
                <Totalprice>00 원</Totalprice>
              </Bottombox>
            </FormContent>
          </form>
          <Bottom src="images/Bottom.png"></Bottom>
        </Body>
        <Footer>
          <ToolBox>
            <TextIcon src="images/텍스트.png" alt="text" width="24px" />
            <ColorIcon src="images/색상.png" alt="color" width="24px" />
            <LayoutIcon
              src="images/레이아웃 양식.png"
              alt="layout"
              width="24px"
            />
          </ToolBox>
        </Footer>
      </BodyWrapper>
    </Container>
  );
};

export default Writeform1;
