import React from "react";
import Image, { StaticImageData } from "next/image";

type Props = {
  icon: StaticImageData;
  name: string;
  description: string;
};

const ServiceCard = ({ icon, name, description }: Props) => {
  return (
    <div className="">
      <Image src={icon} width={68} height={60} alt={name} />
      <h2 className="mt-6 text-xl md:text-2xl font-bold text-gray-200">{name}</h2>
      <p className="mt-6 text-gray-300">{description}</p>
    </div>
  );
};

export default ServiceCard;
