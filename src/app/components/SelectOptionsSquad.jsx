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
    placeholder="Squads"
    size="large"
    className="w-full"
  />
);
export default SelectedOptions;
