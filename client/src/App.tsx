import "./App.css";
import CreateBlog from "./components/CreateBlog/CreateBlog";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="create-blog" element={<CreateBlog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
