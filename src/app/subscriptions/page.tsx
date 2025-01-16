"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { FaDollarSign } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { LuPercent } from "react-icons/lu";
import { GrBook } from "react-icons/gr";
import { FiUser } from "react-icons/fi";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Link from "next/link";
import { MdOutlineDone, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { CiCircleInfo } from "react-icons/ci";

const tabs = [
  { name: "Profile", href: "/profile", icon: <FiUser size={24} /> },
  {
    name: "Subscriptions",
    href: "/subscriptions",
    icon: <FaDollarSign size={24} />,
  },
  { name: "Subaccounts", href: "/subaccounts", icon: <FiUsers size={24} /> },
  { name: "Referal", href: "/referal", icon: <LuPercent size={24} /> },
  { name: "Guides", href: "/guides", icon: <GrBook size={24} /> },
];

const plans = [
  { name: "Quarterly", days: 90, price: 129, monthlyCost: 43 },
  { name: "Half year", days: 180, price: 229, monthlyCost: 30 },
  { name: "Year", days: 365, price: 329, monthlyCost: 27 },
  { name: "New year", days: 45, price: 59, monthlyCost: 0 },
];

const Subscriptions = () => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("Quarterly");

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (!isModalOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  useEffect(() => {
    return () => document.body.classList.remove("no-scroll");
  }, []);

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
                  <Link href={tab.href} className="flex items-center gap-3">
                    <p className="hidden lg:block">{tab.icon}</p>
                    {tab.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <section className="min-h-[750px] w-full lg:w-[85%] bg-[--dark-gray] p-[16px] sm:p-[32px] rounded-[16px]">
            <div className="flex-col flex">
              <div className="flex items-center justify-center w-[48px] h-[48px] bg-[#2A2B32] rounded-[12px]">
                <FaDollarSign size={24} />
              </div>
              <div className="mt-4">
                <p className="text-[24px] font-semibold leading-[32px] tracking-[-3%] mb-2">
                  Subscriptions
                </p>
                <p className="text-[14px] text-[#949392] leading-[20px] mt-2 w-[325px] sm:w-[450px] lg:w-[650px]">
                  Subscription allows you to get unlimited access to the site
                  materials. We provide a choice of several tariff plans based
                  on the principle “the longer - the cheaper”. A few free views
                  are available without subscription.
                </p>
              </div>
              <div className="mt-7">
                <div className="flex items-center gap-[20px]">
                  <p className="text-[15px] leading-[16px] font-semibold">
                    Free Views
                  </p>
                  <p className="text-[15px] leading-[16px] font-semibold">
                    1/2
                  </p>
                </div>
                <button
                  onClick={toggleModal}
                  className="h-[44px] bg-[--green] px-[14px] py-[20px] font-bold leading-[16px] tracking-[-1%] rounded-[12px] flex items-center justify-center mt-[40px] my-[60px]"
                >
                  See plans
                </button>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <p className="text-[16px] font-bold leading-[24px] -tracking-[3%]">
                    My subscriptions
                  </p>
                  <p className="text-[#797979] text-[16px] leading-[24px] font-bold">
                    5
                  </p>
                </div>
                <TableContainer
                  sx={{
                    backgroundColor: "transparent",
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
                      },
                      "& .MuiTableCell-body": {
                        color: "#FFFFFF",
                        fontSize: "14px",
                        lineHeight: "20px",
                        borderBottom: "1px solid #27292D",
                        padding: "16px 8px",
                      },
                    }}
                    aria-label="subscriptions table"
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell>Plan</TableCell>
                        <TableCell align="right">Date start</TableCell>
                        <TableCell align="right">Date end</TableCell>
                        <TableCell align="right">Price</TableCell>
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
                        <TableCell align="left">Quartal Plan</TableCell>
                        <TableCell align="right">11.01.2024</TableCell>
                        <TableCell align="right">11.04.2024</TableCell>
                        <TableCell align="right">129$</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </div>
          </section>
        </div>
        {isModalOpen && (
          <>
            <div className="fixed inset-0 bg-black bg-opacity-40 z-40"></div>

            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="h-[750px] sm:h-[930px] w-[96%] xl:w-[1040px] xl:h-[800px] bg-[#1C1E22] p-6 rounded-[16px] shadow-lg flex flex-col xl:flex-row gap-[10px] xl:gap-[72px] relative overflow-y-scroll">
                <button
                  className="top-10 absolute sm:top-5 right-5"
                  onClick={toggleModal}
                >
                  <IoMdClose
                    size={24}
                    className="hover:text-[#9EA0A6] cursor-pointer"
                  />
                </button>
                <div className="py-[20px] sm:p-0 w-[100%] flex flex-col gap-[20px] xl:w-[450px]">
                  <p className="text-[#CBFF51] text-[14px] leading-[20px]">
                    Plans
                  </p>
                  <p className="font-bold text-[22px] xl:text-[24px] text-[26px] leading-[36px] -tracking-[3%] w-[330px]">
                    Get Unlimited Access to the Site Materials
                  </p>
                  <p className="font-semibold text-[14px] leading-[20px] text-[#949392]  xl:w-[450px]">
                    You will also receive an invitation to a private channel and
                    access.
                  </p>
                  <div>
                    <div className="relative mb-5">
                      <MdOutlineDone
                        size={20}
                        className="text-[#CBFF51] absolute top-0 left-0"
                      />
                      <p className="font-semibold text-[14px] leading-[20px] px-[25px]">
                        Unlimited access to view guides
                      </p>
                    </div>
                    <div className="relative">
                      <MdOutlineDone
                        size={20}
                        className="text-[#CBFF51] absolute top-0 left-0"
                      />
                      <p className="font-semibold text-[14px] leading-[20px] px-[25px]">
                        Private channel and access to a closed section with
                        projects with maximum potential
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-[100%] bg-transparent xl:w-[450px]">
                  <h2 className="text-[18px] leading-[20px] -tracking-[0.18px] font-bold pt-[10px] xl:pt-[36px] mb-[15px]">
                    Select plan
                  </h2>
                  <ul className="flex flex-col gap-2">
                    {plans.map((plan) => (
                      <li
                        key={plan.name}
                        onClick={() => setSelectedPlan(plan.name)}
                        className={`cursor-pointer p-4 rounded-[12px] flex justify-between items-center border-[1px] transition-all duration-300 ${
                          selectedPlan === plan.name
                            ? "border-[#436237] border-[1px] bg-[#1D2A19]"
                            : "border-gray-700 hover:border-gray-500"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-[24px] h-[24px] flex items-center justify-center rounded-full border-2 transition-all duration-300 ${
                              selectedPlan === plan.name
                                ? "border-[1px] border-[#73A304] bg-[#528E09]"
                                : "border-gray-700"
                            }`}
                          >
                            {selectedPlan === plan.name && (
                              <MdOutlineDone size={20} />
                            )}
                          </div>
                          <div className="flex flex-col sm:flex-row items-center sm:gap-[12px]">
                            <p className="font-bold text-[14px]">{plan.name}</p>
                            <p className="text-[14px] text-[#8E8E8E]">
                              {plan.days} days
                            </p>
                          </div>
                        </div>
                        <div>
                          {plan.monthlyCost !== 0 ? (
                            <div className="flex flex-col sm:flex-row items-center gap-[1px] sm:gap-[12px]">
                              <p className="text-[16px] leading-[18px] font-bold text-[#CBFF51]">
                                ${plan.price}
                              </p>
                              <p className="text-[14px] leading-[15px] text-[#8E8E8E]">
                                ${plan.monthlyCost}/month
                              </p>
                            </div>
                          ) : (
                            <p className="text-[16px] text-left leading-[18px] font-bold text-[#CBFF51] mr-[25px] sm:mr-[95px]">
                              ${plan.price}
                            </p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-[25px]">
                    <p className="mb-1 text-[14px] leading-[16px] font-semibold">
                      Cupon
                    </p>
                    <div className="flex items-center gap-2">
                      <input
                        className="bg-[#212226] p-2 w-[200px] rounded-[12px] placeholder:text-[14px] placeholder:leading-[20px]"
                        placeholder="Cupon code"
                      />
                      <button className="bg-[#333333] px-[10px] py-[12px] text-[#A4A4A4] font-bold text-[14px] leading-[16px] rounded-[10px]">
                        Done
                      </button>
                    </div>
                  </div>

                  <hr className="my-[20px] sm:my-[45px] border-0 h-px bg-[#27292D]" />

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                      <p className="text-[14px] leading-[20px] font-semibold">
                        Amount Due
                      </p>
                      <p className="text-[24px] leading-[28px] font-bold">
                        $129
                      </p>
                    </div>
                    {/*<button className="flex items-center gap-1 rounded-[16px] py-[18px] pr-[16px] pl-[24px] bg-[#11CA00] font-semibold leading-[20px]">*/}
                    {/*  Go to payment*/}
                    {/*  <MdOutlineKeyboardArrowRight />*/}
                    {/*</button>*/}
                    <button className="flex items-center gap-1 rounded-[16px] py-[18px] pr-[16px] pl-[24px] bg-[#11CA00] font-semibold leading-[20px]">
                      Top up balance
                      <MdOutlineKeyboardArrowRight />
                    </button>
                  </div>

                  <p className="text-[#8E8E8E] text-[14px] leading-[20px] mt-[26px]">
                    <span className="text-[#FF6F6F]">
                      Account balance: $0.00.
                    </span>{" "}
                    <span className="hidden xl:inline">
                      There are not enough funds on your account to pay for the
                      order.
                    </span>
                  </p>

                  <div className="flex text-[#D7B5FF] bg-[#B030BE0A] gap-2 mt-4 rounded-[12px] p-[10px]">
                    <CiCircleInfo size={24} />
                    <p className="text-[13px] leading-[18px]">
                      Tip: if you get blocked at the time of payment -{" "}
                      <span className="text-[#E37DFF]">use a VPN</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Subscriptions;
