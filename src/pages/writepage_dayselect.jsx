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
  width: 18px;
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

const Topclip = styled.div`
  width: 14px;
  height: 36px;
  flex-shrink: 0;
  margin: 0 auto;
  margin-top: -35px;
  margin-left: 90px;
  fill: #b3dbd4;
  stroke-width: 0.5px;
  stroke: #55877e;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const Topgreenbox = styled.div`
  display: inline-flex;
  padding: 10px;
  align-items: flex-start;
  gap: 10px;

  width: 190px;
  height: 30px;

  margin: 0 auto;
  margin-left: 100px;
  margin-top: 70px;
  border-radius: 6px;
  background: #55877e;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const Toptitletext = styled.div`
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  width: 300px;
  margin: 0 auto;
  margin-left: -115px;
`;

const Celendericon = styled.div`
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0 auto;
  margin-top: 2px;
`;
const Dayselect = () => {
  return (
    <Background>
      <Topbar>
        <Backbutton>
          <img src={`${process.env.PUBLIC_URL}/images/back.png`} alt="back" />
        </Backbutton>
      </Topbar>
      <Topgreenbox>
        <Topclip>
          <img
            src={`${process.env.PUBLIC_URL}/images/topclip.png`}
            alt="topclip"
          />
        </Topclip>
        <Toptitletext>나의 가계부 달력</Toptitletext>
        <Celendericon>
          <img
            src={`${process.env.PUBLIC_URL}/images/celender2.png`}
            alt="celender2"
          />
        </Celendericon>
      </Topgreenbox>
    </Background>
  );
};
export default Dayselect;
