<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Firstpage from "./pages/firstpage";
import Recordstart_ag from "./pages/recordstart_ag";
import Recordstart_ds from "./pages/recordstart_ds";
import Dayselect from "./pages/writepage_dayselect";
import Login from "./pages/login";
import Write from "./pages/write";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Dayselect />} />
          <Route path="/write" element={<Write />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
=======
>>>>>>> 0f9e4407befebd44b05784db69c133f545d87ce3
