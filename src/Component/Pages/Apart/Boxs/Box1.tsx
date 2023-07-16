import { FC } from "react";

export const Box1: FC = () => {
  return (
    <>
      <div className="px-[50px]">
        <div className="flex flex-col py-[50px] gap-[20px] items-center text-center">
          <p
            style={{ fontFamily: "Millik" }}
            className="text-[#004643] text-[50px] font-[400] leading-[130%]"
          >
            Latest Apartment Listings
          </p>
          <p
            style={{ fontFamily: "Poppins" }}
            className="w-[1010px] text-[#414647] text-[20px] font-[500] leading-[170%]"
          >
            This is the current situation with “Location” apartments. Since
            apartment prices fluctuate daily, we'll let you in on a little
            secret: as we come across listings that grab our eye, we'll post
            them here so you can see them, too. After all, it is our duty to
            locate your ideal apartment at no cost to you. Browse through some
            of the most up-to-date apartment listings in Location, Awka below,
            then get in touch if one catches your eye and you require
            information on current rates and availability. Contact a
            representative now for more information!
          </p>
        </div>
        <div
          style={{ fontFamily: "Poppins" }}
          className="flex justify-between gap-[10px] text-center text-[15px] font-[600] leading-[150%] text-[#FFF]"
        >
          <div className="w-[200px] h-[50px] flex items-center justify-center py-[30px] px-[20px] rounded-[8px] bg-[#0C1618]">
            <button>Neighbourhood</button>
          </div>
          <div className="w-[200px] h-[50px] flex items-center justify-center py-[30px] px-[20px] rounded-[8px] bg-[#0C1618]">
            <button>Budget</button>
          </div>
          <div className="w-[200px] h-[50px] flex items-center justify-center py-[30px] px-[20px] rounded-[8px] bg-[#0C1618]">
            <button>Layout</button>
          </div>
          <div className="w-[200px] h-[50px] flex items-center justify-center py-[30px] px-[20px] rounded-[8px] bg-[#0C1618]">
            <button>Sq. Footage</button>
          </div>
          <div className="w-[200px] h-[50px] flex items-center justify-center py-[30px] px-[20px] rounded-[8px] bg-[#0C1618]">
            <button>All Recent</button>
          </div>
          <div className="w-[200px] h-[50px] flex items-center justify-center py-[30px] px-[20px] rounded-[8px] bg-[#0C1618]">
            <button>Sort</button>
          </div>
          <div className="w-[200px] h-[50px] flex items-center justify-center py-[30px] px-[20px] rounded-[8px] bg-[#D1AC00]">
            <button>Clear Filters</button>
          </div>
        </div>
      </div>
    </>
  );
};
