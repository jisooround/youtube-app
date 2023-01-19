import styled from "styled-components";
// import { MdHomeFilled } from "react-icons/md";
import { useLocation } from "react-router-dom";

const Aside = ({ open }: { open: boolean }) => {
  const { pathname } = useLocation();
  console.log(pathname);
  if (open === true) {
    return <Open>{/* <MdHomeFilled style={{ color: "black" }} /> */}</Open>;
  } else {
    if (pathname.includes("watch")) return null;
    else {
      return (
        <Close>
          {/* <div className="wrap">
            <MdHomeFilled className="icon" />
            <p>홈</p>
          </div>
          <div className="wrap">
            <MdHomeFilled className="icon" />
            <p>Shorts</p>
          </div>
          <div className="wrap">
            <MdHomeFilled className="icon" />
            <p>구독</p>
          </div>
          <div className="wrap">
            <MdHomeFilled className="icon" />
            <p>보관함</p>
          </div> */}
        </Close>
      );
    }
  }
};

const Open = styled.div`
  width: 240px;
  height: 100vh;
  position: fixed;
  padding-top: 100px;
  top: 0;
  background-color: #dfdfdf;
  left: 0;
`;

const Close = styled.div`
  width: 72px;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: flex-start;
  margin-top: 56px;
  padding: 0 4px;
  box-sizing: border-box;
  top: 0;
  flex-direction: column;
  .wrap {
    width: 100%;
    height: 74px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    padding: 16px 0 14px 0;
    box-sizing: border-box;
    :hover {
      border-radius: 10px;
      background-color: #eee;
      transition: 0.2s;
    }
    .icon {
      width: 100%;
      font-size: 23px;
      cursor: pointer;
      margin-bottom: 6px;
    }
    p {
      font-size: 10px;
    }
  }
`;

export default Aside;
