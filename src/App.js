import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import SignUpDetail from "./pages/SignUpDetail";
import NoSign from "./pages/NoSign";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
