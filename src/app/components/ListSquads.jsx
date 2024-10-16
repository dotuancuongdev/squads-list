"use client";

import React from "react";

import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import SelectedOptions from "./SelectOptionsSquad";
import SortSquads from "./SortSquads";
import CardMember from "./CardMember";
import TabOptionsSquad from "./TabOptionsSquad";
import { Spin } from "antd";
import { useState } from "react";
import axios from "axios";
import useSWR from "swr";

const pageSize = 16;
const fetcher = (url) => axios.get(url).then((res) => res);

const ListSquads = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const { data, error, isLoading } = useSWR(
    `https://appropriate-kristin-dotuancuongdev-f1cd16f6.koyeb.app/api/products/commerce?pageSize=${pageSize}&pageNumber=${pageNumber}`,
    fetcher
  );

  console.log(data);

  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";
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

      <div className="mx-auto my-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data?.data?.items?.map((item, idx) => (
          <CardMember item={item} idx={idx} key={item._id} />
        ))}
      </div>

      <div className="text-center my-10">
        <Spin size="large" />
      </div>
    </>
  );
};

export default ListSquads;
