import { FC } from "react";
import { useState } from "react";
import "../Form/Form.css";
import { Link } from "react-router-dom";

export const Formf: FC = () => {
  const [InputClicked, setInputClicked] = useState(false);
  const [form, setForm] = useState({
    bedrooms: "",
    bedrooms1: "",
    budget: "",
  });

  const handdleInputChange = () => {
    setInputClicked(true);
  };

  const clearForm = () => {
    setForm({
      bedrooms: "",
      bedrooms1: "",
      budget: "",
    });
  };
  return (
    <>
      <div className="px-[50px] flex justify-between py-[50px]">
        <div className="flex flex-col gap-[50px]">
          <p
            style={{ fontFamily: "Satoshi" }}
            className="w-[350px] text-[30px] font-[900] leading-[130%]"
          >
            Which apartment size and what is your budget?
          </p>
          <div className="flex items-center h-[72px] bg-[#DCDFE0] rounded-[8px] pr-[10px]">
            <input
              type="text"
              placeholder="Find out the ‘why’?"
              className="py-[21px] w-[350px] px-[24px] bg-[#DCDFE0] border-none"
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
        <div className="w-[700px] h-[550px] flex flex-col gap-[50px] px-[100px pt-[60px] rounded-[8px] px-[50px] bg-[#004643]">
          <div
            style={{ fontFamily: "Poppins" }}
            className="flex h-[50px] text-[18px] font-[500] leading-[150%] justify-between items-center gap-[40px]"
          >
            <div className="w-[50%]">
              <div className="flex flex-col gap-[10px]">
                <label className="text-[#fff]">Bedrooms</label>
                <div className="flex items-center">
                  <input
                    onClick={handdleInputChange}
                    type="text"
                    className="pl-[10px] bg-[#fff] rounded-[8px] h-[60px] w-[70%]"
                    placeholder="-"
                    value={form.bedrooms}
                    onChange={(e) =>
                      setForm({ ...form, bedrooms: e.target.value })
                    }
                  />
                  <div className="hello w-[80px] h-[60px] bg-[black] flex justify-center items-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 16.6024C11.8218 16.6024 11.6513 16.5727 11.4885 16.5133C11.3246 16.4539 11.1832 16.35 11.0644 16.2015L3.26733 8.44898C3.08911 8.27076 3 8.07769 3 7.86977C3 7.66185 3.10396 7.46878 3.31188 7.29056C3.4901 7.11234 3.68317 7.02323 3.89109 7.02323C4.09901 7.02323 4.29208 7.09749 4.4703 7.24601L12 14.8203L19.5297 7.24601C19.7079 7.06779 19.901 6.9864 20.1089 7.00185C20.3168 7.01611 20.5248 7.11234 20.7327 7.29056C20.9109 7.46878 21 7.66185 21 7.86977C21 8.07769 20.9109 8.27076 20.7327 8.44898L12.9356 16.2015C12.8168 16.35 12.676 16.4539 12.5133 16.5133C12.3493 16.5727 12.1782 16.6024 12 16.6024V16.6024Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[50%]">
              <div className="flex flex-col gap-[10px]">
                <label className="text-[#fff]">Bedrooms</label>
                <div className="flex items-center">
                  <input
                    onClick={handdleInputChange}
                    type="text"
                    className="pl-[10px] bg-[#fff] rounded-[8px] h-[60px] w-[70%]"
                    placeholder="-"
                    value={form.bedrooms1}
                    onChange={(e) =>
                      setForm({ ...form, bedrooms1: e.target.value })
                    }
                  />
                  <div className="hello w-[80px] h-[60px] bg-[black] flex justify-center items-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 16.6024C11.8218 16.6024 11.6513 16.5727 11.4885 16.5133C11.3246 16.4539 11.1832 16.35 11.0644 16.2015L3.26733 8.44898C3.08911 8.27076 3 8.07769 3 7.86977C3 7.66185 3.10396 7.46878 3.31188 7.29056C3.4901 7.11234 3.68317 7.02323 3.89109 7.02323C4.09901 7.02323 4.29208 7.09749 4.4703 7.24601L12 14.8203L19.5297 7.24601C19.7079 7.06779 19.901 6.9864 20.1089 7.00185C20.3168 7.01611 20.5248 7.11234 20.7327 7.29056C20.9109 7.46878 21 7.66185 21 7.86977C21 8.07769 20.9109 8.27076 20.7327 8.44898L12.9356 16.2015C12.8168 16.35 12.676 16.4539 12.5133 16.5133C12.3493 16.5727 12.1782 16.6024 12 16.6024V16.6024Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              style={{ fontFamily: "Poppins" }}
              className="flex flex-col gap-[10px]"
            >
              <label className="text-[18px] font-[500] leading-[150%] text-[#fff]">
                Budget
              </label>
              <div className="flex items-center">
                <input
                  type="text"
                  onClick={handdleInputChange}
                  placeholder="-"
                  className="w-[100%] text-[#000] text-[18px] font-[500] leading-[150%] rounded-[8px] pl-[10px] h-[60px]"
                  value={form.budget}
                  onChange={(e) => setForm({ ...form, budget: e.target.value })}
                />
                <div className="w-[80px] h-[60px] flex items-center bg-[#000] justify-center rounded-[8px]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 16.6024C11.8218 16.6024 11.6513 16.5727 11.4885 16.5133C11.3246 16.4539 11.1832 16.35 11.0644 16.2015L3.26733 8.44898C3.08911 8.27076 3 8.07769 3 7.86977C3 7.66185 3.10396 7.46878 3.31188 7.29056C3.4901 7.11234 3.68317 7.02323 3.89109 7.02323C4.09901 7.02323 4.29208 7.09749 4.4703 7.24601L12 14.8203L19.5297 7.24601C19.7079 7.06779 19.901 6.9864 20.1089 7.00185C20.3168 7.01611 20.5248 7.11234 20.7327 7.29056C20.9109 7.46878 21 7.66185 21 7.86977C21 8.07769 20.9109 8.27076 20.7327 8.44898L12.9356 16.2015C12.8168 16.35 12.676 16.4539 12.5133 16.5133C12.3493 16.5727 12.1782 16.6024 12 16.6024V16.6024Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-[20px] w-[100%]">
            <div
              onClick={handdleInputChange}
              className="w-[135px] items-center h-[70px] py-[28px] rounded-[8px] border-[2px] border-[#fff] flex justify-center"
            >
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
            </div>
            <button
              style={{
                fontFamily: "Poppins",
                backgroundColor: InputClicked ? "#000" : "#C7C9D9",
                color: InputClicked ? "#fff" : "#000",
              }}
              className="flex w-[701px] bg-[#C7C9D9] h-[70px] py-[16px] rounded-[8px] text-[25px] font-[500] leading-[150%] px-[48px] gap-[10px] justify-center items-center"
            >
              <Link to="/form2">Next</Link>
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
