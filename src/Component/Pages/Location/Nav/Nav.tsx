import { FC } from "react";
import logo from "../../../Assets/Location_Asset/Brand Logo.png";
import "../../Landing/Nav/Nav.css";
import { Link } from "react-router-dom";

export const Nav: FC = () => {
  return (
    <>
      {/* Nav */}

      <header className="custom-shadow flex justify-between px-[50px] py-[20px] text-center rounded-[8px] bg-[#FFF] items-center sticky top-0">
        <div className="flex items-center gap-[20px]">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <nav style={{ fontFamily: "Poppins" }}>
            <ul className="flex gap-[20px] items-center text-[#0C1618] text-center text-[15px] font-[500] leading-[170%]">
              <Link to="/apartment">
                <li>Latest Apartment Listings</li>
              </Link>
              <li>Our Process</li>
              <div className="flex items-center gap-[5px">
                <li>More</li>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 16L4 8H20L12 16Z" fill="#0C1618" />
                </svg>
              </div>
              <div
                style={{ fontFamily: "Poppins" }}
                className="flex border border-[#0C1618] text-[#0C1618] font-[600] leading-[150%] text-[15px] rounded-[8px] h-[64px px-[10px] py-[10px] items-center gap-[8px]"
              >
                <Link to="/location">
                  <button>Location</button>
                </Link>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 34 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.0003 23.8334L5.66699 12.1667H28.3337L17.0003 23.8334Z"
                    fill="#0C1618"
                  />
                </svg>
              </div>
            </ul>
          </nav>
        </div>
        <div
          style={{ fontFamily: "Poppins" }}
          className="flex gap-[10px] items-center"
        >
          <div className="flex items-center gap-[8px]">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.1998 22.45C25.8998 22.75 25.5665 22.8246 25.1998 22.674C24.8331 22.5246 24.6498 22.2333 24.6498 21.8V8.69995C24.6498 8.19995 24.8251 7.78328 25.1758 7.44995C25.5251 7.11662 25.9331 6.94995 26.3998 6.94995H39.1998C39.6998 6.94995 40.1165 7.11662 40.4498 7.44995C40.7831 7.78328 40.9498 8.19995 40.9498 8.69995V17.3C40.9498 17.8 40.7831 18.2246 40.4498 18.574C40.1165 18.9246 39.6998 19.1 39.1998 19.1H29.5998L26.1998 22.45ZM27.6498 9.94995V16.1V9.94995ZM27.6498 16.1H37.9498V9.94995H27.6498V16.1ZM38.8498 40.9C34.9831 40.9 31.1418 39.9746 27.3258 38.124C23.5085 36.2746 20.0998 33.85 17.0998 30.85C14.0998 27.85 11.6751 24.45 9.8258 20.65C7.97514 16.85 7.0498 13 7.0498 9.09995C7.0498 8.49995 7.2498 7.99995 7.6498 7.59995C8.0498 7.19995 8.5498 6.99995 9.1498 6.99995H15.6498C16.1831 6.99995 16.6411 7.15795 17.0238 7.47395C17.4078 7.79128 17.6498 8.19995 17.7498 8.69995L18.8998 14.6C18.9665 15.1 18.9498 15.55 18.8498 15.95C18.7498 16.35 18.5331 16.7 18.1998 17L13.6498 21.5C15.2165 24.1666 17.0911 26.5833 19.2738 28.75C21.4578 30.9166 23.9331 32.8 26.6998 34.4L31.1498 29.9C31.4831 29.5666 31.8751 29.3333 32.3258 29.2C32.7751 29.0666 33.2331 29.0333 33.6998 29.1L39.2498 30.25C39.7498 30.35 40.1585 30.5833 40.4758 30.95C40.7918 31.3166 40.9498 31.7666 40.9498 32.2999V38.7999C40.9498 39.3999 40.7498 39.8999 40.3498 40.2999C39.9498 40.6999 39.4498 40.9 38.8498 40.9V40.9ZM12.1998 18.65L15.7998 15.25C15.8665 15.1833 15.9085 15.108 15.9258 15.024C15.9418 14.9413 15.9331 14.8666 15.8998 14.8L14.9998 10.3C14.9665 10.2 14.9165 10.1246 14.8498 10.074C14.7831 10.0246 14.6998 9.99995 14.5998 9.99995H10.3498C10.2831 9.99995 10.2251 10.0246 10.1758 10.074C10.1251 10.1246 10.0998 10.1833 10.0998 10.25C10.1998 11.6166 10.4251 13.008 10.7758 14.424C11.1251 15.8413 11.5998 17.25 12.1998 18.65ZM37.6998 37.7999C37.7665 37.7999 37.8251 37.7746 37.8758 37.7239C37.9251 37.6746 37.9498 37.6166 37.9498 37.5499V33.3499C37.9498 33.2499 37.9251 33.1666 37.8758 33.0999C37.8251 33.0333 37.7498 32.9833 37.6498 32.95L33.4498 32.0999C33.3831 32.0666 33.3165 32.0586 33.2498 32.076C33.1831 32.092 33.1165 32.1333 33.0498 32.2L29.5498 35.75C30.8831 36.3833 32.2585 36.8753 33.6758 37.226C35.0918 37.5753 36.4331 37.7666 37.6998 37.7999V37.7999Z"
                fill="#0C1618"
              />
            </svg>
            <p className="flex items-center text-[#0C1618] text-center text-[15px] font-[500] leading-[170%]">
              Call / Text (234) 456 7890
            </p>
          </div>
          <button
            style={{ fontFamily: "Poppins" }}
            className="text-[15px] font-[600] leading-[150%] rounded-[8px] border-[2px] py-[10px] px-[20px] border-[#0C1618] text-[#0C1618]"
          >
            <Link to="/form">Start Now</Link>
          </button>
        </div>
      </header>
    </>
  );
};