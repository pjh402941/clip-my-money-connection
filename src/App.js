import { BrowserRouter, Route, Routes } from "react-router-dom";
import Firstpage from "./pages/firstpage";
import Recordstart_ag from "./pages/recordstart_ag";
import Recordstart_ds from "./pages/recordstart_ds";
import Signup from "./pages/signup";
import NoSign from "./pages/NoSign";
import SignUpDetail from "./pages/SignUpDetail";
import Write from "./pages/write";
import Writeform1 from "./pages/writeform1";
import Read from "./pages/read";
<<<<<<< HEAD
import Save from "./pages/save";
import Share from "./pages/share";
=======
import Login from "./pages/login";
import Save from "./pages/save";
import Share from "./pages/share";
import Dayselect from "./pages/writepage_dayselect";

>>>>>>> bcedc7cdb40e6429198dab915908905294e226fc
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
<<<<<<< HEAD
          <Route path="/Recordstart_ds" element={<Recordstart_ds />} />
          <Route path="/save" element={<Save />} />
          <Route path="/share" element={<Share />} />

          <Route path="/Read" element={<Read />} />
          <Route path="/Write" element={<Write />} />
          <Route path="/Dayselect" element={<Dayselect />} />
          <Route path="/Writeform1" element={<Writeform1 />} />
=======
          <Route path="/recordstart_ds" element={<Recordstart_ds />} />
          <Route path="/Dayselect" element={<Dayselect />} />
          <Route path="/writeform1" element={<Writeform1 />} />
          <Route path="/Read" element={<Read />} />
          <Route path="/Write" element={<Write />} />
          <Route path="/save" element={<Save />} />
          <Route path="/share" element={<Share />} />
>>>>>>> bcedc7cdb40e6429198dab915908905294e226fc
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
