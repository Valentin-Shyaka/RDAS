import React from "react";
import NavHeader from "../NavHeader";
import Sidebar from "../Sidebar";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import MusicPlayer from "../MusicPlayer";
import OpacityRoundedIcon from "@mui/icons-material/OpacityRounded";
import AirRoundedIcon from "@mui/icons-material/AirRounded";
import BluetoothRoundedIcon from "@mui/icons-material/BluetoothRounded";
import SmsRoundedIcon from "@mui/icons-material/SmsRounded";
import AirlineSeatReclineExtraRoundedIcon from "@mui/icons-material/AirlineSeatReclineExtraRounded";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import Switch, { SwitchProps } from "@mui/material/Switch";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LightModeIcon from "@mui/icons-material/LightMode";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import TonalityIcon from "@mui/icons-material/Tonality";
import ApexChart from "../ReactApexChart";
import { useNavigate } from "react-router-dom";

import { styled } from "@mui/material/styles";

const Dashboard = () => {
  const navigate = useNavigate();
  const IOSSwitch = styled((props: SwitchProps) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor:
            theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
          opacity: 1,
          border: 0,
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#33cf4d",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color:
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 22,
      height: 22,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  }));

  return (
    <div className="p-4 h-full">
      <NavHeader title={"Dashboard"} />
      <div className="flex items-center w-full h-[80vh] gap-10">
        <Sidebar />

        <div className="">
          <div className="">
            <div className="flex gap-8 text-[0.7rem]">
              <div className="w-[25vw] h-[50vh] bg-[#1E1E1E] rounded-2xl relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="331"
                  height="448"
                  viewBox="0 0 358 448"
                  fill="none"
                  className=" object-cover w-full h-[100%]"
                >
                  <path
                    d="M123.973 385.444L47 448H28L109 382.847L19.1397 342.806L0 362.87V342.806L11 333.776L0 330.766V319.731L19.1397 326.919V303.856L0 295.653V285.12L14.3548 288.13L79.1689 263.048L0 240.476V229.44L85.2588 194.829L0 167.742V157.709L101.354 189.813L165.733 164.23L0 113.567V93.5033L73.079 66.4155L0 43.3412V30.8014L92.6537 59.3928L217.497 5.72067C224.022 4.2149 237.942 -3.8101 260.561 2.20939L338.425 26.2869L358 19.7659V30.8014L205.317 93.5033C210.102 96.3457 224.37 103.134 243.162 107.548L358 63.4064V74.4419L327 88.9881L358 93.5033V105.04C346.255 104.204 316.332 100.024 304.5 100.024C270.86 113.902 198.46 137.248 191.5 141.261L180 197.337C231.329 197.839 342.688 199.645 358 202.855V213.389C313.196 214.058 213.06 213.79 180 207.37C174.49 224.926 166.429 262.848 169.213 274.085H358V285.12C304.061 284.618 185.616 281.508 171 285.12C150 298.667 121 317.694 134.5 336.144L202.272 371.899C208.072 371.063 222.804 369.391 235.332 369.391C259.401 370.896 317.633 378.019 358 394.472V405.508C321.896 392.633 243.684 370.596 219.672 385.444C230.692 390.125 256.124 400.693 269.696 405.508C286.661 408.852 328.072 415.541 358 415.541V425.573C329.29 425.573 264.563 421.56 235.332 405.508L196.182 385.444H123.973Z"
                    fill="#2B2B2B"
                  />
                </svg>
                <div className="absolute w-[90%] h-[10vh] rounded-lg bg-[#292929] top-5 left-4 flex p-2 gap-4 items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="38"
                    viewBox="0 0 49 45"
                    fill="none"
                    className=""
                  >
                    <path
                      d="M7.62353 45H0V13.125H29.5412V0L48.6 15.9375L29.5412 32.8125V21.5625H7.62353V45Z"
                      fill="#CFF80B"
                    />
                  </svg>
                  <div>
                    <p className="text-xl font-bold">600m</p>
                    <span className="text-sm text-gray-500">
                      In 600m take turning right
                    </span>
                  </div>
                </div>
                <div className="absolute w-full h-[10vh] rounded-lg bg-[#292929] bottom-0 rounded-tl-none rounded-tr-none flex items-center justify-between p-2">
                  <div>
                    <p className="text-sm font-bold">club Town Gardens</p>
                    <span className="text-sm text-slate-400">
                      MM feeder road, Kalkoto
                    </span>
                    <div className="flex items-center w-full gap-2">
                      <p className="flex-1 text-sm text-slate-400 items-center  text-center gap-1">
                        2km
                      </p>
                      <div className="h-1 w-[150px] bg-slate-400">
                        <div className=" h-full w-[100px] bg-[#CFF80B]"></div>
                      </div>
                      <p className="flex-1 text-sm text-slate-400">3min</p>
                    </div>
                  </div>
                  <div className="rounded-full bg-[#1E1E1E] h-8 w-8 text-center text-xl flex-col ml-6 text-[#A1A1A1]">
                    <SearchRoundedIcon className="text-sm" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-8">
                <div className=" w-[20vw] h-fit bg-[#1E1E1E] rounded-2xl p-4 relative">
                  <div className="absolute left-40 top-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="54"
                      height="54"
                      viewBox="0 0 54 54"
                      fill="none"
                    >
                      <path
                        d="M13.2083 37.6476L13.375 37.5887V37.4119V32.0625C13.375 31.6813 13.5265 31.3156 13.796 31.046C14.0656 30.7764 14.4313 30.625 14.8125 30.625C15.1937 30.625 15.5594 30.7764 15.829 31.046C16.0985 31.3156 16.25 31.6813 16.25 32.0625V37.4119V37.5887L16.4167 37.6476C17.3554 37.9795 18.168 38.5943 18.7426 39.4074C19.3172 40.2205 19.6255 41.1917 19.625 42.1874C19.6245 43.0696 19.3816 43.9346 18.9227 44.6881C18.4639 45.4415 17.8067 46.0544 17.0231 46.4596C16.2395 46.8648 15.3596 47.0469 14.4796 46.9858C13.5995 46.9248 12.7531 46.623 12.033 46.1135C11.3128 45.604 10.7466 44.9063 10.3961 44.0968C10.0456 43.2872 9.92441 42.3969 10.0457 41.5231C10.167 40.6493 10.5262 39.8256 11.084 39.1421C11.6417 38.4587 12.3766 37.9416 13.2083 37.6476Z"
                        fill="#CFF80B"
                        stroke="black"
                        stroke-width="0.5"
                      />
                      <mask id="path-2-inside-1_1_367" fill="white">
                        <path d="M6.37501 8.4375C6.37501 6.19974 7.26395 4.05363 8.84629 2.47129C10.4286 0.888949 12.5747 0 14.8125 0C17.0503 0 19.1964 0.888949 20.7787 2.47129C22.3611 4.05363 23.25 6.19974 23.25 8.4375V33.9188C24.8779 35.5802 25.979 37.6853 26.4153 39.97C26.8516 42.2548 26.6037 44.6175 25.7026 46.7619C24.8015 48.9063 23.2874 50.7369 21.3501 52.0242C19.4128 53.3116 17.1385 53.9983 14.8125 53.9983C12.4865 53.9983 10.2122 53.3116 8.27491 52.0242C6.3376 50.7369 4.82347 48.9063 3.92239 46.7619C3.0213 44.6175 2.77337 42.2548 3.20968 39.97C3.64599 37.6853 4.74713 35.5802 6.37501 33.9188V8.4375ZM14.8125 3.375C13.4698 3.375 12.1822 3.90837 11.2328 4.85777C10.2834 5.80718 9.75001 7.09484 9.75001 8.4375V35.3936L9.18638 35.8999C7.91256 37.039 7.01466 38.5381 6.6115 40.1987C6.20833 41.8594 6.31891 43.6033 6.9286 45.1997C7.5383 46.7961 8.61836 48.1697 10.0259 49.1388C11.4334 50.1079 13.1019 50.6268 14.8108 50.6268C16.5197 50.6268 18.1883 50.1079 19.5958 49.1388C21.0033 48.1697 22.0833 46.7961 22.693 45.1997C23.3027 43.6033 23.4133 41.8594 23.0101 40.1987C22.607 38.5381 21.7091 37.039 20.4353 35.8999L19.875 35.3903V8.4375C19.875 7.09484 19.3416 5.80718 18.3922 4.85777C17.4428 3.90837 16.1552 3.375 14.8125 3.375ZM31.6875 6.75C32.1351 6.75 32.5643 6.92779 32.8808 7.24426C33.1972 7.56073 33.375 7.98995 33.375 8.4375V12.8014L35.5553 10.6178C35.8721 10.3009 36.3019 10.1229 36.75 10.1229C37.1981 10.1229 37.6279 10.3009 37.9448 10.6178C38.2616 10.9346 38.4396 11.3644 38.4396 11.8125C38.4396 12.2606 38.2616 12.6904 37.9448 13.0073L33.375 17.5736V24.0773L39.0079 20.8271L40.6785 14.5834C40.7361 14.3693 40.8353 14.1687 40.9705 13.993C41.1056 13.8172 41.2741 13.6698 41.4662 13.5592C41.6583 13.4486 41.8703 13.3769 42.0902 13.3482C42.31 13.3195 42.5333 13.3344 42.7474 13.392C42.9615 13.4496 43.1621 13.5488 43.3378 13.684C43.5135 13.8191 43.6609 13.9876 43.7715 14.1797C43.8822 14.3718 43.9539 14.5838 43.9826 14.8037C44.0113 15.0235 43.9964 15.2468 43.9388 15.4609L43.1389 18.4376L46.9189 16.2574C47.3063 16.0371 47.765 15.979 48.1951 16.0958C48.6251 16.2126 48.9915 16.4947 49.2143 16.8806C49.4372 17.2665 49.4983 17.7249 49.3844 18.1557C49.2705 18.5865 48.9908 18.9548 48.6064 19.1801L44.8264 21.3604L47.8099 22.1603C48.024 22.2179 48.2246 22.3171 48.4003 22.4522C48.576 22.5874 48.7234 22.7558 48.834 22.948C48.9447 23.1401 49.0164 23.3521 49.0451 23.5719C49.0738 23.7917 49.0589 24.0151 49.0013 24.2291C48.9436 24.4432 48.8444 24.6438 48.7093 24.8196C48.5741 24.9953 48.4057 25.1427 48.2136 25.2533C48.0214 25.3639 47.8094 25.4356 47.5896 25.4643C47.3698 25.493 47.1465 25.4781 46.9324 25.4205L40.6954 23.7499L35.0625 27L40.6954 30.2501L46.9358 28.5795C47.1512 28.5181 47.3766 28.5002 47.599 28.5268C47.8214 28.5534 48.0363 28.6241 48.2311 28.7346C48.4259 28.8451 48.5968 28.9933 48.7337 29.1706C48.8707 29.3478 48.971 29.5505 49.0288 29.7669C49.0866 29.9833 49.1007 30.209 49.0704 30.431C49.04 30.6529 48.9658 30.8665 48.852 31.0595C48.7383 31.2524 48.5872 31.4208 48.4077 31.5547C48.2282 31.6887 48.0238 31.7856 47.8065 31.8398L44.8264 32.6396L48.6064 34.8199C48.9908 35.0453 49.2705 35.4135 49.3844 35.8443C49.4983 36.2752 49.4372 36.7335 49.2143 37.1194C48.9915 37.5053 48.6251 37.7875 48.1951 37.9042C47.765 38.021 47.3063 37.9629 46.9189 37.7426L43.1389 35.5624L43.9388 38.5425C44.0002 38.7579 44.0181 38.9834 43.9915 39.2058C43.9648 39.4282 43.8942 39.643 43.7837 39.8379C43.6731 40.0327 43.5249 40.2035 43.3477 40.3405C43.1705 40.4774 42.9678 40.5777 42.7514 40.6355C42.535 40.6933 42.3092 40.7075 42.0873 40.6771C41.8654 40.6468 41.6517 40.5726 41.4588 40.4588C41.2659 40.345 41.0975 40.194 40.9635 40.0145C40.8296 39.835 40.7327 39.6306 40.6785 39.4133L39.0113 33.1763L33.375 29.9228V36.4264L37.9448 40.9928C38.1017 41.1497 38.2261 41.3359 38.311 41.5409C38.3959 41.7459 38.4396 41.9656 38.4396 42.1875C38.4396 42.4094 38.3959 42.6291 38.311 42.8341C38.2261 43.0391 38.1017 43.2254 37.9448 43.3823C37.7879 43.5392 37.6016 43.6636 37.3966 43.7485C37.1916 43.8334 36.9719 43.8771 36.75 43.8771C36.5281 43.8771 36.3084 43.8334 36.1034 43.7485C35.8984 43.6636 35.7122 43.5392 35.5553 43.3823L33.375 41.1986V45.5625C33.375 46.0101 33.1972 46.4393 32.8808 46.7558C32.5643 47.0722 32.1351 47.25 31.6875 47.25C31.24 47.25 30.8107 47.0722 30.4943 46.7558C30.1778 46.4393 30 46.0101 30 45.5625V8.4375C30 7.98995 30.1778 7.56073 30.4943 7.24426C30.8107 6.92779 31.24 6.75 31.6875 6.75Z" />
                      </mask>
                      <path
                        d="M6.37501 8.4375C6.37501 6.19974 7.26395 4.05363 8.84629 2.47129C10.4286 0.888949 12.5747 0 14.8125 0C17.0503 0 19.1964 0.888949 20.7787 2.47129C22.3611 4.05363 23.25 6.19974 23.25 8.4375V33.9188C24.8779 35.5802 25.979 37.6853 26.4153 39.97C26.8516 42.2548 26.6037 44.6175 25.7026 46.7619C24.8015 48.9063 23.2874 50.7369 21.3501 52.0242C19.4128 53.3116 17.1385 53.9983 14.8125 53.9983C12.4865 53.9983 10.2122 53.3116 8.27491 52.0242C6.3376 50.7369 4.82347 48.9063 3.92239 46.7619C3.0213 44.6175 2.77337 42.2548 3.20968 39.97C3.64599 37.6853 4.74713 35.5802 6.37501 33.9188V8.4375ZM14.8125 3.375C13.4698 3.375 12.1822 3.90837 11.2328 4.85777C10.2834 5.80718 9.75001 7.09484 9.75001 8.4375V35.3936L9.18638 35.8999C7.91256 37.039 7.01466 38.5381 6.6115 40.1987C6.20833 41.8594 6.31891 43.6033 6.9286 45.1997C7.5383 46.7961 8.61836 48.1697 10.0259 49.1388C11.4334 50.1079 13.1019 50.6268 14.8108 50.6268C16.5197 50.6268 18.1883 50.1079 19.5958 49.1388C21.0033 48.1697 22.0833 46.7961 22.693 45.1997C23.3027 43.6033 23.4133 41.8594 23.0101 40.1987C22.607 38.5381 21.7091 37.039 20.4353 35.8999L19.875 35.3903V8.4375C19.875 7.09484 19.3416 5.80718 18.3922 4.85777C17.4428 3.90837 16.1552 3.375 14.8125 3.375ZM31.6875 6.75C32.1351 6.75 32.5643 6.92779 32.8808 7.24426C33.1972 7.56073 33.375 7.98995 33.375 8.4375V12.8014L35.5553 10.6178C35.8721 10.3009 36.3019 10.1229 36.75 10.1229C37.1981 10.1229 37.6279 10.3009 37.9448 10.6178C38.2616 10.9346 38.4396 11.3644 38.4396 11.8125C38.4396 12.2606 38.2616 12.6904 37.9448 13.0073L33.375 17.5736V24.0773L39.0079 20.8271L40.6785 14.5834C40.7361 14.3693 40.8353 14.1687 40.9705 13.993C41.1056 13.8172 41.2741 13.6698 41.4662 13.5592C41.6583 13.4486 41.8703 13.3769 42.0902 13.3482C42.31 13.3195 42.5333 13.3344 42.7474 13.392C42.9615 13.4496 43.1621 13.5488 43.3378 13.684C43.5135 13.8191 43.6609 13.9876 43.7715 14.1797C43.8822 14.3718 43.9539 14.5838 43.9826 14.8037C44.0113 15.0235 43.9964 15.2468 43.9388 15.4609L43.1389 18.4376L46.9189 16.2574C47.3063 16.0371 47.765 15.979 48.1951 16.0958C48.6251 16.2126 48.9915 16.4947 49.2143 16.8806C49.4372 17.2665 49.4983 17.7249 49.3844 18.1557C49.2705 18.5865 48.9908 18.9548 48.6064 19.1801L44.8264 21.3604L47.8099 22.1603C48.024 22.2179 48.2246 22.3171 48.4003 22.4522C48.576 22.5874 48.7234 22.7558 48.834 22.948C48.9447 23.1401 49.0164 23.3521 49.0451 23.5719C49.0738 23.7917 49.0589 24.0151 49.0013 24.2291C48.9436 24.4432 48.8444 24.6438 48.7093 24.8196C48.5741 24.9953 48.4057 25.1427 48.2136 25.2533C48.0214 25.3639 47.8094 25.4356 47.5896 25.4643C47.3698 25.493 47.1465 25.4781 46.9324 25.4205L40.6954 23.7499L35.0625 27L40.6954 30.2501L46.9358 28.5795C47.1512 28.5181 47.3766 28.5002 47.599 28.5268C47.8214 28.5534 48.0363 28.6241 48.2311 28.7346C48.4259 28.8451 48.5968 28.9933 48.7337 29.1706C48.8707 29.3478 48.971 29.5505 49.0288 29.7669C49.0866 29.9833 49.1007 30.209 49.0704 30.431C49.04 30.6529 48.9658 30.8665 48.852 31.0595C48.7383 31.2524 48.5872 31.4208 48.4077 31.5547C48.2282 31.6887 48.0238 31.7856 47.8065 31.8398L44.8264 32.6396L48.6064 34.8199C48.9908 35.0453 49.2705 35.4135 49.3844 35.8443C49.4983 36.2752 49.4372 36.7335 49.2143 37.1194C48.9915 37.5053 48.6251 37.7875 48.1951 37.9042C47.765 38.021 47.3063 37.9629 46.9189 37.7426L43.1389 35.5624L43.9388 38.5425C44.0002 38.7579 44.0181 38.9834 43.9915 39.2058C43.9648 39.4282 43.8942 39.643 43.7837 39.8379C43.6731 40.0327 43.5249 40.2035 43.3477 40.3405C43.1705 40.4774 42.9678 40.5777 42.7514 40.6355C42.535 40.6933 42.3092 40.7075 42.0873 40.6771C41.8654 40.6468 41.6517 40.5726 41.4588 40.4588C41.2659 40.345 41.0975 40.194 40.9635 40.0145C40.8296 39.835 40.7327 39.6306 40.6785 39.4133L39.0113 33.1763L33.375 29.9228V36.4264L37.9448 40.9928C38.1017 41.1497 38.2261 41.3359 38.311 41.5409C38.3959 41.7459 38.4396 41.9656 38.4396 42.1875C38.4396 42.4094 38.3959 42.6291 38.311 42.8341C38.2261 43.0391 38.1017 43.2254 37.9448 43.3823C37.7879 43.5392 37.6016 43.6636 37.3966 43.7485C37.1916 43.8334 36.9719 43.8771 36.75 43.8771C36.5281 43.8771 36.3084 43.8334 36.1034 43.7485C35.8984 43.6636 35.7122 43.5392 35.5553 43.3823L33.375 41.1986V45.5625C33.375 46.0101 33.1972 46.4393 32.8808 46.7558C32.5643 47.0722 32.1351 47.25 31.6875 47.25C31.24 47.25 30.8107 47.0722 30.4943 46.7558C30.1778 46.4393 30 46.0101 30 45.5625V8.4375C30 7.98995 30.1778 7.56073 30.4943 7.24426C30.8107 6.92779 31.24 6.75 31.6875 6.75Z"
                        fill="#CFF80B"
                        stroke="black"
                        mask="url(#path-2-inside-1_1_367)"
                      />
                    </svg>
                  </div>

                  <h3 className="font-bold">Climate</h3>
                  <span className="text-sm text-slate-400">INTERIOR: 24 C</span>
                  <p className="mt-2 text-3xl font-bold">23 C</p>
                  <span className="text-md mt-2">WINDOW CLOSED</span>
                  <div className="flex w-full gap-[110px] text-sm mt-1 text-slate-400">
                    <p>10 C</p>
                    <p>40 C</p>
                  </div>
                  <div className="h-1 w-[180px] bg-slate-400 mt-2">
                    <div className=" h-full w-[100px] bg-[#CFF80B]"></div>
                  </div>
                </div>
                <div className=" w-[20vw] h-fit  bg-[#1E1E1E] rounded-2xl p-4 relative">
                  <h3 className="font-bold">My calendar</h3>
                  <span className="text-sm text-slate-400">5 Aug-2022</span>
                  <hr className="w-full bg-[#CFF80B] h-1" />
                  <div className="flex h-10 border-b-2 border-dashed border-slate-400 w-full mt-4">
                    <span className="text-sm text-slate-400 ">5:00 AM</span>
                  </div>
                  <div className="flex h-6   border-b-2 border-dashed border-slate-400 w-full mt-4">
                    <span className="text-sm text-slate-400 ">6:00 AM</span>
                  </div>

                  <div className="absolute w-[65%] h-16 bg-[#484848] rounded-lg left-20 top-16 border-l-4 border-[#CFF80B] text-center p-2">
                    <h3 className="text-[0.7rem] font-bold">
                      Meeting with clients
                    </h3>
                    <span className="text-[0.7rem] text-slate-400">
                      5:00 AM - 6:20 AM
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <MusicPlayer />
            <div className="flex mt-6 justify-between ">
              <div className="w-24 h-20 bg-[#1E1E1E] rounded-lg text-center p-2">
                <OpacityRoundedIcon className="mt-2" />
                <p className="text-sm mt-2">humidity</p>
              </div>
              <div className="w-24 h-20 bg-[#1E1E1E] rounded-lg text-center p-2">
                <AirRoundedIcon className="mt-2" />
                <p className="text-sm mt-2">wind</p>
              </div>
              <div className="w-24 h-20 bg-[#1E1E1E] rounded-lg text-center p-2">
                <BluetoothRoundedIcon className="mt-2" />
                <p className="text-sm mt-2">Bluetooth</p>
              </div>
              <div className="w-24 h-20 bg-[#1E1E1E] rounded-lg text-center p-2">
                <SmsRoundedIcon className="mt-2" />
                <p className="text-sm mt-2">Message</p>
              </div>
              <div className="w-24 h-20 bg-[#1E1E1E] rounded-lg text-center p-2">
                <AirlineSeatReclineExtraRoundedIcon className="mt-2" />
                <p className="text-sm mt-2">incline</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" h-full p-9">
          <div className="bg-[#1E1E1E] p-4 flex rounded-xl items-center justify-between gap-4 mb-4">
            <div className="bg-[#2f2f2f] text-center align-middle p-4 rounded-xl">
              <PrivacyTipIcon className="text-red-500" />
            </div>
            <div className="text-sm h-full justify-center">
              <p className="font-bold">Emergency</p>
              <span className="text-slate-400">
                Switch ON only in emergency case
              </span>
            </div>
            <div>
              <IOSSwitch />
            </div>
          </div>
          <div className="relative h-fit w-full">
            <img
              src="./car.png"
              alt=""
              srcset=""
              className="  w-full object-cover "
            />
            <div className="absolute items-center text-center p-4 bg-[#1E1E1E] top-5 left-10 rounded-full">
              <LockIcon />
            </div>
            <div className="absolute items-center text-center p-4 bg-[#d1f80bb7] top-5 left-[25rem] rounded-full">
              <LockOpenIcon />
            </div>
            <div className="flex w-full justify-center gap-4">
              <div className="cursor-pointer">
                <div className=" items-center text-center p-4 bg-[#5b5a5a]  rounded-full">
                  <LightModeIcon />
                </div>
                <p className="text-sm text-slate-300 mt-2">Brightness</p>
              </div>
              <div className="cursor-pointer">
                <div className=" items-center text-center p-4 bg-[#5b5a5a]  rounded-full">
                  <FingerprintIcon />
                </div>
                <p className="text-sm text-slate-300 mt-2">Fingerprint</p>
              </div>
              <div
                onClick={() => navigate("/car-details")}
                className="cursor-pointer"
              >
                <div className=" items-center text-center p-4 bg-[#5b5a5a]  rounded-full">
                  <TonalityIcon />
                </div>
                <p className="text-sm text-slate-300 mt-2">Statistics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
