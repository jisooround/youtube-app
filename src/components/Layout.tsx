import { Outlet } from "react-router-dom";
import Aside from "./Aside";
import Header from "./Header";

const Layout = ({
  open,
  handleClickOpen,
}: {
  open: boolean;
  handleClickOpen: () => void;
}) => {
  // const [open, setOpen] = useState(false);

  // const handleClickOpen = () => {
  //   setOpen((prev) => !prev);
  // };
  return (
    <>
      <Header open={open} handleClickOpen={handleClickOpen} />
      <Aside open={open} />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
