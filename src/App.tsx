import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Watch from "./pages/Watch";
import { useState } from "react";

const App = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <Layout
              open={open}
              handleClickOpen={handleClickOpen}
              setOpen={setOpen}
            />
          }
        >
          <Route index path="/" element={<Home open={open} />} />
          <Route index path="/search" element={<Search />} />
          <Route index path="/watch/:id" element={<Watch open={open} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
