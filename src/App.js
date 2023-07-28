// app.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Write from "./pages/write";
import Save from "./pages/save";
import Share from "./pages/share"; // share.jsx 파일을 import 합니다.

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Write />} />
        <Route path="/save" element={<Save />} />
        <Route path="/share" element={<Share />} /> {/* share.jsx에 대한 Route */}
      </Routes>
    </Router>
  );
};

export default App;
