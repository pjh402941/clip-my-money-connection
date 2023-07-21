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

  /* 미디어 쿼리 적용 */
  @media (hover: hover) {
    width: 390px;
    margin: 0 auto;
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
  width: 230px;
  height: 60px;
  background-color: white;
  float: left;
  padding: 21px;
  border-radius: 6px;
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;
`;

const UpdateBox = styled.div`
  display: inline-block;
  box-sizing: border-box;
  float: right;
  width: 71px;
  height: 56px;
  background-color: white;
  border-radius: 6px;
  padding: 16px 10px;
`;

const UpdateButton = styled.button`
  background-color: white;
  float: right;
  border: none;
  color: #214a43;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  padding: 0;
  top: 10px;
  margin-top: 4px;
`;

const FormContentWrapper = styled.div`
  /* FormContentWrapper 스타일링 */
`;

const FormContent = styled.div`
  box-sizing: border-box;
  height: 483px;
  border-radius: 6px;
  background: #b3dbd4;
  padding: 8px 5px;
  margin-top: 10px;
`;

const Title = styled.input`
  border-radius: 6px;
  background: #fff;
  border: none;
  width: 100%;
  height: 39px;
  margin: 0;
  text-align: center;
`;

const Content = styled.textarea`
  width: 100%;
  height: 50vh;
  border: none;
  resize: none;
  border-radius: 6px;
  margin-top: 30px;
`;

const Read = () => {
  return (
    <Container>
      <Header>
        <BackButton src="images/뒤로가기.png" alt="back" width="16px" />
      </Header>
      <Body>
        <form>
          <FormHeader>
            <Date></Date>
            <UpdateBox>
              <UpdateButton type="submit">수정하기</UpdateButton>
            </UpdateBox>
          </FormHeader>
          <FormContentWrapper>
            <FormContent>
              <Title name="title" />
              <Content name="content" />
              {/* canvas */}
            </FormContent>
          </FormContentWrapper>
        </form>
      </Body>
    </Container>
  );
};

export default Read;
