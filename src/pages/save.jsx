import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  height: 100%;
  margin: 0 auto;
  text-align: center;
  overflow: auto;
  -ms-overflow-style: none;

  /* 미디어 쿼리 적용 */
  @media (hover: hover) {
    width: 375px;
    margin: 0 auto;
  }
`;

const Header = styled.header`
  /* Header 스타일링 */
`;

const BackButton = styled.img`
  /* BackButton 스타일링 */
`;

const Body = styled.div`
  /* Body 스타일링 */
`;

const Capture = styled.div`
  /* Capture 스타일링 */
`;

const ActionWrapper = styled.div`
  /* ActionWrapper 스타일링 */
`;

const SaveBox = styled.div`
  /* SaveBox 스타일링 */
`;

const SaveIcon = styled.img`
  /* SaveIcon 스타일링 */
`;

const SaveText = styled.p`
  /* SaveText 스타일링 */
`;

const ShareBox = styled.div`
  /* ShareBox 스타일링 */
`;

const ShareIcon = styled.img`
  /* ShareIcon 스타일링 */
`;

const ShareText = styled.p`
  /* ShareText 스타일링 */
`;

const Save = () => {
  return (
    <Container>
      <Header>
        <BackButton src="images/뒤로가기.png" alt="back" width="16px" />
      </Header>
      <Body>
        <Capture></Capture>
        <ActionWrapper>
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
    </Container>
  );
};

export default Save;
