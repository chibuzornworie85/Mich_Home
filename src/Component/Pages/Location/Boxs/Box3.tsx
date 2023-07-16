import { FC } from "react";
import img from "../../../Assets/Location_Asset/Rectangle 4.png";
import imgs from "../../../Assets/Location_Asset/Rectangle 4 (1).png";
import { Link } from "react-router-dom";

export const Box3: FC = () => {
  return (
    <>
      <div className="px-[50px] flex py-[100px] flex-col gap-[100px]">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-[20px]">
            <p
              style={{ fontFamily: "Satoshi" }}
              className="text-[25px] font-[900] leading-[130%] w-[450px]"
            >
              Everyone needs a place to live, and you deserve a place you adore.
            </p>
            <p
              style={{ fontFamily: "Poppins" }}
              className="text-[#414647] font-[400] leading-[170%] text-[20px] w-[600px]"
            >
              Finding an apartment in "Location" might be challenging. Please
              allow us to assist. Our apartment specialists can assist you in
              finding the ideal Fort Worth apartment in the most suitable area
              for your requirements.
            </p>
          </div>
          <div>
            <img src={img} alt="img" className="h-[450px]" />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <img src={imgs} alt="img" className="h-[450px]" />
          </div>
          <div className="flex flex-col gap-[20px]">
            <p
              style={{ fontFamily: "Satoshi" }}
              className="text-[25px] font-[900] leading-[130%] w-[400px]"
            >
              Having access to Location's top apartment bargains.
            </p>
            <p
              style={{ fontFamily: "Poppins" }}
              className="text-[#0C1618] font-[400] leading-[170%] text-[20px] w-[550px]"
            >
              Trying to get the greatest apartment bargain may be stressful. To
              provide our clients with the greatest cost, our staff negotiates
              with properties.
            </p>
            <div
              style={{ fontFamily: "Poppins" }}
              className="text-[#FFF] text-[20px] font-[500] leading-[150%] bg-[#0C1618] h-[60px] py-[16px] px-[30px] flex items-center gap-[8px] w-[50%] rounded-[8px]"
            >
              <button>
                <Link to="/apartment">View Latest Deals</Link>
              </button>
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.6755 21.95L22.1231 12.5L12.6731 3.05003M1.87549 12.5H22.1255H1.87549Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
