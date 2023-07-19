import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Write from "./pages/write";
// import Read from "./pages/read";
// import Save from "./pages/save";
import Share from "./pages/share";

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          maxWidth: "1280px",
          margin: "0px auto",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <Routes>
          {/* <Route path="/" element={<Write />} /> */}
          {/* <Route path="/" element={<Read />} /> */}
          {/* <Route path="/" element={<Save />} /> */}
          <Route path="/" element={<Share />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
