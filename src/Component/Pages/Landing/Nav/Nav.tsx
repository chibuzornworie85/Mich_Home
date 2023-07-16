import { FC } from "react";
import logo from "../../../Assets/Landing_page_Asset/Brand Logo.png";
import "./Nav.css";
import { Link } from "react-router-dom";

export const Nav: FC = () => {
  return (
    <>
      {/* Nav */}

      <header className="custom-shadow flex justify-between px-[50px] py-[20px] text-center rounded-[8px] bg-[#FFF] items-center sticky top-0">
        <div className="flex items-center">
          <img src={logo} alt="logo" />
        </div>
        <nav style={{ fontFamily: "Poppins" }}>
          <ul className="flex gap-[40px] items-center text-[#0C1618] text-center text-[16px] font-[500] leading-[170%]">
            <li>About us</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </nav>
        <div style={{ fontFamily: "Poppins" }}>
          <button className="flex bg-[#EBEBF0] text-[#0C1618] font-[500] leading-[150%] text-[16px] rounded-[8px] h-[60px] px-[24px] py-[16px] items-center gap-[8px]">
            <Link to="/location">Choose Location</Link>
            <svg
              width="34"
              height="36"
              viewBox="0 0 34 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.0003 23.8334L5.66699 12.1667H28.3337L17.0003 23.8334Z"
                fill="#0C1618"
              />
            </svg>
          </button>
        </div>
      </header>
    </>
  );
};
