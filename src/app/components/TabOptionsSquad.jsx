"use client";

import React from "react";
import { Tabs } from "antd";

const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: "All Squads",
  },
  {
    key: "2",
    label: "Public Squads",
  },
  {
    key: "3",
    label: "Private Squads",
  },
  {
    key: "4",
    label: "My Squads",
  },
];
const TabOptionsSquad = () => (
  <Tabs
    defaultActiveKey="1"
    items={items}
    onChange={onChange}
    className="text-white"
    size="large"
  />
);
export default TabOptionsSquad;
