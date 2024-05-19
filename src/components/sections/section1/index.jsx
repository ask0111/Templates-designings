import React from "react";

export const SectionOne = () => {
  return (
    <div
      style={{ height: "80vh" }}
      className="w-full flex items-center h-100vh"
    >
      <div className="m-auto h-100vh  w-2/3">
        <h1 className="text-5xl text-center py-8 font-medium font-sans tracking-tight">
          Turn Emails into Revenue
        </h1>
        <p className="text-center text-3xl font-normal font-sans">
          Win new customers with the #1 email marketing and automations platform
          that recommends ways to get more opens, clicks, and sales.
        </p>
        <p className="mx-auto text-center py-12 w-full">
          <a
            href="#"
            className=" py-2 rounded-full border-black border px-5 text-sm font-medium bg-pr-cl "
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};
