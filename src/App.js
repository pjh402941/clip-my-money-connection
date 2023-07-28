import { BrowserRouter, Route, Routes } from "react-router-dom";
import Firstpage from "./pages/firstpage";
import Recordstart_ag from "./pages/recordstart_ag";
import Recordstart_ds from "./pages/recordstart_ds";
import Dayselect from "./pages/writepage_dayselect";
import Login from "./pages/login";
import Signup from "./pages/signup";
import NoSign from "./pages/NoSign";
import SignUpDetail from "./pages/SignUpDetail";
import Write from "./pages/write";
import Writeform1 from "./pages/writeform1";
import Read from "./pages/read";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Firstpage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/NoSign" element={<NoSign />} />
          <Route path="/SignUpDetail" element={<SignUpDetail />} />
          <Route path="/Recordstart_ag" element={<Recordstart_ag />} />
          <Route path="/Read" element={<Read />} />
          <Route path="/Write" element={<Write />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
