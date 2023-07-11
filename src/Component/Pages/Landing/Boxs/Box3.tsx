import { FC } from "react";
import img1 from "../../../Assets/Landing_page_Asset/Rectan.png";

export const Box3: FC = () => {
  return (
    <>
      {/* BOX3 */}
      <div className="px-[100px] py-[150px] flex justify-between items-center">
        <div className="flex flex-col gap-[20px]">
          <p
            style={{ fontFamily: "Satoshi" }}
            className="text-[39.06px] font-[900] leading-[130%] w-[710px]"
          >
            Join the Mich Homes team! Put up a lot of effort. Give a damn. Enjoy
            yourself.
          </p>
          <p
            style={{ fontFamily: "Poppins" }}
            className="w-[710px] text-[22px] font-[400] leading-[170%]"
          >
            Want a job that's not awful? Heck, we can even raise the standard a
            little. How about a job that will make you eagerly anticipate Monday
            morning? We at Mich Homes are constantly searching for rock stars
            that share these values. For more information on how to join our
            fantastic team, please visit our Careers page.
          </p>
          <button
            style={{ fontFamily: "Poppins" }}
            className="flex items-center gap-[10px] w-[35%] text-[20px] font-[500] leading-[150%] bg-[#0C1618] rounded-[8px] h-[72px] py-[16px] px-[48px] justify-start text-[#FFF]"
          >
            View Jobs
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.676 21.95L22.1236 12.5L12.6736 3.05005M1.87598 12.5H22.126H1.87598Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div>
          <img src={img1} alt="img" />
        </div>
      </div>
    </>
  );
};
