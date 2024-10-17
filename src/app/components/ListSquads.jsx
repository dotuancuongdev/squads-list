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

const skeletons = [
  <SkeletonCard />,
  <SkeletonCard />,
  <SkeletonCard />,
  <SkeletonCard />,
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
            <CardMember item={item} idx={idx} key={item._id} />
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

      console.log(isInViewport);
      if (isInViewport) {
        clearTimeout(isFetching.current);
        isFetching.current = setTimeout(() => {
          console.log(1);
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
        <Input
          size="large"
          placeholder="Search for squad"
          prefix={<SearchOutlined className="custom-icon" />}
          className="bg-[#1a1a27] text-[#BCBBCA] custom-input mt-10"
        />
        <div className="w-full flex mt-4 gap-3">
          <SelectedOptions className="flex-1 custom-select " />
          <SortSquads className="flex-1 custom-select" />
        </div>
      </div>

      {/* input in min sceen 767px*/}

      <div className="hidden md:flex gap-8 items-center mt-10">
        <div className="flex-1">
          <TabOptionsSquad className="w-full" />
        </div>
        <div className="flex-1 flex gap-4">
          <Input
            size="large"
            placeholder="Search for squad"
            prefix={<SearchOutlined className="custom-icon" />}
            className="bg-[#1a1a27] custom-input text-[#BCBBCA] "
          />
          <SortSquads className="text-[#BCBBCA] flex-initial" />
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
