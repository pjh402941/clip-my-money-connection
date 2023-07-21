import React from "react";
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

const Bottombox = styled.div`
  display: inline-flex;
  padding: 20px 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 300px;
  height: 250px;
  margin-left: 35px;
  margin-top: 20px;
  border-radius: 6px;
  background: #b3dbd4;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const Listtext = styled.div`
  display: flex;
  margin-top: -30px;
  width: 300px;
  height: 50px;
  flex-direction: column;
  justify-content: center;
  color: #214a43;
  text-align: center;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Whitebox1 = styled.div`
  display: flex;
  width: 200px;
  height: 70px;
  flex-direction: column;
  justify-content: center;

  border-radius: 6px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const Celenderimg = styled.div`
  display: flex;
  width: 24px;
  height: 24px;
  padding: 0px 1px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  gap: 10px;
`;

const Readingtext = styled.div`
  display: flex;
  width: 100px;
  height: 46px;
  flex-direction: column;
  justify-content: center;
  margin-left: 60px;
  margin-top: -33px;
  color: #214a43;
  text-align: center;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Whitebox2 = styled.div`
  display: flex;
  justify-content: center;

  display: flex;
  width: 200px;
  height: 70px;
  flex-direction: column;
  justify-content: center;

  border-radius: 6px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const Writeimg = styled.div`
  display: flex;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;

const Writingtext = styled.div`
  display: flex;
  width: 100px;
  height: 46px;
  flex-direction: column;
  justify-content: center;
  margin-left: 60px;
  margin-top: -33px;
  color: #214a43;
  text-align: center;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const Recordstart_ag = () => {
  return (
    <Background>
      <Topbar>
        <Backbutton>
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

      <Bottombox>
        <Listtext>목록</Listtext>
        <Whitebox1>
          <Celenderimg>
            <img
              src={`${process.env.PUBLIC_URL}/images/celender.png`}
              alt="celender"
            />
          </Celenderimg>
          <Readingtext>가계부 열람</Readingtext>
        </Whitebox1>
        <Whitebox2>
          <Writeimg>
            <img
              src={`${process.env.PUBLIC_URL}/images/write.png`}
              alt="write"
            />
          </Writeimg>
          <Writingtext>가계부 작성</Writingtext>
        </Whitebox2>
      </Bottombox>
    </Background>
  );
};
export default Recordstart_ag;
