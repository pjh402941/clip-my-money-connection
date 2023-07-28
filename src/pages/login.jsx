import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Background = styled.div`
  position: relative;
  height: 844px;
  margin: 0 auto;
  text-align: center;
  background: #f5f0e4;
`;

const Top = styled.div`
  position: relative;
  height: 46px;
  background: #55877e;
`;

const Back = styled.div`
  position: relative;
  margin-left: -90%;
  padding-top: 15px;
`;

const TitleBox = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 80px;
  background: #55877e;
  width: 110px;
  height: 44px;
  background: #55877e;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
`;

const Title = styled.div`
  position: relative;
  padding-top: 10px;
  margin-left: 3px;
  color: #ffffff;
  width: 80px;
  height: 24px;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
`;

const Person = styled.div`
  position: relative;
  margin-left: 65px;
  margin-top: -23.5px;
`;

const LoginInput = styled.form`
  position: relative;
  margin: auto;
  margin-top: 80px;
  width: 328px;
  height: 190px;
  background: #b3dbd4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
`;

const IdPwInput = styled.input`
  position: relative;
  margin: auto;
  align-items: center;
  width: 300px;
  height: 68px;
  background: #ffffff;
  border-radius: 6px;
  border: none;
  margin-top: 10px;

  &::placeholder {
    color: #b3dbd4;
    padding-left: 10px;
  }
`;

const PwAgain = styled.div`
  position: relative;
  margin-left: 220px;
  margin-top: 8px;
  width: 80px;
  height: 12px;
  font-size: 10px;
  color: #55877e;
`;

const LoginBox = styled.button`
  position: relative;
  margin: auto;
  margin-top: 50px;
  width: 300px;
  height: 60px;
  background: #55877e;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  border: none;
  font-size: 12px;
  color: #ffffff;
`;

const Join = styled.div`
  position: relative;
  margin: auto;
  margin-top: 20px;
  background: #b3dbd4;
  width: 185px;
  height: 15px;
  font-size: 12px;
  color: #ffffff;
`;

const Login = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/SignUp`);
  };

  const onClickBtn = () => {
    navigate(-1); // 바로 이전 페이지로 이동, '/main' 등 직접 지정도 당연히 가능
  };

  const [loginId, setLoginId] = useState("");
  const [loginPw, setLoginPw] = useState("");
  const [loginButtonDisabled, setLoginButtonDisabled] = useState(true);

  const handleLoginIdChange = (e) => {
    const value = e.target.value;
    setLoginId(value);
    updateLoginButtonState(value, loginPw);
  };

  const handleLoginPwChange = (e) => {
    const value = e.target.value;
    setLoginPw(value);
    updateLoginButtonState(loginId, value);
  };

  const updateLoginButtonState = (id, pw) => {
    setLoginButtonDisabled(id.length === 0 || pw.length === 0);
  };

  const handleLogin = () => {
    //승연 언니 페이지랑 연결
    navigate(`/NoSign`);
  };

  return (
    <Background>
      <Top>
        <Back onClick={onClickBtn}>
          <img
            src={`${process.env.PUBLIC_URL}/images/back.png`}
            alt="back"
            width="18px"
          />
        </Back>
      </Top>
      <TitleBox>
        <Title>로그인</Title>
        <Person>
          <img
            src={`${process.env.PUBLIC_URL}/images/person.png`}
            alt="person"
            width="24px"
          />
        </Person>
      </TitleBox>
      <LoginInput>
        <IdPwInput
          type="text"
          placeholder="아이디"
          value={loginId}
          onChange={handleLoginIdChange}
        ></IdPwInput>
        <IdPwInput
          type="password"
          placeholder="비밀번호"
          value={loginPw}
          onChange={handleLoginPwChange}
        ></IdPwInput>
        <PwAgain>비밀번호 재설정</PwAgain>
      </LoginInput>
      <LoginBox onClick={handleLogin} disabled={loginButtonDisabled}>
        로그인
      </LoginBox>
      <Join onClick={onClick}>아직 회원이 아니신가요? 회원가입</Join>
    </Background>
  );
};
export default Login;
