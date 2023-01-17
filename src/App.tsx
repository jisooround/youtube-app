import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Watch from "./pages/Watch";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route index path="/search" element={<Search />} />
          <Route index path="/watch" element={<Watch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
