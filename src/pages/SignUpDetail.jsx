import React, { useState } from "react";
import styled from "styled-components";
// import { useNavigate } from "react-router-dom";

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
  margin-top: 50px;
  margin-bottom: 50px;
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

const InputBox = styled.div`
  position: relative;
  margin: auto;
  margin-top: 22px;
  width: 310px;
  height: 52px;
  background: #b3dbd4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  border: none;
`;

const Input = styled.input`
  position: relative;
  align-items: center;
  width: 250px;
  height: 32px;
  background: #ffffff;
  border-radius: 6px;
  border: none;
  margin-top: 9px;
  margin-left: -34px;

  &::placeholder {
    color: #b3dbd4;
    padding-left: 10px;
  }
`;

const Check = styled.div`
  position: relative;
  margin-left: 266px;
  margin-top: -29px;
`;

const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  align-items: center;
  padding: 5px 10px;

  position: relative;
  width: 90px;
  height: 34px;

  //   background: #e7f5f3;
  border: 1px solid #b3dbd4;
  border-radius: 6px;

  flex-direction: row;

  margin-left: 5px;
  margin-right: 5px;
  margin-top: 9px;

  color: #b3dbd4;
`;

const Done = styled.div`
  position: relative;
  width: 140px;
  height: 35px;
  background: #55877e;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  font-size: 12px;
  line-height: 35px;
  color: #ffffff;
  margin: auto;
  margin-top: 68px;
`;

const SignUpDetail = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  // 일자, 월, 년도 배열 생성
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const years = Array.from(
    { length: 100 },
    (_, i) => new Date().getFullYear() - i
  );

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
      <InputBox>
        <Input type="text" placeholder="이름"></Input>
        <Check>
          <img
            src={`${process.env.PUBLIC_URL}/images/check.png`}
            alt="check"
            width="24px"
          />
        </Check>
      </InputBox>
      <InputBox>
        <Input type="text" placeholder="닉네임"></Input>
        <Check>
          <img
            src={`${process.env.PUBLIC_URL}/images/check.png`}
            alt="check"
            width="24px"
          />
        </Check>
      </InputBox>
      <InputBox>
        <Input type="text" placeholder="아이디"></Input>
        <Check>
          <img
            src={`${process.env.PUBLIC_URL}/images/check.png`}
            alt="check"
            width="24px"
          />
        </Check>
      </InputBox>
      <InputBox>
        <Input type="text" placeholder="비밀번호"></Input>
        <Check>
          <img
            src={`${process.env.PUBLIC_URL}/images/check.png`}
            alt="check"
            width="24px"
          />
        </Check>
      </InputBox>
      <InputBox>
        <Input type="phone" placeholder="전화번호"></Input>
        <Check>
          <img
            src={`${process.env.PUBLIC_URL}/images/check.png`}
            alt="check"
            width="24px"
          />
        </Check>
      </InputBox>
      <InputBox>
        {/* 년도 드롭다운 */}
        <Select onChange={(e) => setYear(e.target.value)}>
          <option value="">년</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </Select>

        {/* 월 드롭다운 */}
        <Select onChange={(e) => setMonth(e.target.value)}>
          <option value="">월</option>
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </Select>

        {/* 일자 드롭다운 */}
        <Select onChange={(e) => setDay(e.target.value)}>
          <option value="">일</option>
          {days.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </Select>
      </InputBox>
      <Done>회원가입 완료</Done>
    </Background>
  );
};

export default SignUpDetail;
