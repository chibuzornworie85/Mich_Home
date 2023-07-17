import { FC } from "react";
import { useState } from "react";
import "../Form/Form.css";
import { Link } from "react-router-dom";

export const Formf: FC = () => {
  const [InputClicked, setInputClicked] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    number: "",
    email: "",
    hear: "",
    special: "",
  });

  const handdleInputChange = () => {
    setInputClicked(true);
  };

  const clearForm = () => {
    setForm({
      firstName: "",
      lastName: "",
      number: "",
      email: "",
      hear: "",
      special: "",
    });
  };
  return (
    <>
      <div className="px-[50px] flex justify-between py-[50px]">
        <div className="flex flex-col gap-[50px]">
          <p
            style={{ fontFamily: "Satoshi" }}
            className="w-[500px] text-[30px] font-[900] leading-[130%]"
          >
            Start your search!
          </p>
          <div className="flex items-center h-[72px] bg-[#DCDFE0] rounded-[8px] pr-[10px]">
            <input
              type="text"
              placeholder="Disclaimer?"
              className="py-[21px] w-[100%] px-[24px] bg-[#DCDFE0] border-none"
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
        <div className="w-[600px] h-[1150px] flex flex-col gap-[50px] px-[50px] pt-[50px] rounded-[8px] bg-[#004643]">
          <div className="flex h-[70px] items-center w-[100%]">
            <div className="flex flex-col">
              <label
                style={{ fontFamily: "Poppins" }}
                className="text-[18px] font-[500] leading-[150%] text-[#fff]"
              >
                First Name
              </label>
              <input
                onClick={handdleInputChange}
                type="text"
                className="w-[500px] h-[70px] pl-[10px] bg-[#fff] rounded-[8px]"
                placeholder="First Name"
                value={form.firstName}
                onChange={(e) =>
                  setForm({ ...form, firstName: e.target.value })
                }
              />
            </div>
          </div>
          <div className="flex h-[70px] items-center w-[100%]">
            <div className="flex flex-col">
              <label
                style={{ fontFamily: "Poppins" }}
                className="text-[18px] font-[500] leading-[150%] text-[#fff]"
              >
                Last Name
              </label>
              <input
                onClick={handdleInputChange}
                type="text"
                className="w-[500px] h-[70px] pl-[10px] bg-[#fff] rounded-[8px]"
                placeholder="Last Name"
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              />
            </div>
          </div>
          <div className="flex h-[70px] items-center w-[100%]">
            <div className="flex flex-col">
              <label
                style={{ fontFamily: "Poppins" }}
                className="text-[18px] font-[500] leading-[150%] text-[#fff]"
              >
                Phone Number
              </label>
              <input
                onClick={handdleInputChange}
                type="text"
                className="w-[500px] h-[70px] pl-[10px] bg-[#fff] rounded-[8px]"
                placeholder="(123) 456 7890"
                value={form.number}
                onChange={(e) => setForm({ ...form, number: e.target.value })}
              />
            </div>
          </div>
          <div className="flex h-[70px] items-center w-[100%]">
            <div className="flex flex-col">
              <label
                style={{ fontFamily: "Poppins" }}
                className="text-[18px] font-[500] leading-[150%] text-[#fff]"
              >
                Email Address
              </label>
              <input
                onClick={handdleInputChange}
                type="text"
                className="w-[500px] h-[70px] pl-[10px] bg-[#fff] rounded-[8px]"
                placeholder="Hello@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
          </div>
          <div className="flex h-[70px] items-center w-[100%]">
            <div className="flex flex-col">
              <label
                style={{ fontFamily: "Poppins" }}
                className="text-[18px] font-[500] leading-[150%] text-[#fff]"
              >
                How did you hear about us?
              </label>
              <div className="flex">
                <input
                  onClick={handdleInputChange}
                  type="text"
                  className="w-[430px] h-[70px] pl-[10px] bg-[#fff] rounded-[8px]"
                  placeholder="-"
                  value={form.hear}
                  onChange={(e) => setForm({ ...form, hear: e.target.value })}
                />
                <div className="hello flex justify-center items-center h-[68.67px] w-[70px] bg-[#0C1618]">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 17.5712C11.8218 17.5712 11.6513 17.5415 11.4885 17.4821C11.3246 17.4227 11.1832 17.3187 11.0644 17.1702L3.26733 9.41773C3.08911 9.23951 3 9.04644 3 8.83852C3 8.6306 3.10396 8.43753 3.31188 8.25931C3.4901 8.08109 3.68317 7.99198 3.89109 7.99198C4.09901 7.99198 4.29208 8.06624 4.4703 8.21476L12 15.789L19.5297 8.21476C19.7079 8.03654 19.901 7.95515 20.1089 7.9706C20.3168 7.98486 20.5248 8.08109 20.7327 8.25931C20.9109 8.43753 21 8.6306 21 8.83852C21 9.04644 20.9109 9.23951 20.7327 9.41773L12.9356 17.1702C12.8168 17.3187 12.676 17.4227 12.5133 17.4821C12.3493 17.5415 12.1782 17.5712 12 17.5712V17.5712Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center w-[100%]">
            <div className="flex flex-col">
              <label
                style={{ fontFamily: "Poppins" }}
                className="text-[18px] font-[500] leading-[150%] text-[#fff]"
              >
                Any special requests?
              </label>
              <textarea
                className="w-[500px] p-[10px] bg-[#fff] rounded-[8px] h-[179.261px]"
                placeholder="Type something"
                onClick={handdleInputChange}
                value={form.special}
                onChange={(e) => setForm({ ...form, special: e.target.value })}
              ></textarea>
            </div>
          </div>
          <div className="flex items-center gap-[20px]">
            <div className="w-[135px] h-[70px] items-center py-[28px] rounded-[8px] border-[2px] border-[#fff] flex justify-center">
           <Link to="/form1f">
           <svg
                onClick={clearForm}
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.45254 16.6544L3.45183 16.6537C3.32557 16.5275 3.25904 16.4226 3.22679 16.342C3.18901 16.2475 3.16663 16.1356 3.16663 16.0001C3.16663 15.8646 3.18901 15.7526 3.22679 15.6582C3.25904 15.5776 3.32557 15.4727 3.45183 15.3464L3.45254 15.3457L15.4902 3.26011C15.4903 3.26003 15.4904 3.25996 15.4904 3.25988C15.5575 3.19288 15.6226 3.16675 15.7122 3.16675C15.7471 3.16675 15.8272 3.17749 15.9561 3.32787L15.9686 3.34245L15.9821 3.35603C16.1014 3.47534 16.1235 3.56204 16.1235 3.62598C16.1235 3.68985 16.1015 3.77643 15.9825 3.89553C15.9824 3.89566 15.9823 3.89579 15.9821 3.89593L5.09563 14.7345L4.23751 15.5888H5.4484H28.47C28.5462 15.5888 28.6232 15.6127 28.7169 15.7052C28.7953 15.7847 28.8333 15.8727 28.8333 16.0001C28.8333 16.1272 28.7963 16.1966 28.7341 16.2536C28.6434 16.3355 28.5611 16.3634 28.47 16.3634H5.4484H4.24129L5.09485 17.2169L16.0301 28.1522C16.0973 28.2194 16.1235 28.2845 16.1235 28.3742C16.1235 28.4381 16.1014 28.5248 15.9821 28.6441L15.9686 28.6577L15.9561 28.6723C15.8272 28.8227 15.7471 28.8334 15.7122 28.8334C15.6678 28.8334 15.5637 28.8135 15.3945 28.6444C15.3944 28.6443 15.3944 28.6442 15.3943 28.6441L3.45254 16.6544Z"
                  stroke="white"
                />
              </svg>
           </Link>
            </div>
            <button
              style={{
                fontFamily: "Poppins",
                backgroundColor: InputClicked ? "#000" : "#C7C9D9",
                color: InputClicked ? "#fff" : "#000",
              }}
              className="flex w-[701px] bg-[#C7C9D9 h-[70px] py-[16px] rounded-[8px] text-[25px] font-[500] leading-[150%] px-[48px] gap-[10px] justify-center items-center"
            >
              <Link to="/thanks"> Submit</Link>
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
        </div>
      </div>
    </>
  );
};
