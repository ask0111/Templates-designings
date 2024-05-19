import React from "react";
import { Footer1 } from "./Footer1";
import { Svg, Svg1, Svg2, Svg3 } from "./svg";

export const Footer = () => {
  return (
    <div className="w-full py-16 sc2-3">
      <Footer1 />
      <div className="w-full py-12">
        <div className="flex py-4 gap-6 w-full justify-center items-center">
          <h1 className="font-black text-2xl">INTUIT</h1>
          <Svg />
          <Svg1 />
          <Svg2 />
          <Svg3 />
        </div>
        <div className="flex py-4 gap-16 w-[100%] justify-center items-center">
          <div className="flex gap-6">
            {[2, 3].map((number) => {
              return (
                <img
                  width={100}
                  height={100}
                  src={`/img/footer/${number}.png`}
                />
              );
            })}
          </div>
          <div className="flex gap-6">
            {[4, 5, 6, 7, 8, 9].map((number) => {
              return (
                <img width={20} height={20} src={`/img/footer/${number}.png`} />
              );
            })}
          </div>
          <div className="flex gap-6">
            {[10].map((number) => {
              return (
                <img
                  width={100}
                  height={100}
                  src={`/img/footer/${number}.png`}
                />
              );
            })}
          </div>
        </div>
        <div className="flex py-4 gap-4 w-[100%] justify-center items-center">
          <select
            id="country"
            className="block appearance-none w-[200px] bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          >
            <option>United States</option>
            <option>Canada</option>
            <option>Mexico</option>
          </select>
          <span className="text-xs w-[50%]">
            ©2001-2024 All Rights Reserved. Mailchimp® is a registered trademark
            of The Rocket Science Group. Apple and the Apple logo are trademarks
            of Apple Inc. Mac App Store is a service mark of Apple Inc. Google
            Play and the Google Play logo are trademarks of Google Inc. Privacy
            | Terms | Legal | Cookie Preferences
          </span>
        </div>
      </div>
    </div>
  );
};
