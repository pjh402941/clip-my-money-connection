import React from "react";
import styled from "styled-components";

const Container = styled.div`
  /* Container 스타일링 */
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
  margin: 0;
  font-family: "YOUR_FONT_FAMILY";
`;

const Capture = styled.div`
  /* Capture 스타일링 */
`;

const ActionWrapper = styled.div`
  /* ActionWrapper 스타일링 */
`;

const ShareButton = styled.button`
  /* ShareButton 스타일링 */
`;

const ShareBox = styled.div`
  /* ShareBox 스타일링 */
`;

const SocialIcon = styled.img`
  /* SocialIcon 스타일링 */
  width: 24px;
`;

const FaceBook = styled(SocialIcon)`
  /* FaceBook 스타일링 */
`;

const Insta = styled(SocialIcon)`
  /* Insta 스타일링 */
`;

const Message = styled(SocialIcon)`
  /* Message 스타일링 */
`;

const Plus = styled(SocialIcon)`
  /* Plus 스타일링 */
`;

const LinkBox = styled.div`
  /* LinkBox 스타일링 */
`;

const Link = styled.input`
  /* Link 스타일링 */
`;

const CopyIcon = styled(SocialIcon)`
  /* CopyIcon 스타일링 */
`;

const Share = () => {
  return (
    <Container>
      <Header>
        <BackButton src="images/뒤로가기.png" alt="back" width="16px" />
      </Header>
      <Body>
        <Capture></Capture>
        <ActionWrapper>
          <ShareButton>공유</ShareButton>
          <ShareBox>
            <FaceBook src="images/페이스북.png" alt="facebook" width="24px" />
            <Insta src="images/인스타.png" alt="insta" width="24px" />
            <Message src="images/문자.png" alt="message" width="24px" />
            <Plus src="images/더보기.png" alt="plus" width="24px" />
          </ShareBox>
          <LinkBox>
            <Link></Link>
            <CopyIcon src="images/복사.png" alt="copy" width="24px"></CopyIcon>
          </LinkBox>
        </ActionWrapper>
      </Body>
    </Container>
  );
};

export default Share;
