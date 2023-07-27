import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  height: 844px;
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
  height: 80%;
  border-radius: 6px;
  background: #b3dbd4;
  padding: 8px 5px;
  margin-top: 10px;
  box-shadow: 2px 0 8px #b8b5ac, -2px 0 8px #b8b5ac;
`;
const Bottom = styled.img`
  width: 100%;
  margin-top: -5px;
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

const Content = styled.div`
  width: 95%;
  height: 60vh;
  border-radius: 6px;
  margin: auto;
  margin-top: 30px;
  background-color: white;
  font-family: "Inter", sans-serif;
  -ms-overflow-style: none;
  padding-bottom: 23px;
`;
const TextArea = styled.textarea`
  width: 80%;
  height: 21vh;
  border: none;
  resize: none;
  font-family: "Inter", sans-serif;
  -ms-overflow-style: none;
  background-color: transparent;
  position: absolute;
  /* top: 273px; */
  left: 50%;
  transform: translate(-50%, -50%);
  top: 373px;
`;

const ImgBox = styled.div`
  margin: 0 auto;
  height: auto;
  width: 70%;
  border-radius: 6px;
  border: 2px solid #55877e;
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px 17px 10px 17px;
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 152px;
`;

const ImgUpload = styled.img`
  padding-bottom: 10px;
`;
const TotalBox = styled.div`
  margin: 0 auto;
  height: auto;
  width: 79%;
  border-radius: 6px;
  border: 2px solid #55877e;
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 11px 65px;
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 281px;
`;

const TotalTag = styled.div``;

const Total = styled.div``;

const Footer = styled.footer`
background: #55877e;
height: 80px;
position: sticky;
width: 100%;`;

const ToolBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 100%;
  align-items: center;
  padding: 0 15px;
`;

const TextIcon = styled.img`
  /* TextIcon 스타일링 */
`;

const ImageIcon = styled.img`
  /* ImageIcon 스타일링 */
`;

const DrawIcon = styled.img`
  /* DrawIcon 스타일링 */
`;

const ColorIcon = styled.img`
  /* ColorIcon 스타일링 */
`;

const LayoutIcon = styled.img`
  /* LayoutIcon 스타일링 */
