import { BrowserRouter, Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import Firstpage from "./pages/firstpage";
import Recordstart_ag from "./pages/recordstart_ag";
import Recordstart_ds from "./pages/recordstart_ds";
import Dayselect from "./pages/writepage_dayselect";
import LoginPage from "./pages/loginpage";
=======
// import Write from "./pages/write";
import Read from "./pages/read";
// import Save from "./pages/save";
// import Share from "./pages/share";
>>>>>>> 3b1337aa43e5d3dd07aa698a4537bbb9d2fceb42

function App() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
      <div>
        <Routes>
          <Route path="/" element={<Firstpage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
=======
      <div
        style={{
          maxWidth: "1280px",
          margin: "0px auto",
          minHeight: "100vh",
          position: "relative",
          
        }}
      >
        <Routes>
          {/* <Route path="/" element={<Write />} /> */}
          <Route path="/" element={<Read />} />
          {/* <Route path="/" element={<Save />} /> */}
          {/* <Route path="/" element={<Share />} /> */}
>>>>>>> 3b1337aa43e5d3dd07aa698a4537bbb9d2fceb42
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
