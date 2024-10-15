"use client";

import React from "react";
import { Select, Space } from "antd";

const sortOptions = [
  { value: "Recently added", label: "Recently added" },
  { value: "Member: High to Low", label: "Member: High to Low" },
  { value: "Member: Low to High", label: "Member: Low to High" },
  { value: "Oldest", label: "Oldest" },
];
const handleSort = (value) => {
  console.log(`selected ${value}`);
};
const SortSquads = () => (
  <Select
    onChange={handleSort}
    options={sortOptions}
    placeholder="Sort by"
    size="large"
    className="w-full"
  />

  // <select
  //   name="sort-options"
  //   id="sort-options"
  //   onChange={handleSort}
  //   defaultValue={""}
  //   aria-placeholder="Sort by"
  // >
  //   {sortOptions.map((option, idx) => (
  //     <option key={idx} value={option.value}>
  //       {option.label}{" "}
  //     </option>
  //   ))}
  // </select>
);
export default SortSquads;
