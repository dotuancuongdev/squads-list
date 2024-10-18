"use client";

import React from "react";

import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import SelectedOptions from "./SelectOptionsSquad";
import SortSquads from "./SortSquads";
import CardMember from "./CardMember";
import TabOptionsSquad from "./TabOptionsSquad";
import { Spin, Skeleton } from "antd";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import useSWR from "swr";
import SkeletonCard from "./SkeletonCard";

const fetcher = (url) => axios.get(url).then((res) => res);

const fillFourData = Array(4).fill(1);
const skeletons = fillFourData.map((item, idx) => <SkeletonCard key={idx} />);

const squadOptions = [
  {
    value: "Public Squads",
    label: "Public Squads",
  },
  {
    value: "Private Squads",
    label: "Private Squads",
  },
  {
    value: "My Squads",
    label: "My Squads",
  },
];

const sortOptions = [
  { value: "Recently added", label: "Recently added" },
  { value: "Member: High to Low", label: "Member: High to Low" },
  { value: "Member: Low to High", label: "Member: Low to High" },
  { value: "Oldest", label: "Oldest" },
];

const ListSquads = () => {
  const [members, setMembers] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const { data, error, isLoading } = useSWR(
    `https://appropriate-kristin-dotuancuongdev-f1cd16f6.koyeb.app/api/products/commerce?pageSize=8&pageNumber=${pageNumber}`,
    fetcher,
    {
      revalidateOnFocus: false,
      onSuccess: (data) => {
        setMembers((member) => {
          return [...member, ...data?.data?.items];
        });
      },
    }
  );

  const renderMembers = () => {
    if (error) return "An error has occurred.";

    return (
      <>
        <div className="mx-auto my-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {members?.map((item, idx) => (
            <CardMember key={item._id} item={item} idx={idx} />
          ))}
        </div>

        <div className="w-full flex justify-center my-10" ref={loadingIcon}>
          <Spin size="large" />
        </div>
      </>
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const rect = loadingIcon.current?.getBoundingClientRect();
      const isInViewport =
        rect?.top >= 0 &&
        rect?.left >= 0 &&
        rect?.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect?.right <=
          (window.innerWidth || document.documentElement.clientWidth);

      if (isInViewport) {
        clearTimeout(isFetching.current);
        isFetching.current = setTimeout(() => {
          setPageNumber((pageNumber) => {
            return pageNumber + 1;
          });
        }, 500);
      }
    });
  }, []);
  const loadingIcon = useRef();
  const isFetching = useRef();

  return (
    <>
      {/* input in max sceen 767px*/}
      <div className="md:hidden">
        {/* <Input
          size="large"
          placeholder="Search for squad"
          prefix={<SearchOutlined />}
          className=""
        /> */}
        <div className="flex items-center gap-[10px] border-[1px] border-solid border-[#465270] rounded py-[10px] pl-3 mt-10">
          <img
            src="https://res.cloudinary.com/dyk0mxfjz/image/upload/v1729159447/cy3zabm5vcqa7twuvyi1.svg"
            alt="search"
            className="text-[#FAFAFD] w-[18px] h-[18px]"
          />
          <input
            type="text"
            placeholder="Search for squad"
            className="text-sm text-[#465270] bg-[#1a1a27]"
          />
        </div>
        <div className="w-full  mt-4 grid grid-cols-2 gap-3 ">
          <SelectedOptions className="flex-1  " />
          <SortSquads className="flex-1 " />

          {/* <select
            name="squads"
            id="squads"
            defaultValue=""
            className="flex-1 bg-[#1a1a27] border-[1px] border-solid border-[#30303c] text-sm font-semibold text-[#FAFAFD] py-[10px] rounded-[4px] px-3"
          >
            <option value="" selected disabled className="text-[#465270] ">
              Squads
            </option>
            {squadOptions.map((squad, idx) => (
              <option key={idx} value={squad.value}>
                {squad.label}
              </option>
            ))}
          </select>

          <select
            name="squads"
            id="squads"
            defaultValue=""
            className="flex-1 bg-[#1a1a27] border-[1px] border-solid border-[#30303c] text-sm font-semibold text-[#FAFAFD] py-[10px] rounded-[4px] px-3"
          >
            <option value="" selected disabled className="text-[#465270]">
              Sort by
            </option>
            {sortOptions.map((op, idx) => (
              <option key={idx} value={op.value}>
                {op.label}
              </option>
            ))}
          </select> */}
        </div>
      </div>

      {/* input in min sceen 767px*/}

      <div className="hidden md:flex gap-8 items-center mt-10">
        <div className="flex-1">
          <TabOptionsSquad className="w-full" />
        </div>
        <div className="flex-1 flex gap-4 items-center">
          {/* <Input
            size="large"
            placeholder="Search for squad"
            prefix={<SearchOutlined />}
            className=""
          /> */}

          <div className="flex items-center gap-[10px] border-[1px] border-solid border-[#465270] rounded py-[10px] pl-3 flex-1">
            <img
              src="https://res.cloudinary.com/dyk0mxfjz/image/upload/v1729159447/cy3zabm5vcqa7twuvyi1.svg"
              alt="search"
              className="text-[#FAFAFD] w-[18px] h-[18px]"
            />
            <input
              type="text"
              placeholder="Search for squad"
              className="text-sm text-[#465270] bg-[#1a1a27] w-full"
            />
          </div>
          <div className=" flex-1">
            <SortSquads />
          </div>
        </div>
      </div>

      {/* card list */}
      {members.length !== 0 ? (
        <div>{renderMembers()}</div>
      ) : (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10">
          {skeletons.map((item, idx) => (
            <div key={idx}>{item}</div>
          ))}
        </div>
      )}
    </>
  );
};

export default ListSquads;
