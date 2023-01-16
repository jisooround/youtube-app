import { Outlet } from "react-router-dom";
import Aside from "./Aside";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Aside />
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
