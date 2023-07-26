import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Write from "./pages/write";
// import Read from "./pages/read";
import Save from "./pages/save";
// import Share from "./pages/share";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Write />} /> */}
        {/* <Route path="/" element={<Read />} /> */}
        <Route path="/" element={<Save />} />
        {/* <Route path="/" element={<Share />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
