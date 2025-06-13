import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import Profile from "./pages/Profile";
import UtilityBill from "./pages/UtilityBill";
const App = () => {
  return (
    <Suspense fallback="loading">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/utility-bill" element={<UtilityBill />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};
export default App;