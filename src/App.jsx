import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/nodeportfolio" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}
