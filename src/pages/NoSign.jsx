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

const Logo = styled.div`
  position: relative;
  margin: auto;
  margin-top: 70px;
`;

const NoMember = styled.div`
  position: relative;
  margin: auto;
  margin-top: 30px;

  font-weight: bold;
  font-size: 20px;

  color: #55877e;
`;

const NameBox = styled.div`
  position: relative;
  margin: auto;
  margin-top: 35px;

  width: 240px;
  height: 80px;

  background: #b3dbd4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
`;

const NameInput = styled.input`
  position: relative;

  align-items: center;
  width: 200px;
  height: 44px;
  background: #ffffff;
  border-radius: 6px;
  border: none;
  margin: auto;
  margin-top: 17px;

  &::placeholder {
    color: #b3dbd4;
    padding-left: 10px;
  }
`;

const Check = styled.div`
  position: relative;
  margin-left: 186px;
  margin-top: -35px;
`;

const Done = styled.button`
  position: relative;
  width: 128px;
  height: 55px;
  background: #55877e;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  font-size: 12px;
  color: #ffffff;
  margin: auto;
  margin-top: 68px;
  border: none;
`;

const NoSign = () => {
  const navigate = useNavigate();

  const onClickBtn = () => {
    navigate(-1); // 바로 이전 페이지로 이동, '/main' 등 직접 지정도 당연히 가능
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
      <Logo>
        <img
          src={`${process.env.PUBLIC_URL}/images/logo.png`}
          alt="logo"
          width="338px"
          height="302px"
        />
      </Logo>
      <NoMember>비회원 로그인</NoMember>
      <NameBox>
        <NameInput type="text" placeholder="닉네임"></NameInput>
      </NameBox>
      <Done>입력 완료</Done>
    </Background>
  );
};

export default NoSign;
