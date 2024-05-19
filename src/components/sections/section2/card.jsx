import React from "react";

export const Seaction2Card = ({ title, img, desc, btn, bg }) => {
  return (
    <div className={`w-1/4 ${bg}`}>
      <div className="h-[80vh] relative">
        <img className="img-full" src={img} />
        <p className="absolute font-sans p-4 font-medium text-2xl top-0">{title}</p>
      </div>
      <div className="p-8 text-md h-[38vh] m-auto flex justify-between flex-col gap-5">
        <p>{desc}</p>
        <button className="border-black border w-auto rounded-full px-5 py-3">
          {btn}
        </button>
      </div>
    </div>
  );
};
