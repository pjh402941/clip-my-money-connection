import React, { useCallback, useState, useRef } from "react";
import styled from "styled-components";
import TodoTemplate from "./TodoTemplate";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";
import { useNavigate } from "react-router-dom";

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
  position: sticky;
  width: 100%;
  margin-top: 25px;
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
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "아이스 아메리카노 3700원",
      checked: true,
    },
    {
      id: 2,
      text: "키보드 85000원",
      checked: true,
    },
    {
      id: 3,
      text: "우산 5000원",
      checked: false,
    },
  ]);

  const nextId = useRef(4);

  const navigate = useNavigate();
  const navigateTowrite = () => {
    navigate("/write");
  };

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  );

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
              <TodoTemplate>
                <TodoList
                  todos={todos}
                  onRemove={onRemove}
                  onToggle={onToggle}
                />
              </TodoTemplate>
              <TodoInsert onClick={navigateTowrite} />
              <Bottombox>
                <Totaltext>TOTAL</Totaltext>
                <Totalprice>93700 원</Totalprice>
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
