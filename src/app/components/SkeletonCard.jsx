import React from "react";
import { Skeleton } from "antd";

const SkeletonCard = () => {
  return (
    <div className="flex flex-col items-center gap-5 max-w-[320px] rounded-[10px] bg-[#1a1a27] border-zinc-600 border-[1px]">
      <div class=" bg-[#F0F0F0] relative w-full h-[90px] rounded-t-[10px]">
        <div class=" w-full absolute top-1/2 flex justify-center">
          <div class=" h-[90px] aspect-square rounded-full bg-[#F0F0F0] border-zinc-300 border-[1px]"></div>
        </div>
      </div>
      <div className="p-10 flex flex-col items-center gap-10 w-full mt-">
        <Skeleton.Input active size="default" className="bg-[#F0F0F0]" />
        <Skeleton.Node
          active
          className="bg-[#303041]"
          style={{ width: 250, borderRadius: 10 }}
        />
        <Skeleton.Input active size="small" className="bg-[#F0F0F0]" />
        <Skeleton.Button active size="default" className="bg-[#F0F0F0] w-1/5" />
      </div>
    </div>
  );
};

export default SkeletonCard;
