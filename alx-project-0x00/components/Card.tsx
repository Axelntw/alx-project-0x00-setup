import Image from "next/image"
import HOUSE_IMAGE from "@/public/assets/house.png"
import STAR_IMAGE from "@/public/assets/star.png"
import React from "react"
import Pill from "./Pill"

const Card: React.FC = () => {
  return (
    <div className="h-[422px] w-[378.56px] cursor-pointer hover:shadow-md hover:rounded-lg ">
      <Image className="rounded-lg" src={HOUSE_IMAGE} width={378.56} height={299.37} alt="house image" />
      <div className="p-2 flex gap-2 mt-2">
        <Pill title="Top Villa" />
        <Pill title="Self CheckIn" />
        <Pill title="Free Reschedule" />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold">Beautiful House</h2>
        <div className="flex items-center gap-1">
          <Image src={STAR_IMAGE} width={20} height={20} alt="star" />
          <span className="text-sm text-gray-500">4.8</span>
        </div>
      </div>
    </div>
  )
}

export default Card
