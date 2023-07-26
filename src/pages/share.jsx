import React from "react";
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
  padding: 27px 25px;
  margin: 0 auto;
  margin-top: 32px;
`;

const ShareButton = styled.button`
  border-radius: 6px;
  border: none;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 143px;
  height: 27px;
`;

const ShareBox = styled.div`
  border-radius: 6px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin-top: 18px;
  width: 300px;
  height: 64px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  box-sizing: border-box;
  padding: 0 9.5px;
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

const LinkWrapper = styled.div`
  border-radius: 6px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin-top: 18px;
  width: 300px;
  height: 47px;
  padding: 6px 5px;
  box-sizing: border-box;
`;

const LinkBox = styled.div`
  border-radius: 6px;
  background: #55877e;
  width: 260px;
  height: 35px;
  float: left;
  position: relative;
`;

const Link = styled.input`
  border: none;
  background: #55877e;
  color: white;
  position: absolute;
  left: 8px;
  top: 8px;
  height: 15px;
  width: 242px;
  &:focus {
    outline: none;
  }
`;

const CopyIcon = styled(SocialIcon)`
  margin-top: 4px;
  margin-left: 6px;
`;

const Share = () => {
  return (
    <Container>
      <Header>
        <BackButton src="images/뒤로가기.png" alt="back" width="16px" />
      </Header>
      <Body>
        <Capture src="images/캡처.png" width="191px"></Capture>
        <ActionWrapper>
          <ShareButton>공유</ShareButton>
          <ShareBox>
            <FaceBook src="images/페이스북.png" alt="facebook" width="24px" />
            <Insta src="images/인스타.png" alt="insta" width="24px" />
            <Message src="images/문자.png" alt="message" width="24px" />
            <Plus src="images/더보기.png" alt="plus" width="24px" />
          </ShareBox>
          <LinkWrapper>
            <LinkBox>
              <Link readOnly></Link>
            </LinkBox>
            <CopyIcon src="images/복사.png" alt="copy" width="24px"></CopyIcon>
          </LinkWrapper>
        </ActionWrapper>
      </Body>
    </Container>
  );
};

export default Share;
