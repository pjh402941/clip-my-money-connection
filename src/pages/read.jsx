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

const UpdateBox = styled.div`
  /* SubmitBox 스타일링 */
`;

const UpdateButton = styled.button`
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

const Read = () => {
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
            <UpdateBox className="update-box">
              <UpdateButton id="update-button" type="submit">
                수정하기
              </UpdateButton>
            </UpdateBox>
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
    </Container>
  );
};

export default Read;
