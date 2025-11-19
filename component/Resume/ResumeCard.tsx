import React from "react";
import { IconType } from "react-icons";

type Props = {
  role: string;
  Icon: IconType;
  date?: string;
  info?: string;
};

const ResumeCard = ({ role, Icon, date, info }: Props) => {
  return (
    <div className="mb-8 flex items-start space-x-6 bg-blue-950/30 p-5 rounded-lg border border-blue-800/50 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="sm:w-14 sm:h-14 w-10 h-10 bg-blue-950 rounded-full flex items-center justify-center flex-col cursor-pointer hover:scale-110 transition-all duration-300">
        <Icon className="sm:w-8 sm:h-8 w-6 text-white" />
      </div>

      <div className="flex-1">
        {date && (
          <h1 className="mb-3 sm:px-6 sm:py-1.5 px-4 py-1 rounded-full bg-gray-300 text-gray-700 w-fit sm:text-sm text-xs font-semibold">
            {date}
          </h1>
        )}

        <h1 className="text-gray-100 text-lg sm:text-xl font-bold mb-2">
          {role}
        </h1>

        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          {info}
        </p>
      </div>
    </div>
  );
};

export default ResumeCard;
