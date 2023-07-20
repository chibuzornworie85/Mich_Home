import { FC } from "react";
import { useState } from "react";
import img from "../../../Assets/Apart_Asset/tangle (1).png";
import img2 from "../../../Assets/Apart_Asset/tangle (2).png";
import img3 from "../../../Assets/Apart_Asset/tangle (3).png";

export const Mobile_Box4: FC = () => {
  const [drop, sideDrop] = useState<boolean>(true);
  return (
    <>
      <div className="px-[15px] flex flex-col gap-[10px]">
        <div className="bg-[url('/src/Component/Assets/Apart_Asset/png(3).png')] bg-no-repeat bg-cover bg-center h-[296px]">
          <div
            onClick={() => sideDrop(!drop)}
            className="px-[20px] flex justify-between pt-[130px]"
          >
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.1535 20.6881L7.40099 12.9356C7.25248 12.8168 7.14852 12.6683 7.08911 12.4901C7.0297 12.3119 7 12.1485 7 12C7 11.8218 7.0297 11.6507 7.08911 11.4867C7.14852 11.324 7.25248 11.1832 7.40099 11.0644L15.1535 3.26733C15.3317 3.08911 15.5248 3 15.7327 3C15.9406 3 16.1337 3.08911 16.3119 3.26733C16.4901 3.47525 16.5792 3.68317 16.5792 3.89109C16.5792 4.09901 16.4901 4.29208 16.3119 4.4703L8.78218 12L16.3119 19.5297C16.4901 19.7079 16.5792 19.901 16.5792 20.1089C16.5792 20.3168 16.4901 20.5099 16.3119 20.6881C16.1337 20.896 15.9406 21 15.7327 21C15.5248 21 15.3317 20.896 15.1535 20.6881Z"
                  fill="white"
                />
              </svg>
            </div>
            {drop ? (
              <div></div>
            ) : (
              <div className="top-0 right-0 fixed h-[100vh] w-[100%]">
                <div className="bg-[url('/src/Component/Assets/Apart_Asset/slide.png')] bg-no-repeat bg-center bg-cover h-[30vh] p-[20px]">
                  <div>
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="32" height="32" rx="4" fill="white" />
                      <path
                        d="M17.2534 15.9999L24.6223 8.63106C24.7679 8.46101 24.844 8.24228 24.8353 8.01857C24.8267 7.79485 24.734 7.58264 24.5757 7.42434C24.4173 7.26603 24.2051 7.17329 23.9814 7.16465C23.7577 7.15601 23.539 7.2321 23.3689 7.37773L16 14.7466L8.63116 7.36884C8.46377 7.20146 8.23676 7.10742 8.00004 7.10742C7.76333 7.10742 7.53631 7.20146 7.36893 7.36884C7.20155 7.53622 7.10752 7.76324 7.10752 7.99995C7.10752 8.23666 7.20155 8.46368 7.36893 8.63106L14.7467 15.9999L7.36893 23.3688C7.27588 23.4485 7.20031 23.5466 7.14695 23.6569C7.0936 23.7671 7.06362 23.8873 7.05889 24.0097C7.05416 24.1321 7.07479 24.2542 7.11948 24.3682C7.16417 24.4823 7.23195 24.5859 7.31858 24.6725C7.4052 24.7592 7.5088 24.8269 7.62287 24.8716C7.73693 24.9163 7.85901 24.9369 7.98142 24.9322C8.10384 24.9275 8.22396 24.8975 8.33424 24.8441C8.44452 24.7908 8.54258 24.7152 8.62227 24.6222L16 17.2533L23.3689 24.6222C23.539 24.7678 23.7577 24.8439 23.9814 24.8352C24.2051 24.8266 24.4173 24.7339 24.5757 24.5756C24.734 24.4173 24.8267 24.205 24.8353 23.9813C24.844 23.7576 24.7679 23.5389 24.6223 23.3688L17.2534 15.9999Z"
                        fill="#004643"
                      />
                    </svg>
                  </div>
                </div>
                <div className="bg-[#fff] h-[70vh]">
                  <div className="flex justify-around gap-[20px] px-[20px] py-[30px]">
                    <div>
                      <img src={img2} alt="img" />
                    </div>
                    <div>
                      <img src={img} alt="img" />
                    </div>
                    <div>
                      <img src={img3} alt="img" />
                    </div>
                  </div>

                  <div className="px-[20px] flex justify-between items-center">
                    <div
                      style={{ fontFamily: "Poppins" }}
                      className="flex font-[400] leading-[170%] text-[#000] flex-col gap-[30px]"
                    >
                      <div className="flex flex-col gap-[10px]">
                        <p>Neighborhood</p>
                        <p>Rental Amount</p>
                      </div>
                      <div className="flex flex-col gap-[10px]">
                        <p>Bedrooms</p>
                        <p>Bedrooms</p>
                      </div>
                      <div className="flex flex-col gap-[10px]">
                        <p>Square Footage</p>
                        <p>Listing Found</p>
                      </div>
                    </div>
                    <div
                      style={{ fontFamily: "Poppins" }}
                      className="flex font-[600] leading-[170%] text-[#000] flex-col gap-[30px]"
                    >
                      <div className="flex flex-col gap-[10px]">
                        <p>Amawbia, Awka</p>
                        <p>N240,000/yr</p>
                      </div>
                      <div className="flex flex-col gap-[10px]">
                        <p>1</p>
                        <p>1</p>
                      </div>
                      <div className="flex flex-col gap-[10px]">
                        <p>800 sf</p>
                        <p>2 days ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.26733 20.6881C7.08911 20.5099 7 20.3168 7 20.1089C7 19.901 7.08911 19.7079 7.26733 19.5297L14.797 12L7.26733 4.4703C7.08911 4.29208 7 4.09901 7 3.89109C7 3.68317 7.08911 3.47525 7.26733 3.26733C7.44555 3.08911 7.63861 3 7.84654 3C8.05446 3 8.24753 3.08911 8.42574 3.26733L16.1782 11.0644C16.3267 11.1832 16.4307 11.324 16.4901 11.4867C16.5495 11.6507 16.5792 11.8218 16.5792 12C16.5792 12.1782 16.5495 12.3487 16.4901 12.5115C16.4307 12.6754 16.3267 12.8168 16.1782 12.9356L8.42574 20.6881C8.24753 20.896 8.05446 21 7.84654 21C7.63861 21 7.44555 20.896 7.26733 20.6881Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-[10px] pt-[20px]">
            <div className="flex gap-[10px] items-center">
              <div
                style={{ fontFamily: "Poppins" }}
                className="flex text-[#000] items-center bg-[#FFF] py-[5px] px-[8px] rounded-[4px] font-[500] leading-[150%]"
              >
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5 11.75C12.9833 11.75 13.396 11.5793 13.738 11.238C14.0793 10.896 14.25 10.4833 14.25 10C14.25 9.51667 14.0793 9.104 13.738 8.762C13.396 8.42067 12.9833 8.25 12.5 8.25C12.0167 8.25 11.604 8.42067 11.262 8.762C10.9207 9.104 10.75 9.51667 10.75 10C10.75 10.4833 10.9207 10.896 11.262 11.238C11.604 11.5793 12.0167 11.75 12.5 11.75ZM12.5 19.8C14.5667 17.9667 16.125 16.2123 17.175 14.537C18.225 12.8623 18.75 11.4167 18.75 10.2C18.75 8.3 18.146 6.75 16.938 5.55C15.7293 4.35 14.25 3.75 12.5 3.75C10.75 3.75 9.27067 4.35 8.062 5.55C6.854 6.75 6.25 8.3 6.25 10.2C6.25 11.4167 6.775 12.8623 7.825 14.537C8.875 16.2123 10.4333 17.9667 12.5 19.8ZM12.5 21.45C12.3833 21.45 12.2667 21.4333 12.15 21.4C12.0333 21.3667 11.925 21.3083 11.825 21.225C9.45833 19.075 7.68767 17.0833 6.513 15.25C5.33767 13.4167 4.75 11.7333 4.75 10.2C4.75 7.78333 5.52933 5.854 7.088 4.412C8.646 2.97067 10.45 2.25 12.5 2.25C14.55 2.25 16.3543 2.97067 17.913 4.412C19.471 5.854 20.25 7.78333 20.25 10.2C20.25 11.7333 19.6627 13.4167 18.488 15.25C17.3127 17.0833 15.5417 19.075 13.175 21.225C13.075 21.3083 12.9667 21.3667 12.85 21.4C12.7333 21.4333 12.6167 21.45 12.5 21.45Z"
                    fill="#004643"
                  />
                </svg>
                Amawbia
              </div>
              <div
                style={{ fontFamily: "Poppins" }}
                className="font-[600] text-[#fff] leading-[150%]"
              >
                <p>N540,000</p>
              </div>
            </div>
            <div
              style={{ fontFamily: "Poppins" }}
              className="flex items-center font-[500] leading-[150%] text-[#fff] gap-[10px]"
            >
              <div className="flex">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.75 18.5C3.53333 18.5 3.35433 18.4293 3.213 18.288C3.071 18.146 3 17.9667 3 17.75V13C3 12.6333 3.08767 12.275 3.263 11.925C3.43767 11.575 3.68333 11.2833 4 11.05V8.5C4 7.8 4.24167 7.20833 4.725 6.725C5.20833 6.24167 5.8 6 6.5 6H10.75C11.1167 6 11.4417 6.071 11.725 6.213C12.0083 6.35433 12.2667 6.55 12.5 6.8C12.7333 6.55 12.9917 6.35433 13.275 6.213C13.5583 6.071 13.8833 6 14.25 6H18.5C19.2 6 19.7917 6.24167 20.275 6.725C20.7583 7.20833 21 7.8 21 8.5V11.05C21.3167 11.2833 21.5627 11.575 21.738 11.925C21.9127 12.275 22 12.6333 22 13V17.75C22 17.9667 21.9293 18.146 21.788 18.288C21.646 18.4293 21.4667 18.5 21.25 18.5C21.0333 18.5 20.854 18.4293 20.712 18.288C20.5707 18.146 20.5 17.9667 20.5 17.75V16.5H4.5V17.75C4.5 17.9667 4.42933 18.146 4.288 18.288C4.146 18.4293 3.96667 18.5 3.75 18.5ZM13.25 10.5H19.5V8.5C19.5 8.21667 19.404 7.979 19.212 7.787C19.0207 7.59567 18.7833 7.5 18.5 7.5H14.25C13.9667 7.5 13.7293 7.59567 13.538 7.787C13.346 7.979 13.25 8.21667 13.25 8.5V10.5ZM5.5 10.5H11.75V8.5C11.75 8.21667 11.6543 7.979 11.463 7.787C11.271 7.59567 11.0333 7.5 10.75 7.5H6.5C6.21667 7.5 5.979 7.59567 5.787 7.787C5.59567 7.979 5.5 8.21667 5.5 8.5V10.5ZM4.5 15H20.5V13C20.5 12.7167 20.404 12.479 20.212 12.287C20.0207 12.0957 19.7833 12 19.5 12H5.5C5.21667 12 4.979 12.0957 4.787 12.287C4.59567 12.479 4.5 12.7167 4.5 13V15ZM20.5 15H4.5H20.5Z"
                    fill="white"
                  />
                </svg>

                <p>3 bd</p>
              </div>
              <div className="flex">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.8 21.5C4.3 21.5 3.875 21.325 3.525 20.975C3.175 20.625 3 20.2 3 19.7V4.3C3 3.8 3.175 3.375 3.525 3.025C3.875 2.675 4.3 2.5 4.8 2.5H20.2C20.7 2.5 21.125 2.675 21.475 3.025C21.825 3.375 22 3.8 22 4.3V19.7C22 20.2 21.825 20.625 21.475 20.975C21.125 21.325 20.7 21.5 20.2 21.5H4.8ZM4.8 20H20.2C20.2667 20 20.3333 19.9667 20.4 19.9C20.4667 19.8333 20.5 19.7667 20.5 19.7V4.3C20.5 4.23333 20.4667 4.16667 20.4 4.1C20.3333 4.03333 20.2667 4 20.2 4H4.8C4.73333 4 4.66667 4.03333 4.6 4.1C4.53333 4.16667 4.5 4.23333 4.5 4.3V19.7C4.5 19.7667 4.53333 19.8333 4.6 19.9C4.66667 19.9667 4.73333 20 4.8 20ZM9.5 17.875C9.75 17.875 9.95833 17.7917 10.125 17.625C10.2917 17.4583 10.375 17.25 10.375 17C10.375 16.75 10.2917 16.5417 10.125 16.375C9.95833 16.2083 9.75 16.125 9.5 16.125C9.25 16.125 9.04167 16.2083 8.875 16.375C8.70833 16.5417 8.625 16.75 8.625 17C8.625 17.25 8.70833 17.4583 8.875 17.625C9.04167 17.7917 9.25 17.875 9.5 17.875ZM12.5 17.875C12.75 17.875 12.9583 17.7917 13.125 17.625C13.2917 17.4583 13.375 17.25 13.375 17C13.375 16.75 13.2917 16.5417 13.125 16.375C12.9583 16.2083 12.75 16.125 12.5 16.125C12.25 16.125 12.0417 16.2083 11.875 16.375C11.7083 16.5417 11.625 16.75 11.625 17C11.625 17.25 11.7083 17.4583 11.875 17.625C12.0417 17.7917 12.25 17.875 12.5 17.875ZM15.5 17.875C15.75 17.875 15.9583 17.7917 16.125 17.625C16.2917 17.4583 16.375 17.25 16.375 17C16.375 16.75 16.2917 16.5417 16.125 16.375C15.9583 16.2083 15.75 16.125 15.5 16.125C15.25 16.125 15.0417 16.2083 14.875 16.375C14.7083 16.5417 14.625 16.75 14.625 17C14.625 17.25 14.7083 17.4583 14.875 17.625C15.0417 17.7917 15.25 17.875 15.5 17.875ZM9.5 14.875C9.75 14.875 9.95833 14.7917 10.125 14.625C10.2917 14.4583 10.375 14.25 10.375 14C10.375 13.75 10.2917 13.5417 10.125 13.375C9.95833 13.2083 9.75 13.125 9.5 13.125C9.25 13.125 9.04167 13.2083 8.875 13.375C8.70833 13.5417 8.625 13.75 8.625 14C8.625 14.25 8.70833 14.4583 8.875 14.625C9.04167 14.7917 9.25 14.875 9.5 14.875ZM12.5 14.875C12.75 14.875 12.9583 14.7917 13.125 14.625C13.2917 14.4583 13.375 14.25 13.375 14C13.375 13.75 13.2917 13.5417 13.125 13.375C12.9583 13.2083 12.75 13.125 12.5 13.125C12.25 13.125 12.0417 13.2083 11.875 13.375C11.7083 13.5417 11.625 13.75 11.625 14C11.625 14.25 11.7083 14.4583 11.875 14.625C12.0417 14.7917 12.25 14.875 12.5 14.875ZM15.5 14.875C15.75 14.875 15.9583 14.7917 16.125 14.625C16.2917 14.4583 16.375 14.25 16.375 14C16.375 13.75 16.2917 13.5417 16.125 13.375C15.9583 13.2083 15.75 13.125 15.5 13.125C15.25 13.125 15.0417 13.2083 14.875 13.375C14.7083 13.5417 14.625 13.75 14.625 14C14.625 14.25 14.7083 14.4583 14.875 14.625C15.0417 14.7917 15.25 14.875 15.5 14.875ZM8.5 11.7H16.5C16.7 11.7 16.8667 11.6333 17 11.5C17.1333 11.3667 17.2 11.2 17.2 11C17.2 9.7 16.7417 8.59167 15.825 7.675C14.9083 6.75833 13.8 6.3 12.5 6.3C11.2 6.3 10.0917 6.75833 9.175 7.675C8.25833 8.59167 7.8 9.7 7.8 11C7.8 11.2 7.86667 11.3667 8 11.5C8.13333 11.6333 8.3 11.7 8.5 11.7ZM9.05 10.5C9.18333 9.65 9.571 8.93767 10.213 8.363C10.8543 7.78767 11.6167 7.5 12.5 7.5C13.3833 7.5 14.146 7.78767 14.788 8.363C15.4293 8.93767 15.8167 9.65 15.95 10.5H9.05ZM4.8 4H4.5H20.5H20.2H4.8Z"
                    fill="white"
                  />
                </svg>

                <p>3 ba</p>
              </div>
              <div className="flex">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.87505 20.325C5.40838 20.325 5.00838 20.1583 4.67505 19.825C4.34172 19.4917 4.17505 19.0917 4.17505 18.625V5.37499C4.17505 4.90832 4.34172 4.50832 4.67505 4.17499C5.00838 3.84165 5.40838 3.67499 5.87505 3.67499H19.125C19.5917 3.67499 19.9917 3.84165 20.3251 4.17499C20.6584 4.50832 20.8251 4.90832 20.8251 5.37499V18.625C20.8251 19.0917 20.6584 19.4917 20.3251 19.825C19.9917 20.1583 19.5917 20.325 19.125 20.325H5.87505ZM5.90005 18.925H11.8V5.07499H5.90005C5.81672 5.07499 5.74172 5.10832 5.67505 5.17499C5.60838 5.24165 5.57505 5.31665 5.57505 5.39999V18.6C5.57505 18.6833 5.60838 18.7583 5.67505 18.825C5.74172 18.8917 5.81672 18.925 5.90005 18.925ZM13.2 18.925H19.1C19.1834 18.925 19.2584 18.8917 19.325 18.825C19.3917 18.7583 19.425 18.6833 19.425 18.6V12H13.2V18.925ZM13.2 10.6H19.425V5.39999C19.425 5.31665 19.3917 5.24165 19.325 5.17499C19.2584 5.10832 19.1834 5.07499 19.1 5.07499H13.2V10.6Z"
                    fill="white"
                  />
                </svg>

                <p>2500 sqft</p>
              </div>
            </div>
            <div
              style={{ fontFamily: "Poppins" }}
              className="flex items-center font-[500] leading-[150%] text-[#fff] gap-[10px]"
            >
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.475 15.975C15.6083 16.1083 15.7666 16.175 15.95 16.175C16.1333 16.175 16.3 16.1 16.45 15.95C16.6 15.8 16.675 15.6333 16.675 15.45C16.675 15.2667 16.6 15.1 16.45 14.95L13.2 11.725V7.72501C13.2 7.54168 13.1333 7.38335 13 7.25001C12.8666 7.11668 12.7 7.05001 12.5 7.05001C12.3166 7.05001 12.1543 7.12068 12.013 7.26201C11.871 7.40401 11.8 7.56668 11.8 7.75001V11.925C11.8 12.0417 11.821 12.15 11.863 12.25C11.9043 12.35 11.9666 12.4417 12.05 12.525L15.475 15.975ZM12.5 21.3C11.2166 21.3 10.0083 21.054 8.87495 20.562C7.74162 20.0707 6.75828 19.4083 5.92495 18.575C5.09162 17.7417 4.42928 16.7583 3.93795 15.625C3.44595 14.4917 3.19995 13.2833 3.19995 12C3.19995 10.7167 3.44595 9.50835 3.93795 8.37501C4.42928 7.24168 5.09162 6.25835 5.92495 5.42501C6.75828 4.59168 7.74162 3.92901 8.87495 3.43701C10.0083 2.94568 11.2166 2.70001 12.5 2.70001C13.7833 2.70001 14.9916 2.94568 16.125 3.43701C17.2583 3.92901 18.2416 4.59168 19.075 5.42501C19.9083 6.25835 20.5706 7.24168 21.062 8.37501C21.554 9.50835 21.7999 10.7167 21.7999 12C21.7999 13.2833 21.554 14.4917 21.062 15.625C20.5706 16.7583 19.9083 17.7417 19.075 18.575C18.2416 19.4083 17.2583 20.0707 16.125 20.562C14.9916 21.054 13.7833 21.3 12.5 21.3ZM12.5 19.9C14.6833 19.9 16.546 19.129 18.088 17.587C19.6293 16.0457 20.4 14.1833 20.4 12C20.4 9.81668 19.6293 7.95401 18.088 6.41201C16.546 4.87068 14.6833 4.10001 12.5 4.10001C10.3166 4.10001 8.45395 4.87068 6.91195 6.41201C5.37062 7.95401 4.59995 9.81668 4.59995 12C4.59995 14.1833 5.37062 16.0457 6.91195 17.587C8.45395 19.129 10.3166 19.9 12.5 19.9Z"
                  fill="white"
                />
              </svg>

              <p>4 days ago</p>
            </div>
          </div>
        </div>
        <div className="bg-[url('/src/Component/Assets/Apart_Asset/png(2).png')] bg-no-repeat bg-cover bg-center h-[296px]">
          <div
            onClick={() => sideDrop(!drop)}
            className="px-[20px] flex justify-between pt-[130px]"
          >
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.1535 20.6881L7.40099 12.9356C7.25248 12.8168 7.14852 12.6683 7.08911 12.4901C7.0297 12.3119 7 12.1485 7 12C7 11.8218 7.0297 11.6507 7.08911 11.4867C7.14852 11.324 7.25248 11.1832 7.40099 11.0644L15.1535 3.26733C15.3317 3.08911 15.5248 3 15.7327 3C15.9406 3 16.1337 3.08911 16.3119 3.26733C16.4901 3.47525 16.5792 3.68317 16.5792 3.89109C16.5792 4.09901 16.4901 4.29208 16.3119 4.4703L8.78218 12L16.3119 19.5297C16.4901 19.7079 16.5792 19.901 16.5792 20.1089C16.5792 20.3168 16.4901 20.5099 16.3119 20.6881C16.1337 20.896 15.9406 21 15.7327 21C15.5248 21 15.3317 20.896 15.1535 20.6881Z"
                  fill="white"
                />
              </svg>
            </div>
            {drop ? (
              <div></div>
            ) : (
              <div className="top-0 right-0 fixed h-[100vh] w-[100%]">
                <div className="bg-[url('/src/Component/Assets/Apart_Asset/slide.png')] bg-no-repeat bg-center bg-cover h-[30vh] p-[20px]">
                  <div>
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="32" height="32" rx="4" fill="white" />
                      <path
                        d="M17.2534 15.9999L24.6223 8.63106C24.7679 8.46101 24.844 8.24228 24.8353 8.01857C24.8267 7.79485 24.734 7.58264 24.5757 7.42434C24.4173 7.26603 24.2051 7.17329 23.9814 7.16465C23.7577 7.15601 23.539 7.2321 23.3689 7.37773L16 14.7466L8.63116 7.36884C8.46377 7.20146 8.23676 7.10742 8.00004 7.10742C7.76333 7.10742 7.53631 7.20146 7.36893 7.36884C7.20155 7.53622 7.10752 7.76324 7.10752 7.99995C7.10752 8.23666 7.20155 8.46368 7.36893 8.63106L14.7467 15.9999L7.36893 23.3688C7.27588 23.4485 7.20031 23.5466 7.14695 23.6569C7.0936 23.7671 7.06362 23.8873 7.05889 24.0097C7.05416 24.1321 7.07479 24.2542 7.11948 24.3682C7.16417 24.4823 7.23195 24.5859 7.31858 24.6725C7.4052 24.7592 7.5088 24.8269 7.62287 24.8716C7.73693 24.9163 7.85901 24.9369 7.98142 24.9322C8.10384 24.9275 8.22396 24.8975 8.33424 24.8441C8.44452 24.7908 8.54258 24.7152 8.62227 24.6222L16 17.2533L23.3689 24.6222C23.539 24.7678 23.7577 24.8439 23.9814 24.8352C24.2051 24.8266 24.4173 24.7339 24.5757 24.5756C24.734 24.4173 24.8267 24.205 24.8353 23.9813C24.844 23.7576 24.7679 23.5389 24.6223 23.3688L17.2534 15.9999Z"
                        fill="#004643"
                      />
                    </svg>
                  </div>
                </div>
                <div className="bg-[#fff] h-[70vh]">
                  <div className="flex justify-around gap-[20px] px-[20px] py-[30px]">
                    <div>
                      <img src={img2} alt="img" />
                    </div>
                    <div>
                      <img src={img} alt="img" />
                    </div>
                    <div>
                      <img src={img3} alt="img" />
                    </div>
                  </div>

                  <div className="px-[20px] flex justify-between items-center">
                    <div
                      style={{ fontFamily: "Poppins" }}
                      className="flex font-[400] leading-[170%] text-[#000] flex-col gap-[30px]"
                    >
                      <div className="flex flex-col gap-[10px]">
                        <p>Neighborhood</p>
                        <p>Rental Amount</p>
                      </div>
                      <div className="flex flex-col gap-[10px]">
                        <p>Bedrooms</p>
                        <p>Bedrooms</p>
                      </div>
                      <div className="flex flex-col gap-[10px]">
                        <p>Square Footage</p>
                        <p>Listing Found</p>
                      </div>
                    </div>
                    <div
                      style={{ fontFamily: "Poppins" }}
                      className="flex font-[600] leading-[170%] text-[#000] flex-col gap-[30px]"
                    >
                      <div className="flex flex-col gap-[10px]">
                        <p>Amawbia, Awka</p>
                        <p>N240,000/yr</p>
                      </div>
                      <div className="flex flex-col gap-[10px]">
                        <p>1</p>
                        <p>1</p>
                      </div>
                      <div className="flex flex-col gap-[10px]">
                        <p>800 sf</p>
                        <p>2 days ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.26733 20.6881C7.08911 20.5099 7 20.3168 7 20.1089C7 19.901 7.08911 19.7079 7.26733 19.5297L14.797 12L7.26733 4.4703C7.08911 4.29208 7 4.09901 7 3.89109C7 3.68317 7.08911 3.47525 7.26733 3.26733C7.44555 3.08911 7.63861 3 7.84654 3C8.05446 3 8.24753 3.08911 8.42574 3.26733L16.1782 11.0644C16.3267 11.1832 16.4307 11.324 16.4901 11.4867C16.5495 11.6507 16.5792 11.8218 16.5792 12C16.5792 12.1782 16.5495 12.3487 16.4901 12.5115C16.4307 12.6754 16.3267 12.8168 16.1782 12.9356L8.42574 20.6881C8.24753 20.896 8.05446 21 7.84654 21C7.63861 21 7.44555 20.896 7.26733 20.6881Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-[10px] pt-[20px]">
            <div className="flex gap-[10px] items-center">
              <div
                style={{ fontFamily: "Poppins" }}
                className="flex text-[#000] items-center bg-[#FFF] py-[5px] px-[8px] rounded-[4px] font-[500] leading-[150%]"
              >
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5 11.75C12.9833 11.75 13.396 11.5793 13.738 11.238C14.0793 10.896 14.25 10.4833 14.25 10C14.25 9.51667 14.0793 9.104 13.738 8.762C13.396 8.42067 12.9833 8.25 12.5 8.25C12.0167 8.25 11.604 8.42067 11.262 8.762C10.9207 9.104 10.75 9.51667 10.75 10C10.75 10.4833 10.9207 10.896 11.262 11.238C11.604 11.5793 12.0167 11.75 12.5 11.75ZM12.5 19.8C14.5667 17.9667 16.125 16.2123 17.175 14.537C18.225 12.8623 18.75 11.4167 18.75 10.2C18.75 8.3 18.146 6.75 16.938 5.55C15.7293 4.35 14.25 3.75 12.5 3.75C10.75 3.75 9.27067 4.35 8.062 5.55C6.854 6.75 6.25 8.3 6.25 10.2C6.25 11.4167 6.775 12.8623 7.825 14.537C8.875 16.2123 10.4333 17.9667 12.5 19.8ZM12.5 21.45C12.3833 21.45 12.2667 21.4333 12.15 21.4C12.0333 21.3667 11.925 21.3083 11.825 21.225C9.45833 19.075 7.68767 17.0833 6.513 15.25C5.33767 13.4167 4.75 11.7333 4.75 10.2C4.75 7.78333 5.52933 5.854 7.088 4.412C8.646 2.97067 10.45 2.25 12.5 2.25C14.55 2.25 16.3543 2.97067 17.913 4.412C19.471 5.854 20.25 7.78333 20.25 10.2C20.25 11.7333 19.6627 13.4167 18.488 15.25C17.3127 17.0833 15.5417 19.075 13.175 21.225C13.075 21.3083 12.9667 21.3667 12.85 21.4C12.7333 21.4333 12.6167 21.45 12.5 21.45Z"
                    fill="#004643"
                  />
                </svg>
                Ifite
              </div>
              <div
                style={{ fontFamily: "Poppins" }}
                className="font-[600] text-[#fff] leading-[150%]"
              >
                <p>N200,000</p>
              </div>
            </div>
            <div
              style={{ fontFamily: "Poppins" }}
              className="flex items-center font-[500] leading-[150%] text-[#fff] gap-[10px]"
            >
              <div className="flex">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.75 18.5C3.53333 18.5 3.35433 18.4293 3.213 18.288C3.071 18.146 3 17.9667 3 17.75V13C3 12.6333 3.08767 12.275 3.263 11.925C3.43767 11.575 3.68333 11.2833 4 11.05V8.5C4 7.8 4.24167 7.20833 4.725 6.725C5.20833 6.24167 5.8 6 6.5 6H10.75C11.1167 6 11.4417 6.071 11.725 6.213C12.0083 6.35433 12.2667 6.55 12.5 6.8C12.7333 6.55 12.9917 6.35433 13.275 6.213C13.5583 6.071 13.8833 6 14.25 6H18.5C19.2 6 19.7917 6.24167 20.275 6.725C20.7583 7.20833 21 7.8 21 8.5V11.05C21.3167 11.2833 21.5627 11.575 21.738 11.925C21.9127 12.275 22 12.6333 22 13V17.75C22 17.9667 21.9293 18.146 21.788 18.288C21.646 18.4293 21.4667 18.5 21.25 18.5C21.0333 18.5 20.854 18.4293 20.712 18.288C20.5707 18.146 20.5 17.9667 20.5 17.75V16.5H4.5V17.75C4.5 17.9667 4.42933 18.146 4.288 18.288C4.146 18.4293 3.96667 18.5 3.75 18.5ZM13.25 10.5H19.5V8.5C19.5 8.21667 19.404 7.979 19.212 7.787C19.0207 7.59567 18.7833 7.5 18.5 7.5H14.25C13.9667 7.5 13.7293 7.59567 13.538 7.787C13.346 7.979 13.25 8.21667 13.25 8.5V10.5ZM5.5 10.5H11.75V8.5C11.75 8.21667 11.6543 7.979 11.463 7.787C11.271 7.59567 11.0333 7.5 10.75 7.5H6.5C6.21667 7.5 5.979 7.59567 5.787 7.787C5.59567 7.979 5.5 8.21667 5.5 8.5V10.5ZM4.5 15H20.5V13C20.5 12.7167 20.404 12.479 20.212 12.287C20.0207 12.0957 19.7833 12 19.5 12H5.5C5.21667 12 4.979 12.0957 4.787 12.287C4.59567 12.479 4.5 12.7167 4.5 13V15ZM20.5 15H4.5H20.5Z"
                    fill="white"
                  />
                </svg>

                <p>1 bd</p>
              </div>
              <div className="flex">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.8 21.5C4.3 21.5 3.875 21.325 3.525 20.975C3.175 20.625 3 20.2 3 19.7V4.3C3 3.8 3.175 3.375 3.525 3.025C3.875 2.675 4.3 2.5 4.8 2.5H20.2C20.7 2.5 21.125 2.675 21.475 3.025C21.825 3.375 22 3.8 22 4.3V19.7C22 20.2 21.825 20.625 21.475 20.975C21.125 21.325 20.7 21.5 20.2 21.5H4.8ZM4.8 20H20.2C20.2667 20 20.3333 19.9667 20.4 19.9C20.4667 19.8333 20.5 19.7667 20.5 19.7V4.3C20.5 4.23333 20.4667 4.16667 20.4 4.1C20.3333 4.03333 20.2667 4 20.2 4H4.8C4.73333 4 4.66667 4.03333 4.6 4.1C4.53333 4.16667 4.5 4.23333 4.5 4.3V19.7C4.5 19.7667 4.53333 19.8333 4.6 19.9C4.66667 19.9667 4.73333 20 4.8 20ZM9.5 17.875C9.75 17.875 9.95833 17.7917 10.125 17.625C10.2917 17.4583 10.375 17.25 10.375 17C10.375 16.75 10.2917 16.5417 10.125 16.375C9.95833 16.2083 9.75 16.125 9.5 16.125C9.25 16.125 9.04167 16.2083 8.875 16.375C8.70833 16.5417 8.625 16.75 8.625 17C8.625 17.25 8.70833 17.4583 8.875 17.625C9.04167 17.7917 9.25 17.875 9.5 17.875ZM12.5 17.875C12.75 17.875 12.9583 17.7917 13.125 17.625C13.2917 17.4583 13.375 17.25 13.375 17C13.375 16.75 13.2917 16.5417 13.125 16.375C12.9583 16.2083 12.75 16.125 12.5 16.125C12.25 16.125 12.0417 16.2083 11.875 16.375C11.7083 16.5417 11.625 16.75 11.625 17C11.625 17.25 11.7083 17.4583 11.875 17.625C12.0417 17.7917 12.25 17.875 12.5 17.875ZM15.5 17.875C15.75 17.875 15.9583 17.7917 16.125 17.625C16.2917 17.4583 16.375 17.25 16.375 17C16.375 16.75 16.2917 16.5417 16.125 16.375C15.9583 16.2083 15.75 16.125 15.5 16.125C15.25 16.125 15.0417 16.2083 14.875 16.375C14.7083 16.5417 14.625 16.75 14.625 17C14.625 17.25 14.7083 17.4583 14.875 17.625C15.0417 17.7917 15.25 17.875 15.5 17.875ZM9.5 14.875C9.75 14.875 9.95833 14.7917 10.125 14.625C10.2917 14.4583 10.375 14.25 10.375 14C10.375 13.75 10.2917 13.5417 10.125 13.375C9.95833 13.2083 9.75 13.125 9.5 13.125C9.25 13.125 9.04167 13.2083 8.875 13.375C8.70833 13.5417 8.625 13.75 8.625 14C8.625 14.25 8.70833 14.4583 8.875 14.625C9.04167 14.7917 9.25 14.875 9.5 14.875ZM12.5 14.875C12.75 14.875 12.9583 14.7917 13.125 14.625C13.2917 14.4583 13.375 14.25 13.375 14C13.375 13.75 13.2917 13.5417 13.125 13.375C12.9583 13.2083 12.75 13.125 12.5 13.125C12.25 13.125 12.0417 13.2083 11.875 13.375C11.7083 13.5417 11.625 13.75 11.625 14C11.625 14.25 11.7083 14.4583 11.875 14.625C12.0417 14.7917 12.25 14.875 12.5 14.875ZM15.5 14.875C15.75 14.875 15.9583 14.7917 16.125 14.625C16.2917 14.4583 16.375 14.25 16.375 14C16.375 13.75 16.2917 13.5417 16.125 13.375C15.9583 13.2083 15.75 13.125 15.5 13.125C15.25 13.125 15.0417 13.2083 14.875 13.375C14.7083 13.5417 14.625 13.75 14.625 14C14.625 14.25 14.7083 14.4583 14.875 14.625C15.0417 14.7917 15.25 14.875 15.5 14.875ZM8.5 11.7H16.5C16.7 11.7 16.8667 11.6333 17 11.5C17.1333 11.3667 17.2 11.2 17.2 11C17.2 9.7 16.7417 8.59167 15.825 7.675C14.9083 6.75833 13.8 6.3 12.5 6.3C11.2 6.3 10.0917 6.75833 9.175 7.675C8.25833 8.59167 7.8 9.7 7.8 11C7.8 11.2 7.86667 11.3667 8 11.5C8.13333 11.6333 8.3 11.7 8.5 11.7ZM9.05 10.5C9.18333 9.65 9.571 8.93767 10.213 8.363C10.8543 7.78767 11.6167 7.5 12.5 7.5C13.3833 7.5 14.146 7.78767 14.788 8.363C15.4293 8.93767 15.8167 9.65 15.95 10.5H9.05ZM4.8 4H4.5H20.5H20.2H4.8Z"
                    fill="white"
                  />
                </svg>

                <p>1 ba</p>
              </div>
              <div className="flex">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.87505 20.325C5.40838 20.325 5.00838 20.1583 4.67505 19.825C4.34172 19.4917 4.17505 19.0917 4.17505 18.625V5.37499C4.17505 4.90832 4.34172 4.50832 4.67505 4.17499C5.00838 3.84165 5.40838 3.67499 5.87505 3.67499H19.125C19.5917 3.67499 19.9917 3.84165 20.3251 4.17499C20.6584 4.50832 20.8251 4.90832 20.8251 5.37499V18.625C20.8251 19.0917 20.6584 19.4917 20.3251 19.825C19.9917 20.1583 19.5917 20.325 19.125 20.325H5.87505ZM5.90005 18.925H11.8V5.07499H5.90005C5.81672 5.07499 5.74172 5.10832 5.67505 5.17499C5.60838 5.24165 5.57505 5.31665 5.57505 5.39999V18.6C5.57505 18.6833 5.60838 18.7583 5.67505 18.825C5.74172 18.8917 5.81672 18.925 5.90005 18.925ZM13.2 18.925H19.1C19.1834 18.925 19.2584 18.8917 19.325 18.825C19.3917 18.7583 19.425 18.6833 19.425 18.6V12H13.2V18.925ZM13.2 10.6H19.425V5.39999C19.425 5.31665 19.3917 5.24165 19.325 5.17499C19.2584 5.10832 19.1834 5.07499 19.1 5.07499H13.2V10.6Z"
                    fill="white"
                  />
                </svg>

                <p>900 sqft</p>
              </div>
            </div>
            <div
              style={{ fontFamily: "Poppins" }}
              className="flex items-center font-[500] leading-[150%] text-[#fff] gap-[10px]"
            >
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.475 15.975C15.6083 16.1083 15.7666 16.175 15.95 16.175C16.1333 16.175 16.3 16.1 16.45 15.95C16.6 15.8 16.675 15.6333 16.675 15.45C16.675 15.2667 16.6 15.1 16.45 14.95L13.2 11.725V7.72501C13.2 7.54168 13.1333 7.38335 13 7.25001C12.8666 7.11668 12.7 7.05001 12.5 7.05001C12.3166 7.05001 12.1543 7.12068 12.013 7.26201C11.871 7.40401 11.8 7.56668 11.8 7.75001V11.925C11.8 12.0417 11.821 12.15 11.863 12.25C11.9043 12.35 11.9666 12.4417 12.05 12.525L15.475 15.975ZM12.5 21.3C11.2166 21.3 10.0083 21.054 8.87495 20.562C7.74162 20.0707 6.75828 19.4083 5.92495 18.575C5.09162 17.7417 4.42928 16.7583 3.93795 15.625C3.44595 14.4917 3.19995 13.2833 3.19995 12C3.19995 10.7167 3.44595 9.50835 3.93795 8.37501C4.42928 7.24168 5.09162 6.25835 5.92495 5.42501C6.75828 4.59168 7.74162 3.92901 8.87495 3.43701C10.0083 2.94568 11.2166 2.70001 12.5 2.70001C13.7833 2.70001 14.9916 2.94568 16.125 3.43701C17.2583 3.92901 18.2416 4.59168 19.075 5.42501C19.9083 6.25835 20.5706 7.24168 21.062 8.37501C21.554 9.50835 21.7999 10.7167 21.7999 12C21.7999 13.2833 21.554 14.4917 21.062 15.625C20.5706 16.7583 19.9083 17.7417 19.075 18.575C18.2416 19.4083 17.2583 20.0707 16.125 20.562C14.9916 21.054 13.7833 21.3 12.5 21.3ZM12.5 19.9C14.6833 19.9 16.546 19.129 18.088 17.587C19.6293 16.0457 20.4 14.1833 20.4 12C20.4 9.81668 19.6293 7.95401 18.088 6.41201C16.546 4.87068 14.6833 4.10001 12.5 4.10001C10.3166 4.10001 8.45395 4.87068 6.91195 6.41201C5.37062 7.95401 4.59995 9.81668 4.59995 12C4.59995 14.1833 5.37062 16.0457 6.91195 17.587C8.45395 19.129 10.3166 19.9 12.5 19.9Z"
                  fill="white"
                />
              </svg>

              <p>16 days ago</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
