"use client";
import React from "react";
import { Select, Space } from "antd";

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
const handleChangeSquads = (value) => {
  console.log(`selected ${value}`);
};
const SelectedOptions = () => (
  <Select
    onChange={handleChangeSquads}
    options={squadOptions}
    placeholder="Squads"
    size="large"
    className="w-full bg-[#1a1a27]"
    rootClassName="!bg-[#1a1a27] !text-red-500"
    popupClassName="!bg-[#333347] !text-red-500"
    dropdownStyle={{ color: "red", borderRadius: 4 }}
    style={{ color: "red" }}
  />
);
export default SelectedOptions;
