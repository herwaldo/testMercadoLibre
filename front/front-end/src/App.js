import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar, Search } from "./components";
import { Home } from "./pages/Home/Home";
import { SinglePage } from "./pages/SinglePage/SinglePage";

export const App = () => {
    
    return (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="items" element={<Search />} />
              <Route path="items/:id" element={<SinglePage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      );
}