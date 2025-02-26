"use client";
import React, { ChangeEvent, useState } from "react";
import { usePathname } from "next/navigation";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { FiUsers } from "react-icons/fi";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import avatar from "../../../public/assets/avatar.png";
import avatar2 from "../../../public/assets/avatar-2.png";
import { tabs } from "@/shared/utils/tabs";
import SmallChartPie from "@/shared/components/SmallChartPie";
import useCustomScrollbar from "@/shared/hooks/useCustomScrollbar";

const Subaccounts = () => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  const [value, setValue] = useState(
    "https:\\invitation.drophunting.io/2101024/10"
  );
  const [copied, setCopied] = useState(false);

  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tableRef = useCustomScrollbar({
    scrollbars: {
      autoHide: "never",
    },
  });

  return (
    <div className="bg-[#101114] text-white">
      <Header />

      <main className="px-[16px] sm:px-[32px] sm:pt-[48px] sm:pb-[64px] lg:px-[96px]">
        <div className="flex flex-col lg:flex-row justify-center w-full p-3">
          <nav className="lg:w-[240px] w-full font-chakra font-bold leading-[20px] text-[#8E8E8E] m-0 lg:mr-[40px]">
            <ul className="no-scrollbar overflow-auto w-full border-b-[1px] border-[#27292D] lg:border-none flex flex-row lg:flex lg:flex-col mb-5">
              {tabs.map((tab) => (
                <li
                  key={tab.name}
                  className={`p-[6px] lg:px-[16px] lg:py-[12px] lg:rounded-[12px] lg:mb-1 cursor-pointer ${
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
          <section className="w-full min-h-[1300px] bg-[--dark-gray] p-[32px] rounded-[16px]">
            <div className="flex-col flex">
              <div className="flex items-center justify-center w-[48px] h-[48px] bg-[#2A2B32] rounded-[12px]">
                <FiUsers size={24} />
              </div>
              <div className="mt-4">
                <p className="text-[24px] font-semibold leading-[32px] tracking-[-3%] mb-2">
                  Subaccounts
                </p>
                <p className="text-[#949392] leading-[20px] mt-2 max-w-full lg:w-[650px]">
                  You can invite partners to work together by creating
                  sub-accounts. The subaccount limit can be increased to the
                  required number of subaccounts.
                </p>
              </div>
              <div className="bg-[#1B1C20] p-[24px] rounded-[12px] my-6 w-full lg:w-[630px]">
                <div className="flex items-center gap-3">
                  <p className="leading-[16px] font-semibold">
                    Subaccounts is used
                  </p>
                  <SmallChartPie />
                  <p className="leading-[16px] font-semibold">2/2</p>
                </div>
                <hr className="mb-[25px] mt-[10px] border-0 h-px bg-[#27292D]" />
                <div className="flexitems-center justify-between">
                  {/* <div className="flex md:items-center gap-4">
                    <IoLockClosedOutline size={24} className="text-[#8E8E8E]" />
                    <p className="text-[13px] sm:text-[14px] leading-[20px] font-bold mr-[5px]">
                      Subaccount not allow. Please try again
                    </p>
                  </div>
                  <button className="flex items-center rounded-[12px] py-[7px] px-[10px] md:py-[14px] md:px-[20px] text-[15px] bg-[#11CA00] font-bold leading-[20px]">
                    Upgrade plan
                  </button> */}
                  <p className="text-[13px] sm:text-[14px] leading-[20px] font-bold mr-[5px]">
                    Send invitation link
                  </p>
                  <div className="relative flex items-center justify-between md:w-[465px] gap-[10px] mt-3">
                    <input
                      onChange={handleValueChange}
                      value={value}
                      className="bg-[#24262B] p-[12px] rounded-[12px] w-full truncate leading-[20px]"
                    />
                    <button
                      onClick={handleCopy}
                      className="relative flex items-center rounded-[12px] p-[12px] md:py-[12px] md:px-[20px] text-[15px] bg-[#11CA00] font-bold leading-[20px] hover:bg-blue-500"
                    >
                      Copy
                      {copied && (
                        <span className="absolute top-[-35px] right-0 bg-[--dark-gray] text-white text-xs px-2 py-1 rounded-md w-[110px]">
                          Link copied!
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <p className="text-[16px] font-bold leading-[24px] -tracking-[3%]">
                    My subaccounts
                  </p>
                  <p className="text-[#797979] text-[16px] leading-[24px] font-bold">
                    5
                  </p>
                </div>
                <TableContainer
                  ref={tableRef}
                  sx={{
                    backgroundColor: "transparent",
                    overflowX: "scroll",
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
                        <TableCell align="left">Date</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow
                        sx={{
                          "&:hover": {
                            backgroundColor: "#27292D",
                          },
                        }}
                      >
                        <TableCell align="left" className="min-w-[220px]">
                          <div className="flex items-center gap-2">
                            <Image
                              src={avatar}
                              alt="Avatar"
                              className="w-[28px] h-[28px] rounded-full"
                            />
                            <p>Artem-Drophunter</p>
                          </div>
                        </TableCell>
                        <TableCell align="left" className="min-w-[220px]">
                          artem-hunter@gmail.com
                        </TableCell>
                        <TableCell align="left">23.11.2024</TableCell>
                      </TableRow>
                      <TableRow
                        sx={{
                          "&:hover": {
                            backgroundColor: "#27292D",
                          },
                        }}
                      >
                        <TableCell align="left">
                          <div className="flex items-center gap-2">
                            <Image
                              src={avatar2}
                              alt="Avatar"
                              className="w-[28px] h-[28px] rounded-full"
                            />
                            <p>Jackye</p>
                          </div>
                        </TableCell>
                        <TableCell align="left">
                          artem-hunter@gmail.com
                        </TableCell>
                        <TableCell align="left">23.11.2024</TableCell>
                      </TableRow>
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

export default Subaccounts;
