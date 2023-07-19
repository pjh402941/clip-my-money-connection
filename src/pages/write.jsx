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
  margin: 0;
  font-family: "YOUR_FONT_FAMILY";
`;

const FormHeader = styled.div`
  /* FormHeader 스타일링 */
`;

const Date = styled.div`
  /* Date 스타일링 */
`;

const SubmitBox = styled.div`
  /* SubmitBox 스타일링 */
`;

const SubmitButton = styled.button`
  /* SubmitButton 스타일링 */
`;

const FormContentWrapper = styled.div`
  /* FormContentWrapper 스타일링 */
`;

const FormContent = styled.div`
  /* FormContent 스타일링 */
`;

const Title = styled.input`
  /* Title 스타일링 */
`;

const Content = styled.textarea`
  /* Content 스타일링 */
`;

const Footer = styled.footer`
  /* Footer 스타일링 */
`;

const ToolBox = styled.div`
  /* ToolBox 스타일링 */
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
      <Header className="header">
        <BackButton
          id="back-button"
          src="images/뒤로가기.png"
          alt="back"
          width="16px"
        />
      </Header>
      <Body className="body">
        <form>
          <FormHeader className="form-header">
            <Date id="date"></Date>
            <SubmitBox className="submit-box">
              <SubmitButton id="submit-button" type="submit">
                저장
              </SubmitButton>
            </SubmitBox>
          </FormHeader>
          <FormContentWrapper className="form-content-wrapper">
            <FormContent className="form-content">
              <Title id="title" name="title" />
              <Content id="content" name="content" />
              {/* canvas */}
            </FormContent>
          </FormContentWrapper>
        </form>
      </Body>
      <Footer>
        <ToolBox className="tool-box">
          <TextIcon id="text" src="images/텍스트.png" alt="text" width="24px" />
          <ImageIcon
            id="image"
            src="images/이미지0.png"
            alt="image"
            width="24px"
          />
          <DrawIcon id="draw" src="images/그리기.png" alt="draw" width="24px" />
          <ColorIcon
            id="color"
            src="images/색상.png"
            alt="color"
            width="24px"
          />
          <LayoutIcon
            id="layout"
            src="images/레이아웃 양식.png"
            alt="layout"
            width="24px"
          />
        </ToolBox>
      </Footer>
    </Container>
  );
};

export default Write;
