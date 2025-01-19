"use client";
import React, { ChangeEvent, useState } from "react";
import { usePathname } from "next/navigation";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { LuPercent } from "react-icons/lu";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Slider,
  Box,
  styled,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import avatar from "../../shared/assets/avatar.png";
import { tabs } from "@/shared/utils/tabs";

const CustomSlider = styled(Slider)({
  height: 8,
  "& .MuiSlider-track": {
    background: "linear-gradient(to right, #5af86e, #d2f21b)",
    border: "none",
    zIndex: 2,
  },
  "& .MuiSlider-thumb": {
    display: "none",
  },
  "& .MuiSlider-rail": {
    opacity: 0.3,
    backgroundColor: "#333",
  },
  "& .MuiSlider-mark": {
    height: 6,
    width: 1,
    backgroundColor: "#777",
    zIndex: 1,
  },
});

const marks = Array.from({ length: 21 }, (_, i) => ({
  value: i,
  visible: i !== 0 && i !== 20,
}));

const Referal = () => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  const [value, setValue] = useState(
    "https:\\invitation.drophunting.io/2101024/10",
  );

  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="bg-black text-white">
      <Header />

      <main className="container flex-col flex items-center mx-auto justify-center lg:flex-row overflow-hidden">
        <div className="flex flex-col lg:flex-row justify-center w-full p-3">
          <nav className="lg:w-[15%] w-full font-chakra font-bold leading-[20px] text-[#8E8E8E] m-0 lg:mr-[40px]">
            <ul className="no-scrollbar overflow-scroll w-full lg:w-[115%] xl:w-[100%] border-b-[1px] border-[#27292D] lg:border-none flex flex-row lg:flex lg:flex-col mb-5">
              {tabs.map((tab) => (
                <li
                  key={tab.name}
                  className={`p-[6px] lg:pr-[16px] lg:pl-0px xl:px-[16px] lg:py-[12px] lg:rounded-[12px] lg:mb-1 cursor-pointer ${
                    isActive(tab.href)
                      ? "border-b-[1px] border-white lg:border-none lg:bg-[--dark-gray] text-white"
                      : "hover:border-b-[1px] border-white lg:border-none lg:hover:bg-[--dark-gray] hover:text-white"
                  }`}
                >
                  <Link
                    href={tab.href}
                    className="flex items-center gap-3 text-[16px]"
                  >
                    <p className="hidden lg:block">{tab.icon}</p>
                    {tab.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <section className="min-h-[750px] w-full lg:w-[85%] bg-[#17181B] p-[16px] sm:p-[32px] rounded-[16px]">
            <div className="flex-col flex">
              <div className="flex items-center justify-center w-[48px] h-[48px] bg-[#2A2B32] rounded-[12px]">
                <LuPercent size={24} />
              </div>
              <div className="mt-4">
                <p className="text-[24px] font-semibold leading-[32px] tracking-[-3%] mb-2">
                  Referal
                </p>
                <p className="text-[#949392] leading-[20px] w-[325px] sm:w-[450px] lg:w-[650px] mb-5">
                  Invite friends and get 20% rewards
                </p>
              </div>
              <div className="flex flex-col gap-[20px] sm:flex-row sm:items-center sm:gap-[50px]">
                <div className="flex flex-col gap-[16px]">
                  <p className="font-semibold leading-[20px]">Your profit</p>
                  <p className="text-[25px] leading-[28px] font-semibold">
                    20%
                  </p>
                </div>
                <div className="flex flex-col gap-[8px] mt-[3px]">
                  <p className="font-semibold leading-[20px]">
                    Referals invited
                  </p>
                  <div className="flex flex-row items-center gap-[20px]">
                    <p className="text-[25px] leading-[28px] font-semibold">
                      5
                    </p>
                    <Box
                      sx={{
                        width: 300,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <CustomSlider
                        defaultValue={5}
                        step={1}
                        marks={marks
                          .filter((mark) => mark.visible)
                          .map((mark) => ({ value: mark.value }))}
                        min={0}
                        max={20}
                      />
                    </Box>
                  </div>
                </div>
              </div>
              <div className="bg-[#1B1C20] p-[24px] rounded-[12px] my-6 w-full">
                <div className="flex flex-col lg:flex-row gap-[24px]">
                  {/* <div className="flex md:items-center gap-4">
                    <IoLockClosedOutline size={24} className="text-[#8E8E8E]" />
                    <p className="text-[13px] sm:text-[14px] leading-[20px] font-bold mr-[5px]">
                      Subaccount not allow. Please try again
                    </p>
                  </div>
                  <button className="flex items-center rounded-[12px] py-[7px] px-[10px] md:py-[14px] md:px-[20px] text-[15px] bg-[#11CA00] font-bold leading-[20px]">
                    Upgrade plan
                  </button> */}
                  <div className="lg:border-r-[1px] lg:border-[#202126] lg:pr-[24px]">
                    <p className="text-[13px] sm:text-[14px] leading-[20px] font-bold mr-[5px]">
                      Send invitation link
                    </p>
                    <div className="flex items-center gap-[10px] mt-3">
                      <input
                        onChange={handleValueChange}
                        value={value}
                        className="bg-[#24262B] w-[350px] xl:w-[400px] p-[12px] rounded-[12px] truncate text-[14px] leading-[20px]"
                      />
                      <button className="flex items-center rounded-[12px] p-[12px] md:py-[12px] md:px-[20px] text-[15px] bg-[#11CA00] font-bold leading-[20px]">
                        Copy
                      </button>
                    </div>
                  </div>
                  <div>
                    <p className="text-[13px] sm:text-[14px] leading-[20px] font-bold mr-[5px]">
                      Rewards
                    </p>
                    <div className="flex items-center lg:justify-between mt-3 gap-[20px] md:gap-[50px]">
                      <p className="text-[25px] leading-[28px] font-semibold">
                        $720,31
                      </p>
                      <button className="flex items-center rounded-[12px] p-[12px] md:py-[12px] md:px-[20px] text-[15px] bg-[#11CA00] font-bold leading-[20px]">
                        Claim
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <p className="text-[16px] font-bold leading-[24px] -tracking-[3%]">
                    My referals
                  </p>
                  <p className="text-[#797979] text-[16px] leading-[24px] font-bold">
                    5
                  </p>
                </div>
                <TableContainer
                  sx={{
                    backgroundColor: "transparent",
                    overflowX: {
                      xs: "scroll",
                      sm: "visible",
                    },
                  }}
                >
                  <Table
                    sx={{
                      width: "100%",
                      "& .MuiTableCell-head": {
                        backgroundColor: "transparent",
                        color: "#949392",
                        fontWeight: "bold",
                        fontSize: "13px",
                        lineHeight: "16px",
                        borderBottom: "1px solid #27292D",
                        padding: "16px 8px",
                        fontFamily: "IBM Plex Mono",
                      },
                      "& .MuiTableCell-body": {
                        color: "#FFFFFF",
                        fontSize: "14px",
                        lineHeight: "20px",
                        borderBottom: "1px solid #27292D",
                        padding: "16px 8px",
                        fontFamily: "IBM Plex Mono",
                      },
                    }}
                    aria-label="subscriptions table"
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="left">Email</TableCell>
                        <TableCell align="left">Amount</TableCell>
                        <TableCell align="left">Date</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {[1, 2, 3, 4, 5, 6].map((el, index) => (
                        <TableRow
                          key={index}
                          sx={{
                            "&:hover": {
                              backgroundColor: "#27292D",
                            },
                          }}
                        >
                          <TableCell
                            align="left"
                            className="min-w-[220px] text-white"
                          >
                            <div className="flex items-center gap-2">
                              <Image
                                src={avatar}
                                alt="Avatar"
                                className="w-[28px] h-[28px] rounded-full"
                              />
                              <p>Artem-Drophunter</p>
                            </div>
                          </TableCell>
                          <TableCell
                            align="left"
                            className="min-w-[220px] text-white"
                          >
                            artem-hunter@gmail.com
                          </TableCell>
                          <TableCell
                            align="left"
                            className="min-w-[50px] text-white"
                          >
                            $120
                          </TableCell>
                          <TableCell align="left" className="text-white">
                            23.11.2024
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Referal;
