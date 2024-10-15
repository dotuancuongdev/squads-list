import Image from "next/image";
import { Space_Grotesk } from "next/font/google";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import SelectedOptions from "./components/SelectOptionsSquad";
import SortSquads from "./components/SortSquads";
import CardMember from "./components/CardMember";
import TabOptionsSquad from "./components/TabOptionsSquad";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="px-4 lg:px-16">
      <div>
        <div className="mt-14 lg:hidden">
          <p
            className={`text-4xl font-extrabold text-center ${spaceGrotesk.className}`}
          >
            Investment Squads
          </p>
          <p className="text-[#BCBBCA] text-base font-medium text-center mt-3">
            Create or join existing investment squads at virtually no costs.
            Multichain supported.
          </p>
        </div>
        <div className="hidden lg:block mt-14">
          <p
            className={`text-4xl font-extrabold text-center ${spaceGrotesk.className}`}
          >
            Squads
          </p>
          <p className="text-[#BCBBCA] text-base font-medium text-center mt-3 mx-auto max-w-[800px]">
            Depending on your taste, either low cap, blue chip NFTs, or even
            web3 startup, you can easily choose the right squad for you.
          </p>
        </div>
        <div className="flex justify-center mt-6">
          <button className="bg-[#6966FF] rounded text-base font-semibold">
            <p className="py-2 px-5">{`Create squad >`}</p>
          </button>
        </div>
      </div>

      {/* input in max sceen 767px*/}
      <div className="md:hidden">
        <Input
          size="large"
          placeholder="Search for squad"
          prefix={<SearchOutlined className="custom-icon" />}
          className="bg-[#1a1a27] custom-input mt-10"
        />
        <div className="w-full flex mt-4 gap-3">
          <SelectedOptions className="flex-1 custom-input " />
          <SortSquads className="flex-1 custom-input" />
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
            className="bg-[#1a1a27] custom-input  "
          />
          <SortSquads className="custom-input " />
        </div>
      </div>

      {/* card list */}

      <div className="mx-auto mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <CardMember />
        <CardMember />
        <CardMember />
        <CardMember />
        <CardMember />
        <CardMember />
        <CardMember />
        <CardMember />
      </div>
    </div>
  );
}
