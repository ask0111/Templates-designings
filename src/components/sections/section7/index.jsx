import React, { useState } from "react";
import { List, List1, List2 } from "./List";

export const SectionSeven = () => {
  const[first, setFirst] = useState(false);
  const[sc, setSc] = useState(false);
  const[tr, setTr] = useState(false);


  return (
    <div className="w-full flex sc2-3">
      <div className="py-28 px-16 w-1/2 flex flex-col gap-4 h-[100vh]">
        <h1 className="text-4xl font-medium">Keep customers ready to buy with engaging content</h1>
        <div onClick={()=>{setFirst(!first); setSc(false); setTr(false) }} style={{borderBottom: '.2px solid black'}}  className="w-full py-1 pb-4 flex flex-wrap justify-between">
          <span className="text-lg">Content Optimizer</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-chevron-down"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
          {first && <List />}
        </div>
        <div  onClick={()=>{setFirst(false); setSc(!sc); setTr(false) }} style={{borderBottom: '.2px solid black'}}  className="w-full py-1 pb-4 flex flex-wrap  justify-between">
          <span className="text-lg">Content Optimizer</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-chevron-down"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
          {sc && <List1 />}
        </div>
        <div  onClick={()=>{setFirst(false); setSc(false); setTr(!tr) }} className="w-full py-1 flex flex-wrap pb-4 justify-between">
          <span className="text-lg">Content Optimizer</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-chevron-down"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
          {tr && <List2 />}
        </div>
      </div>
      <div className="h-[100vh] w-1/2 border">
        <img className="img-full" src="/img/section7/1.webp" />
      </div>
    </div>
  );
};
