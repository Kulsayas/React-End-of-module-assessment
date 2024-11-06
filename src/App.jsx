import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Hompage";
import Owner from "./pages/Owner";

export default function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="owner" element={<Owner />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
