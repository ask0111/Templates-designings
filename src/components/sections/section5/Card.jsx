import React from "react";

export const CardPrice = ({
  clas,
  title,
  desc,
  delet,
  price,
  priceText,
  text,
  btn,
  start,
  line,
}) => {
  return (
    <div className={`${clas} bg-white w-1/4 h-[100%]`}>
      {clas && (
        <p className="py-2 z-10 relative bg-[#c5dbf2] text-xs text-center">
          <span
            style={{ borderBottom: ".5px dashed blue" }}
            className="relative z-20"
          >
            Best value
          </span>{" "}
        </p>
      )}
      <div className={` px-4 py-6 bg-white w-full m-auto border`}>
        <h1 className="text-2xl">{title}</h1>
        <p style={{ fontSize: "10px" }}>{desc}</p>
        <br />
        <span>Starts at</span>
        <delete className="text-2xl block text-gray-400 line-through">
          {delet}
        </delete>
        <p className="text-2xl font-medium">
          <sup style={{ fontSize: "8px" }}>₹</sup>
          {price}
        </p>
        <p>{priceText}</p>
        {text?.map((txt, index) => {
          if (start && index >= line) {
            return (
              <div
                key={index}
                className="flex text-xs gap-2 text-gray-400 border-b-2 py-6"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                </svg>
                <span className="underline-doted">{txt}</span>
              </div>
            );
          } else {
            return (
              <div key={index} className="flex text-xs gap-2 border-b-2 py-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-check-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                </svg>
                <span
                  style={{ borderBottom: ".5px dashed black" }}
                  className="underline-doted"
                >
                  {txt}
                </span>
              </div>
            );
          }
        })}

        <p
          className={` border rounded-full mt-6 py-2 cursor-pointer text-center font-medium ${
            clas && "bg-pr-cl text-medium"
          }`}
        >
          {btn}
        </p>
      </div>
    </div>
  );
};
