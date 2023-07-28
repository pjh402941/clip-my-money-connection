import { BrowserRouter, Route, Routes } from "react-router-dom";
import Firstpage from "./pages/firstpage";
import Recordstart_ag from "./pages/recordstart_ag";
import Recordstart_ds from "./pages/recordstart_ds";
// import Dayselect from "./pages/writepage_dayselect";
import Write from "./pages/write";
import Writeform1 from "./pages/writeform1";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import SignUpDetail from "./pages/SignUpDetail";
import NoSign from "./pages/NoSign";
import Save from "./pages/save";
import Share from "./pages/share";
import Dayselect from "./pages/writepage_dayselect";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          {/* "/" 경로에 대한 라우팅 */}
          <Route path="/" element={<Firstpage />} />
          <Route path="/writeform1" element={<Writeform1 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signupdetail" element={<SignUpDetail />} />
          <Route path="/nosign" element={<NoSign />} />
          <Route path="/write" element={<Write />} />
          <Route path="/save" element={<Save />} />
          <Route path="/share" element={<Share />} />
          <Route path="/recordstart_ag" element={<Recordstart_ag />} />
          <Route path="/recordstart_ds" element={<Recordstart_ds />} />
          {/* <Route path="/writepage_dayselect" element={<Dayselect />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
