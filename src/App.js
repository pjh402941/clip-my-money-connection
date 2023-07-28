// app.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Write from "./pages/write";
import Save from "./pages/save";
import Share from "./pages/share";
import Firstpage from "./pages/firstpage";
import Login from "./pages/login";
import Nosign from "./pages/NoSign";
import Recordstart_ag from "./pages/recordstart_ag"
import Recordstart_ds from "./pages/recordstart_ds"
import Signup from "./pages/signup"
import SignUpDetail from "./pages/SignUpDetail"
import Dayselect from "./pages/writepage_dayselect"

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
