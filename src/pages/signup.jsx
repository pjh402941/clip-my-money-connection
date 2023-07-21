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
  width: 120px;
  height: 44px;
  background: #55877e;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
`;

const Title = styled.div`
  position: relative;
  padding-top: 10px;
  margin-left: 7px;
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
  margin-left: 84px;
  margin-top: -23.5px;
`;

const AgreeBox = styled.div`
  position: relative;
  margin: auto;
  margin-top: 80px;
  width: 344px;
  height: 228px;
  background: #e8f3f1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
`;

const Agree = styled.div`
  position: relative;
  margin: auto;
  top: 22px;
  margin-top: 22px;
  width: 310px;
  height: 44px;
  background: #b3dbd4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  border: none;
`;

const Check = styled.div`
  position: relative;
  margin-left: -266px;
  padding-top: 10px;
`;

const AgreeText = styled.div`
  position: relative;
  width: 236px;
  height: 21px;
  font-size: 12px;
  font-weight: bold;
  color: #214a43;
  text-align: left;
  margin-top: -26.3px;
  margin-left: 44.5px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 6px;
  background: #ffffff;
`;

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <Background>
      <Top>
        <Back>
          <img
            src={`${process.env.PUBLIC_URL}/images/back.png`}
            alt="back"
            width="18px"
          />
        </Back>
      </Top>
      <TitleBox>
        <Title>회원가입</Title>
        <Person>
          <img
            src={`${process.env.PUBLIC_URL}/images/person.png`}
            alt="person"
            width="24px"
          />
        </Person>
      </TitleBox>
      <AgreeBox>
        <Agree>
          <Check>
            <img
              src={`${process.env.PUBLIC_URL}/images/check.png`}
              alt="check"
              width="24px"
            />
          </Check>
          <AgreeText>[필수] 서비스 이용약관 동의</AgreeText>
        </Agree>
        <Agree>
          <Check>
            <img
              src={`${process.env.PUBLIC_URL}/images/check.png`}
              alt="check"
              width="24px"
            />
          </Check>
          <AgreeText>[필수] 개인정보 수집 및 이용 동의</AgreeText>
        </Agree>
        <Agree>
          <Check>
            <img
              src={`${process.env.PUBLIC_URL}/images/check.png`}
              alt="check"
              width="24px"
            />
          </Check>
          <AgreeText>[선택] 마케팅 정보 수신 동의</AgreeText>
        </Agree>
      </AgreeBox>
    </Background>
  );
};
export default SignUp;
