import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Background = styled.div`
  position: relative;
  width: 390px;
  height: 844px;
  background: #f5f0e4;
`;

const Topbar = styled.div`
  display: inline-flex;
  width: 17px;
  padding: 11px 360px 11px 13px;
  align-items: center;
  gap: 11px;
  background: #55877e;
`;

const Backbutton = styled.div`
  display: flex;
  width: 24px;
  height: 24px;
  padding: 4px;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`;

const Toptitle = styled.div`
  color: #b3dbd4;
  text-align: center;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin-top: 70px;
`;

const Bottomtitle = styled.div`
  color: #b3dbd4;
  text-align: center;
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

const Mainimg = styled.div`
  margin-left: 70px;
  width: 225px;
  height: 206px;
  flex-shrink: 0;
`;

const Box1 = styled.div`
  border-radius: 6px;
  background: #b3dbd4;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 80px;
  margin-left: 60px;
  margin-top: 60px;
  display: flex;
  padding: 18px 95px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Logintext = styled.div`
  display: flex;
  width: 70px;
  height: 20px;
  flex-direction: column;
  justify-content: center;

  color: #214a43;
  text-align: center;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Box2 = styled.div`
  border-radius: 6px;
  background: #b3dbd4;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 80px;
  margin-left: 60px;
  margin-top: 40px;
  display: flex;
  padding: 18px 95px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Jointext = styled.div`
  display: flex;
  width: 70px;
  height: 20px;
  flex-direction: column;
  justify-content: center;

  color: #214a43;
  text-align: center;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Box3 = styled.div`
  border-radius: 6px;
  background: #b3dbd4;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 80px;
  margin-left: 60px;
  margin-top: 40px;
  display: flex;
  padding: 18px 95px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Nonmemblogintext = styled.div`
  display: flex;
  width: 80px;
  height: 20px;
  flex-direction: column;
  justify-content: center;

  color: #214a43;
  text-align: center;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const Firstpage = () => {
  const navigate = useNavigate();
  const navigateTologinpage = () => {
    navigate("/LoginPage");
  };

  return (
    <Background>
      <Topbar>
        <Backbutton onClick={navigate(-1)}>
          <img src={`${process.env.PUBLIC_URL}/images/back.png`} alt="back" />
        </Backbutton>
      </Topbar>
      <Toptitle>SHUT UP AND</Toptitle>
      <Mainimg>
        <img
          src={`${process.env.PUBLIC_URL}/images/mainimg.png`}
          alt="mainimage"
        />
      </Mainimg>
      <Bottomtitle>CLIP MY MONEY</Bottomtitle>

      <Box1 onClick={navigateTologinpage}>
        <Logintext>로그인</Logintext>
      </Box1>
      <Box2 onClick={navigateTologinpage}>
        <Jointext>회원가입</Jointext>
      </Box2>
      <Box3 onClick={navigateTologinpage}>
        <Nonmemblogintext>비회원 로그인</Nonmemblogintext>
      </Box3>
    </Background>
  );
};
export default Firstpage;
