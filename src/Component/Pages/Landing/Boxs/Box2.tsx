import { FC } from "react";
import img from "../../../Assets/Landing_page_Asset/Rectangle 4.png";
import rec from "../../../Assets/Landing_page_Asset/Rectangle 4 (1).png";

export const Box2: FC = () => {
  return (
    <>
      {/* BOX2 */}
      <div className="bg-[#FAFAFC] flex flex-col py-[100px] gap-[100px]">
        <div className="flex justify-center items-center gap-[90px]">
          <div className="flex flex-col gap-[20px]">
            <p
              style={{ fontFamily: "Satoshi" }}
              className="text-[39.06px] font-[900] leading-[130%]"
            >
              Deals you can’t get anywhere else
            </p>
            <p
              style={{ fontFamily: "Poppins" }}
              className="text-[22px] font-[400] text-[#414647] leading-[170%] w-[710px]"
            >
              We provide our friends special access to the agreements we reach
              with properties! Act quickly to benefit from the discounts as
              these limited offers are only accessible through Mich Homes.
              Obtain the information first by subscribing to alerts.
            </p>
          </div>
          <div>
            <img src={img} alt="img" />
          </div>
        </div>
        <div className="flex justify-center items-center gap-[90px]">
          <div>
            <img src={rec} alt="img" />
          </div>
          <div className="flex flex-col gap-[20px]">
            <p
              style={{ fontFamily: "Satoshi" }}
              className="text-[39.06px] font-[900] w-[700px] leading-[130%]"
            >
              Exclusive concierge services from Mich Homes!
            </p>
            <p
              style={{ fontFamily: "Poppins" }}
              className="w-[710px] font-[400] leading-[170%] text-[#414647] text-[22px]"
            >
              In order to make your life simpler even after you have been
              matched with your new apartment, our concierge service specializes
              in connecting our customers with partners that offer affordable
              prices. All Mich Homes customers can use this feature for free!
            </p>
          </div>
        </div>
      </div>

      {/* BOX2 */}
      <div className="px-[100px] flex flex-col gap-[20px] pb-[100px]">
        <div className="flex justify-between items-center py-[50px]">
          <p
            style={{ fontFamily: "Satoshi" }}
            className="text-[48.83px] font-[900] leading-[130%]"
          >
            A single, universal blog
          </p>
          <div className="flex items-center gap-[10px]">
            <p className="text-[#004643] text-[20px] font-[400] leading-[170%]">
              Read more insights from our team
            </p>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.676 21.45L22.1236 12L12.6736 2.55002M1.87598 12H22.126H1.87598Z"
                stroke="#004643"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="flex gap-[20px]">
          <div className="bg-[url('/src/Component/Assets/Landing_page_Asset/Rectangle.png')] bg-cover bg-no-repeat bg-center w-[517.448px]  h-[408px]">
            <div className="flex pl-[30px] pt-[200px] gap-[10px] flex-col">
              <p
                style={{ fontFamily: "Poppins" }}
                className="bg-[#D1AC00] text-[18px] font-[500] leading-[150%] rounded-[4px] py-[5px] flex justify-center w-[55%] px-[8px] text-[#FFF]"
              >
                APARTMENT HACKS, RENTING
              </p>
              <p
                style={{ fontFamily: "Poppins" }}
                className="w-[398px] text-[25px] font-[500] leading-[150%] text-[#FFF]"
              >
                The Ultimate Guide to Renting an Apartment
              </p>
              <div className="flex flex-col">
                <p
                  style={{ fontFamily: "Poppins" }}
                  className="text-[#FFF] text-[14px] font-[500] leading-[150%]"
                >
                  READ MORE
                </p>
                <svg
                  width="78"
                  height="1"
                  viewBox="0 0 78 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line y1="0.5" x2="78" y2="0.5" stroke="white" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-[url('/src/Component/Assets/Landing_page_Asset/Rectangle.png')] bg-cover bg-no-repeat bg-center w-[517.448px]  h-[408px]">
            <div className="flex pl-[30px] pt-[200px] gap-[10px] flex-col">
              <p
                style={{ fontFamily: "Poppins" }}
                className="bg-[#D1AC00] text-[18px] font-[500] leading-[150%] rounded-[4px] py-[5px] flex justify-center w-[20%] px-[8px] text-[#FFF]"
              >
                RENTING
              </p>
              <p
                style={{ fontFamily: "Poppins" }}
                className="w-[398px] text-[25px] font-[500] leading-[150%] text-[#FFF]"
              >
                5 Things to Look For in a Great Apartment Finder
              </p>
              <div className="flex flex-col">
                <p
                  style={{ fontFamily: "Poppins" }}
                  className="text-[#FFF] text-[14px] font-[500] leading-[150%]"
                >
                  READ MORE
                </p>
                <svg
                  width="78"
                  height="1"
                  viewBox="0 0 78 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line y1="0.5" x2="78" y2="0.5" stroke="white" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-[url('/src/Component/Assets/Landing_page_Asset/Rectangle.png')] bg-cover bg-no-repeat bg-center w-[517.448px]  h-[408px]">
            <div className="flex pl-[30px] pt-[200px] gap-[10px] flex-col">
              <p
                style={{ fontFamily: "Poppins" }}
                className="bg-[#D1AC00] text-[18px] font-[500] leading-[150%] rounded-[4px] py-[5px] flex justify-center w-[35%] px-[8px] text-[#FFF]"
              >
                PEOPLE, RENTING
              </p>
              <p
                style={{ fontFamily: "Poppins" }}
                className="w-[398px] text-[25px] font-[500] leading-[150%] text-[#FFF]"
              >
                Renting with roommates: Your Guide
              </p>
              <div className="flex flex-col">
                <p
                  style={{ fontFamily: "Poppins" }}
                  className="text-[#FFF] text-[14px] font-[500] leading-[150%]"
                >
                  READ MORE
                </p>
                <svg
                  width="78"
                  height="1"
                  viewBox="0 0 78 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line y1="0.5" x2="78" y2="0.5" stroke="white" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="flex  gap-[20px]">
          <div className="bg-[url('/src/Component/Assets/Landing_page_Asset/Rectangle.png')] bg-cover bg-no-repeat bg-center w-[517.448px]  h-[408px]">
            <div className="flex pl-[30px] pt-[200px] gap-[10px] flex-col">
              <p
                style={{ fontFamily: "Poppins" }}
                className="bg-[#D1AC00] text-[18px] font-[500] leading-[150%] rounded-[4px] py-[5px] flex justify-center w-[55%] px-[8px] text-[#FFF]"
              >
                APARTMENT HACKS, RENTING
              </p>
              <p
                style={{ fontFamily: "Poppins" }}
                className="w-[398px] text-[25px] font-[500] leading-[150%] text-[#FFF]"
              >
                The Ultimate Guide to Renting an Apartment
              </p>
              <div className="flex flex-col">
                <p
                  style={{ fontFamily: "Poppins" }}
                  className="text-[#FFF] text-[14px] font-[500] leading-[150%]"
                >
                  READ MORE
                </p>
                <svg
                  width="78"
                  height="1"
                  viewBox="0 0 78 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line y1="0.5" x2="78" y2="0.5" stroke="white" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-[url('/src/Component/Assets/Landing_page_Asset/Rectangle.png')] bg-cover bg-no-repeat bg-center w-[517.448px]  h-[408px]">
            <div className="flex pl-[30px] pt-[200px] gap-[10px] flex-col">
              <p
                style={{ fontFamily: "Poppins" }}
                className="bg-[#D1AC00] text-[18px] font-[500] leading-[150%] rounded-[4px] py-[5px] flex justify-center w-[55%] px-[8px] text-[#FFF]"
              >
                APARTMENT HACKS, RENTING
              </p>
              <p
                style={{ fontFamily: "Poppins" }}
                className="w-[398px] text-[25px] font-[500] leading-[150%] text-[#FFF]"
              >
                The Ultimate Guide to Renting an Apartment
              </p>
              <div className="flex flex-col">
                <p
                  style={{ fontFamily: "Poppins" }}
                  className="text-[#FFF] text-[14px] font-[500] leading-[150%]"
                >
                  READ MORE
                </p>
                <svg
                  width="78"
                  height="1"
                  viewBox="0 0 78 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line y1="0.5" x2="78" y2="0.5" stroke="white" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-[url('/src/Component/Assets/Landing_page_Asset/Rectangle.png')] bg-cover bg-no-repeat bg-center w-[517.448px]  h-[408px]">
            <div className="flex pl-[30px] pt-[200px] gap-[10px] flex-col">
              <p
                style={{ fontFamily: "Poppins" }}
                className="bg-[#D1AC00] text-[18px] font-[500] leading-[150%] rounded-[4px] py-[5px] flex justify-center w-[55%] px-[8px] text-[#FFF]"
              >
                APARTMENT HACKS, RENTING
              </p>
              <p
                style={{ fontFamily: "Poppins" }}
                className="w-[398px] text-[25px] font-[500] leading-[150%] text-[#FFF]"
              >
                The Ultimate Guide to Renting an Apartment
              </p>
              <div className="flex flex-col">
                <p
                  style={{ fontFamily: "Poppins" }}
                  className="text-[#FFF] text-[14px] font-[500] leading-[150%]"
                >
                  READ MORE
                </p>
                <svg
                  width="78"
                  height="1"
                  viewBox="0 0 78 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line y1="0.5" x2="78" y2="0.5" stroke="white" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
