import { FC } from "react";
import {Link} from "react-router-dom"

export const Box3: FC = () => {
  return (
    <>
      <div className="bg-[url('/src/Component/Assets/Apart_Asset/Rectangle.png')] bg-no-repeat bg-cover bg-center h-[552px] w-[100%]">
        <div className="px-[100px] flex flex-col gap-[100px] pt-[100px]">
          <div
            style={{ fontFamily: "Satoshi" }}
            className="text-[#0C1618] w-[509px] text-[61.04px] font-[900] leading-[130%]"
          >
            <p>Discover your ideal apartment</p>
          </div>
          <div
            style={{ fontFamily: "Poppins" }}
            className="flex gap-[8px] font-[500] leading-[150%] text-[25px] items-center h-[88px] py-[16px] px-[48px] rounded-[8px] text-[#FFF] w-[17%] bg-[#0C1618]"
          >
            <button>
              <Link to="/form">Get Started</Link>
            </button>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.6755 21.45L22.1231 12L12.6731 2.55003M1.87549 12H22.1255H1.87549Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};
