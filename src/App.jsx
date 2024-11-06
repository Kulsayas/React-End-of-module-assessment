import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Hompage";
import Owner from "./pages/Owner";
import "./index.css";
import "./App.css";

export default function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="owner" element={<Owner />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
