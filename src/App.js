import { BrowserRouter, Route, Routes } from "react-router-dom";
import Firstpage from "./pages/firstpage";
import Recordstart_ag from "./pages/recordstart_ag";
import Recordstart_ds from "./pages/recordstart_ds";
import Dayselect from "./pages/writepage_dayselect";
import Login from "./pages/login";
import Write from "./pages/write";
import Writeform1 from "./pages/writeform1";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Writeform1 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
