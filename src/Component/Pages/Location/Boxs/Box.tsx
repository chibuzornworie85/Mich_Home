import { FC } from "react";
import box from "../../../Assets/Location_Asset/Rectangle 3.png";
import { Link } from "react-router-dom";

export const Box: FC = () => {
  return (
    <>
      {/* BOX */}

      <div className="bg-[#FFF] flex items-center gap-[40px] px-[100px] pb-[100px] justify-between">
        <div className="flex flex-col gap-[50px]">
          <h1
            style={{ fontFamily: "Millik" }}
            className="text-[104px] w-[733px] font-[400] leading-[95%]"
          >
            <span className="text-[#004643]">Find the right apartment</span>
          </h1>
          <p
            style={{ fontFamily: "Poppins" }}
            className="text-[#414647] text-[25px] font-[500] leading-[170%] w-[700px]"
          >
            In Awka, there are over 190,000 housing units. With no cost to you,
            we help you find your one.
          </p>

          <div
            style={{ fontFamily: "Poppins" }}
            className="flex text-[32px] gap-[8px] bg-[#0C1618] justify-center w-[50%] text-[#FFF] rounded-[8px] py-[16px] px-[48px] font-[500] leading-[140%] h-[96px] items-center"
          >
            <button>
              <Link to="/apartment">View Listings</Link>
            </button>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.676 21.45L22.1236 12L12.6736 2.55005M1.87598 12H22.126H1.87598Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div>
          <img src={box} alt="" />
        </div>
      </div>
    </>
  );
};
