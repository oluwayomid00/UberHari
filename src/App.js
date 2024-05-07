import { Route, Routes } from "react-router-dom";
import MainNavigation from "./Navbar";
import Home from "./pages/Home";
import AllEntries from "./pages/AllEntries";

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="UberHari/" element={<Home />}></Route>
        <Route path="UberHari/list" element={<AllEntries />}></Route>
      </Routes>
    </div>
  );
}

export default App;
