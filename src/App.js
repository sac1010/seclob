import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AdminPanel from "./pages/AdminPanel";
import AddProduct from "./pages/AddProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/admin/add-product" element={<AddProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
