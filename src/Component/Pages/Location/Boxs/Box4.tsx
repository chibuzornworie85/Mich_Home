import { FC } from "react";
import img from "../../../Assets/Location_Asset/author-avatar.png";
import frame from "../../../Assets/Location_Asset/Frame 48.png";
import "./Box.css";
import {Link} from "react-router-dom"

export const Box4: FC = () => {
  return (
    <>
      {/* Customer */}
      <div className="flex flex-col px-[100px] items-center">
        <p
          style={{ fontFamily: "Satoshi" }}
          className="flex justify-center text-[61.04px] font-[900] leading-[130%]"
        >
          What our customers are saying
        </p>
        <div className="flex items-center py-[100px] gap-[50px]">
          <div>
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40.4096 55.1683L19.7363 34.4951C19.3403 34.1782 19.063 33.7822 18.9046 33.3069C18.7462 32.8317 18.667 32.396 18.667 32C18.667 31.5248 18.7462 31.0685 18.9046 30.6313C19.063 30.1972 19.3403 29.8218 19.7363 29.505L40.4096 8.71287C40.8848 8.23762 41.3997 8 41.9541 8C42.5086 8 43.0234 8.23762 43.4987 8.71287C43.9739 9.26733 44.2115 9.82178 44.2115 10.3762C44.2115 10.9307 43.9739 11.4455 43.4987 11.9208L23.4195 32L43.4987 52.0792C43.9739 52.5545 44.2115 53.0693 44.2115 53.6238C44.2115 54.1782 43.9739 54.6931 43.4987 55.1683C43.0234 55.7228 42.5086 56 41.9541 56C41.3997 56 40.8848 55.7228 40.4096 55.1683Z"
                fill="#004643"
              />
            </svg>
          </div>
          <div className="w-[1112px] bg-[#FFF] shadow pt-[62px] pl-[142px] pb-[58px] flex flex-col gap-[50px] pr-[142px] rounded-[4px]">
            <div className="flex flex-col items-center gap-[50px]">
              <img src={img} alt="img" />
              <p
                style={{ fontFamily: "Poppins" }}
                className="w-[824px] text-[#004643] font-[400] leading-[170%] text-[31.25px] flex text-center"
              >
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
                tristique suspendisse semper vestibulum pharetra ut nec. Amet
                mollis commodo duis odio cursus.”
              </p>
            </div>
            <hr />
            <div className="flex justify-between items-center">
              <p
                style={{ fontFamily: "Poppins" }}
                className="text-[#0C1618] leading-[150%] font-[600] text-[31.25px]"
              >
                John Doe
              </p>
              <p
                style={{ fontFamily: "Poppins" }}
                className="text-[#0C1618] text-[25px] font-[400] leading-[170%]"
              >
                Via facebook
              </p>
            </div>
          </div>
          <div>
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.3794 55.1683C18.9041 54.6931 18.6665 54.1782 18.6665 53.6238C18.6665 53.0693 18.9041 52.5545 19.3794 52.0792L39.4586 32L19.3794 11.9208C18.9041 11.4455 18.6665 10.9307 18.6665 10.3762C18.6665 9.82178 18.9041 9.26733 19.3794 8.71287C19.8546 8.23762 20.3695 8 20.9239 8C21.4784 8 21.9932 8.23762 22.4685 8.71287L43.1418 29.505C43.5378 29.8218 43.815 30.1972 43.9734 30.6313C44.1319 31.0685 44.2111 31.5248 44.2111 32C44.2111 32.4753 44.1319 32.9299 43.9734 33.364C43.815 33.8012 43.5378 34.1782 43.1418 34.4951L22.4685 55.1683C21.9932 55.7228 21.4784 56 20.9239 56C20.3695 56 19.8546 55.7228 19.3794 55.1683Z"
                fill="#004643"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Skill */}
      <div className="flex justify-center px-[100px] pb-[100px] items-center">
        <div className="bg-[#004643] rounded-t-[4px] w-[799.5px] h-[664px] flex flex-col gap-[20px] p-[100px]">
          <p style={{fontFamily: "Satoshi"}} className="font-[900] w-[578px] leading-[130%] text-[61.04px] text-[#FFF]">Improve your tenancy skills</p>
          <p style={{fontFamily: "Poppins"}} className="w-[578px] text-[#FFF] text-[31.25px] font-[400] leading-[170%]">Let Mich Homes assist you in finding your next rental.</p>
          <button className="mt-[30px] text-[#FFF] text-[25px] font-[500] leading-[150%] w-[258px] rounded-[8px] h-[72px] py-[16px] px-[32px] bg-[#0C1618]"><Link to="/form">Get Started</Link></button>
        </div>
        <div>
          <img src={frame} alt="img" />
        </div>
      </div>
    </>
  );
};
