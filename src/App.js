import { BrowserRouter, Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import Firstpage from "./pages/firstpage";
import Recordstart_ag from "./pages/recordstart_ag";
import Recordstart_ds from "./pages/recordstart_ds";
import Dayselect from "./pages/writepage_dayselect";
import Login from "./pages/login";
=======
import Login from "./pages/login";
import SignUp from "./pages/signup";
import SignUpDetail from "./pages/SignUpDetail";
import NoSign from "./pages/NoSign";
import "./App.css";
>>>>>>> e6139829250cdb754592db325b5a1259a16d21c5

function App() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
      <div>
        <Routes>
          <Route path="/" element={<Dayselect />} />
=======
      <div
        style={{
          // maxWidth: "1280px",
          margin: "0px auto",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signupdetail" element={<SignUpDetail />} />
          <Route path="/nosign" element={<NoSign />} />
>>>>>>> e6139829250cdb754592db325b5a1259a16d21c5
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