`;
const ColorPickerContainer = styled.div`
  position: absolute;
  z-index: 3;
  top: calc(
    50% - 20px - 24px
  ); /* Adjust this value based on the height of the ColorIcon */
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Write = () => {
  const canvasRef = useRef(null);
  const [ctx, setCtx] = useState(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lastX, setLastX] = useState(0);
  const [lastY, setLastY] = useState(0);
  const [currentColor, setCurrentColor] = useState("#000"); // Default color is black
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [isDrawingMode, setIsDrawingMode] = useState(true); // Added state to handle drawing/text mode
  const [drawingData, setDrawingData] = useState([]); // State to store drawing data

  // Effect to initialize canvas context
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    setCtx(context);
  }, []);

  // Event handlers for drawing
  const handleMouseDown = (e) => {
    setIsDrawing(true);
    setLastX(e.nativeEvent.offsetX);
    setLastY(e.nativeEvent.offsetY);
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
    // Save the drawing data when the mouse is up
    setDrawingData((prevDrawingData) => [
      ...prevDrawingData,
      { x: lastX, y: lastY },
    ]);
  };

  const handleMouseMove = (e) => {
    if (!isDrawing) return;
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    draw(lastX, lastY, x, y);
    setLastX(x);
    setLastY(y);
  };

  // Drawing function
  const draw = (startX, startY, endX, endY) => {
    if (!ctx) return;
    ctx.strokeStyle = currentColor; // Use the current selected color
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
  };

  // Function to handle color icon click
  const handleColorIconClick = () => {
    setShowColorPicker((prevState) => !prevState); // Toggle color picker visibility
  };

  // Function to handle color picker change
  const handleColorChange = (e) => {
    setCurrentColor(e.target.value); // Set selected color
    setShowColorPicker(false); // Hide the color picker after selecting a color
  };

  const handleTextIconClick = () => {
    setIsDrawingMode(false); // Set text mode
    // Save the current drawing data to preserve the drawn picture
    const canvas = canvasRef.current;
    const imageDataURL = canvas.toDataURL(); // Get the current state of the canvas as a data URL
    setDrawingData((prevDrawingData) => [...prevDrawingData, imageDataURL]);
  };

  // Function to handle DrawIcon click
  const handleDrawIconClick = () => {
    setIsDrawingMode(true); // Set drawing mode
  };

  // Function to clear the canvas
  const clearCanvas = () => {
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  };

  // Function to redraw the saved drawings
  const redrawDrawings = () => {
    // Clear the canvas first
    clearCanvas();

    // Redraw the saved drawing data
    drawingData.forEach((data) => {
      const image = new Image();
      image.src = data;
      image.onload = () => {
        ctx.drawImage(image, 0, 0);
      };
    });
  };

  const [showImagePicker, setShowImagePicker] = useState(false);

  // 이미지 아이콘 클릭 처리 함수
  const handleImageIconClick = () => {
    setShowImagePicker(!showImagePicker);
  };

  // 이미지 선택 처리 함수
  const handleImageSelect = (e) => {
    // 이미지 파일을 선택한 후의 로직을 여기에 작성합니다.
    // 선택한 이미지 파일은 e.target.files를 통해 접근할 수 있습니다.
  };
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
              <Content name="content">
                {isDrawingMode ? ( // If it's drawing mode, show canvas
                  <canvas
                    ref={canvasRef}
                    width="316"
                    height="200"
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                  ></canvas>
                ) : (
                  // Otherwise, show textarea
                  <TextArea></TextArea>
                )}
                <ImgBox>
                  <ImgUpload src="images/샘플.png" width="72px"></ImgUpload>
                  <ImgUpload src="images/샘플.png" width="72px"></ImgUpload>
                  <ImgUpload src="images/샘플.png" width="72px"></ImgUpload>
                  <ImgUpload src="images/샘플.png" width="72px"></ImgUpload>
                  <ImgUpload src="images/샘플.png" width="72px"></ImgUpload>
                  <ImgUpload src="images/샘플.png" width="72px"></ImgUpload>
                </ImgBox>
                <TotalBox>
                  <TotalTag>Total</TotalTag>
                  <Total>00won</Total>
                </TotalBox>
              </Content>
            </FormContent>
          </form>
          <Bottom src="images/Bottom.png"></Bottom>
        </Body>
        <Footer>
          <ToolBox>
            <TextIcon
              src="images/텍스트.png"
              alt="text"
              width="24px"
              onClick={handleTextIconClick} // Added onClick handler for text mode
            />
            <ImageIcon
              src="images/이미지0.png"
              alt="image"
              width="24px"
              onClick={handleImageIconClick}
            />
            <DrawIcon
              src="images/그리기.png"
              alt="draw"
              width="24px"
              onClick={handleDrawIconClick} // Added onClick handler for drawing mode
            />
            <ColorIcon
              src="images/색상.png"
              alt="color"
              width="24px"
              onClick={handleColorIconClick}
            />
            <LayoutIcon
              src="images/레이아웃 양식.png"
              alt="layout"
              width="24px"
            />
          </ToolBox>
        </Footer>
      </BodyWrapper>
      {/* Render the color picker */}
      {showColorPicker && (
        <ColorPickerContainer>
          <input
            type="color"
            value={currentColor}
            onChange={handleColorChange}
          />
        </ColorPickerContainer>
      )}
      {/* 파일 선택 창 */}
      {showImagePicker && (
        <input
          type="file"
          style={{ display: "none" }}
          onChange={handleImageSelect}
          ref={(fileInput) => fileInput && fileInput.click()} // 프로그래밍 방식으로 클릭 이벤트 트리거
        />
      )}
    </Container>
  );
};

export default Write;
