import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  height: 740px;
  margin: 0 auto;
  text-align: center;
  overflow: auto;
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

const Header = styled.header`
  background-color: #55877e;
  height: 46px;
  border-bottom: 1px solid #b3b3b3;
  box-sizing: border-box;
  padding-top: 13px;
`;

const BackButton = styled.img`
  position: absolute;
  left: 13px;
`;

const Body = styled.div`
  height: 100%;
  margin: 0 20px;
  margin-top: 59px;
`;

const Capture = styled.img`
  border: 1.827px solid #55877e;
  border-radius: 3.015px;
  padding: 8px;
`;

const ActionWrapper = styled.div`
  border-radius: 6px;
  background: #b3dbd4;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 295px;
  height: 179px;
  padding: 13px 17px;
  margin: 0 auto;
  margin-top: 32px;
  cursor: pointer; /* Add cursor style to indicate it's clickable */
`;

const SaveBox = styled.div`
  justify-content: center;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  height: 84px;
`;

const SaveIcon = styled.img`
  /* SaveIcon 스타일링 */
`;

const SaveText = styled.p`
  margin-left: 11px;
  font-family: "Inter", sans-serif;
  font-size: 12px;
`;

const ShareBox = styled.div`
  justify-content: center;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  height: 84px;
  margin-top: 11px;
`;

const ShareIcon = styled.img`
  /* ShareIcon 스타일링 */
`;

const ShareText = styled.p`
  margin-left: 11px;
  font-family: "Inter", sans-serif;
  font-size: 12px;
`;

const Save = () => {
  const [popup, setPopup] = useState(false);

  const showPopup = () => {
    setPopup(true);
    setTimeout(() => {
      setPopup(false);
    }, 3000); // Show popup for 3 seconds (3000 milliseconds)
  };

  return (
    <Container>
      <Header>
        <BackButton src="images/뒤로가기.png" alt="back" width="16px" />
      </Header>
      <Body>
        <Capture src="images/캡처.png" width="191px"></Capture>
        <ActionWrapper onClick={showPopup}>
          <SaveBox>
            <SaveIcon src="images/저장.png" alt="save" width="24px" />
            <SaveText>이미지로 저장</SaveText>
          </SaveBox>
          <ShareBox>
            <ShareIcon src="images/공유.png" alt="share" width="24px" />
            <ShareText>공유하기</ShareText>
          </ShareBox>
        </ActionWrapper>
      </Body>
      {/* 팝업을 조건부로 렌더링합니다. */}
      {popup && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "#B3DBD4",
            boxSizing: "border-box",
            padding: "60px ",
            borderRadius: "6px",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            width: "361px",
            height: "203px",
            color: "white",
            fontSize: "16px",
          }}
        >
          <img
            src="images/팝업.png"
            width="48px"
            height="48px"
            style={{ marginBottom: "16px" }}
          />
          이미지로 저장되었습니다!
        </div>
      )}
    </Container>
  );
};

export default Save;
