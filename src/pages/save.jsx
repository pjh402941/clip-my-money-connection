import React from "react";
import styled from "styled-components";

const Save = () => {
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

export default Save;
