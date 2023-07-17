import React, { FC } from "react";
import { useState } from "react";
import "./Form.css";
import { Link } from "react-router-dom";

export const Formf: FC = () => {
  const [InputClicked, setInputClicked] = useState(false);

  const handdleInputChange = () => {
    setInputClicked(true);
  };

  // const [form, setForm] = useState({
  //   name: '',
  //   email: '',
  // })

  // const clearForm = () =>{
  //   setForm({
  //     name: '',
  //     email: '',
  //   })
  // }
  return (
    <>
      {/* <div>
      <form action="">
        <input type="text" name="name" value={form.name} onChange={(e)=> setForm({ ...form, name: e.target.value})} onClick={handdleInputChange} />
        <input type="email" name="email" value={form.email} onChange={(e)=> setForm({ ...form, email: e.target.value})} onClick={handdleInputChange} />
        <button type="button" onClick={clearForm} >Clear</button>
        <button  style={{backgroundColor: InputClicked ? 'green' : 'blue'}}>Submit</button>
      </form>
      </div> */}

      <div className="px-[50px] flex justify-between py-[50px] gap-[40px">
        <div className="flex flex-col gap-[50px]">
          <p
            style={{ fontFamily: "Satoshi" }}
            className="w-[350px] text-[30px] font-[900] leading-[130%]"
          >
            When are you looking to move to Awka?
          </p>
          <div className="flex items-center h-[72px] bg-[#DCDFE0] rounded-[8px] pr-[20px]">
            <input
              type="text"
              placeholder="Find out the ‘why’?"
              className="py-[21px] w-[400px] px-[24px] bg-[#DCDFE0] border-none"
            />
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 16L4 8H20L12 16Z" fill="black" />
            </svg>
          </div>
        </div>
        <form action="">
          <div className="h-[500px] flex flex-col w-[600px] gap-[25px] px-[50px] pt-[50px] rounded-[8px] bg-[#004643]">
            <p
              style={{ fontFamily: "Poppins" }}
              className="text-[#FFF] text-[18px] font-[500] leading-[150%]"
            >
              Ideal Move-in-date
            </p>
            <div className="flex h-[60px] items-center w-[100%]">
              <input
                onClick={handdleInputChange}
                type="text"
                className="w-[100%] h-[60px] pl-[10px] bg-[#fff] rounded-[8px]"
                placeholder="Input date"
              />
              <div className="hello bg-[#0C1618] py-[11px ] px-[16px] h-[60px] flex items-center w-[80px]">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 28.1001C23.5333 28.1001 23.1246 27.9334 22.774 27.6001C22.4246 27.2668 22.25 26.8668 22.25 26.4001C22.25 25.9001 22.4246 25.4834 22.774 25.1501C23.1246 24.8168 23.5333 24.6501 24 24.6501C24.4666 24.6501 24.8753 24.8168 25.226 25.1501C25.5753 25.4834 25.75 25.9001 25.75 26.4001C25.75 26.8668 25.5753 27.2668 25.226 27.6001C24.8753 27.9334 24.4666 28.1001 24 28.1001ZM16 28.1001C15.5333 28.1001 15.1253 27.9334 14.776 27.6001C14.4253 27.2668 14.25 26.8668 14.25 26.4001C14.25 25.9001 14.4253 25.4834 14.776 25.1501C15.1253 24.8168 15.5333 24.6501 16 24.6501C16.4666 24.6501 16.8753 24.8168 17.226 25.1501C17.5753 25.4834 17.75 25.9001 17.75 26.4001C17.75 26.8668 17.5753 27.2668 17.226 27.6001C16.8753 27.9334 16.4666 28.1001 16 28.1001ZM32 28.1001C31.5333 28.1001 31.1246 27.9334 30.774 27.6001C30.4246 27.2668 30.25 26.8668 30.25 26.4001C30.25 25.9001 30.4246 25.4834 30.774 25.1501C31.1246 24.8168 31.5333 24.6501 32 24.6501C32.4666 24.6501 32.8753 24.8168 33.226 25.1501C33.5753 25.4834 33.75 25.9001 33.75 26.4001C33.75 26.8668 33.5753 27.2668 33.226 27.6001C32.8753 27.9334 32.4666 28.1001 32 28.1001ZM24 35.9501C23.5333 35.9501 23.1246 35.7834 22.774 35.4501C22.4246 35.1168 22.25 34.7168 22.25 34.2501C22.25 33.7501 22.4246 33.3334 22.774 33.0001C23.1246 32.6668 23.5333 32.5001 24 32.5001C24.4666 32.5001 24.8753 32.6668 25.226 33.0001C25.5753 33.3334 25.75 33.7501 25.75 34.2501C25.75 34.7168 25.5753 35.1168 25.226 35.4501C24.8753 35.7834 24.4666 35.9501 24 35.9501ZM16 35.9501C15.5333 35.9501 15.1253 35.7834 14.776 35.4501C14.4253 35.1168 14.25 34.7168 14.25 34.2501C14.25 33.7501 14.4253 33.3334 14.776 33.0001C15.1253 32.6668 15.5333 32.5001 16 32.5001C16.4666 32.5001 16.8753 32.6668 17.226 33.0001C17.5753 33.3334 17.75 33.7501 17.75 34.2501C17.75 34.7168 17.5753 35.1168 17.226 35.4501C16.8753 35.7834 16.4666 35.9501 16 35.9501ZM32 35.9501C31.5333 35.9501 31.1246 35.7834 30.774 35.4501C30.4246 35.1168 30.25 34.7168 30.25 34.2501C30.25 33.7501 30.4246 33.3334 30.774 33.0001C31.1246 32.6668 31.5333 32.5001 32 32.5001C32.4666 32.5001 32.8753 32.6668 33.226 33.0001C33.5753 33.3334 33.75 33.7501 33.75 34.2501C33.75 34.7168 33.5753 35.1168 33.226 35.4501C32.8753 35.7834 32.4666 35.9501 32 35.9501ZM10.75 42.6001C9.81664 42.6001 9.01664 42.2668 8.34998 41.6001C7.68331 40.9334 7.34998 40.1334 7.34998 39.2001V12.7501C7.34998 11.7834 7.68331 10.9668 8.34998 10.3001C9.01664 9.63343 9.83331 9.3001 10.8 9.3001H13.75V6.5501C13.75 6.1501 13.892 5.8081 14.176 5.5241C14.4586 5.24143 14.8 5.1001 15.2 5.1001C15.6 5.1001 15.9333 5.24143 16.2 5.5241C16.4666 5.8081 16.6 6.1501 16.6 6.5501V9.3001H31.45V6.5001C31.45 6.1001 31.5833 5.76676 31.85 5.5001C32.1166 5.23343 32.45 5.1001 32.85 5.1001C33.25 5.1001 33.5833 5.23343 33.85 5.5001C34.1166 5.76676 34.25 6.1001 34.25 6.5001V9.3001H37.2C38.1666 9.3001 38.9833 9.63343 39.65 10.3001C40.3166 10.9668 40.65 11.7834 40.65 12.7501V39.2001C40.65 40.1334 40.3166 40.9334 39.65 41.6001C38.9833 42.2668 38.1833 42.6001 37.25 42.6001H10.75ZM10.8 39.8001H37.2C37.4 39.8001 37.558 39.7414 37.674 39.6241C37.7913 39.5081 37.85 39.3668 37.85 39.2001V20.7001H10.15V39.2001C10.15 39.3668 10.208 39.5081 10.324 39.6241C10.4413 39.7414 10.6 39.8001 10.8 39.8001ZM10.15 17.9001H37.85V12.7501C37.85 12.5501 37.7913 12.3914 37.674 12.2741C37.558 12.1581 37.4 12.1001 37.2 12.1001H10.8C10.6 12.1001 10.4413 12.1581 10.324 12.2741C10.208 12.3914 10.15 12.5501 10.15 12.7501V17.9001ZM10.15 17.9001V12.1001V17.9001Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <button
              style={{
                fontFamily: "Poppins",
                backgroundColor: InputClicked ? "#000" : "#C7C9D9",
                color: InputClicked ? "#fff" : "#000",
              }}
              className="flex w-[100%] h-[60px] py-[16px] text-[25px] rounded-[8px] font-[500] leading-[150%] px-[48px] gap-[10px] justify-center items-center"
            >
              <Link to="/form1f">Next</Link>
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.1755 21.45L22.6231 12L13.1731 2.55005M2.37549 12H22.6255H2.37549Z"
                  stroke="#0C1618"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
