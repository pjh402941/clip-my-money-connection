import { BrowserRouter, Route, Routes } from "react-router-dom";
import Firstpage from "./pages/firstpage";
import Recordstart_ag from "./pages/recordstart_ag";
import Recordstart_ds from "./pages/recordstart_ds";
import Dayselect from "./pages/writepage_dayselect";
import LoginPage from "./pages/loginpage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Firstpage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
