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

const BodyWrapper = styled.div`
  height:100%;
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
  height: 77%;
  margin: 0 20px;
  margin-top: 59px;
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
  height: 80%;
  border-radius: 6px;
  background: #b3dbd4;
  padding: 8px 5px;
  margin-top: 10px;
  box-shadow: 2px 0 8px #b8b5ac, -2px 0 8px #b8b5ac;
`;
const Bottom = styled.img`
  width: 100%;
  margin-top: -5px;
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

const Content = styled.textarea`
  width: 95%;
  height: 48vh;
  border: none;
  resize: none;
  border-radius: 6px;
  margin-top: 30px;
  font-family: "Inter", sans-serif;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  &:focus {
    outline: none;
  }
`;

const Footer = styled.footer`
  background: #55877e;
  height: 80px;
  position: sticky;
  width: 100%;
  bottom: 0;
`;

const ToolBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 100%;
  align-items: center;
  padding: 0 15px;
`;

const TextIcon = styled.img`
  /* TextIcon 스타일링 */
`;

const ImageIcon = styled.img`
  /* ImageIcon 스타일링 */
`;

const DrawIcon = styled.img`
  /* DrawIcon 스타일링 */
`;

const ColorIcon = styled.img`
  /* ColorIcon 스타일링 */
`;

const LayoutIcon = styled.img`
  /* LayoutIcon 스타일링 */
`;

const Write = () => {
  return (
    <Container>
      <BodyWrapper>
        <Header>
          <BackButton src="images/뒤로가기.png" alt="back" width="16px" />
        </Header>
        <Body>
          <form>
            <FormHeader>
              <Date>2023 . 05 . 15 MON</Date>
              <SubmitBox>
                <SubmitIcon
                  src="images/저장.png"
                  alt="save"
                  width="24px"
                ></SubmitIcon>
                <SubmitButton type="submit">저장</SubmitButton>
              </SubmitBox>
            </FormHeader>
            <FormContent>
              <Title
                name="title"
                placeholder="제목을 입력하세요"
                maxLength="30"
              />
              <Content name="content" />
              {/* canvas */}
            </FormContent>
          </form>
          <Bottom src="images/Bottom.png"></Bottom>
        </Body>
        <Footer>
          <ToolBox>
            <TextIcon src="images/텍스트.png" alt="text" width="24px" />
            <ImageIcon src="images/이미지0.png" alt="image" width="24px" />
            <DrawIcon src="images/그리기.png" alt="draw" width="24px" />
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

export default Write;
