import React from "react";

export const SectionEight = () => {
  return (
    <div className="flex flex-col h-[130vh] py-16 gap-16 items-center">
      <h1 className="text-4xl w-[50%] font-medium text-center">
      Get up to 141% more revenue* with our Customer Lifetime Value and Likelihood to Purchase segments      </h1>
      <div className="flex h-[100vh] ">
        <div className=" flex w-1/2 h-[98vh]">
          <img className="img-full" src="/img/section8/1.png" />
        </div>
        <div className="flex flex-col overflow-y-scroll example w-1/2 h-[100vh]">
          <div className="h-[100vh] flex flex-col gap-4 p-[100px] py-[300px] justify-center">
            <h1 className="text-3xl font-">Mailchimp will help you focus on your most loyal and valuable customers.</h1>
            
          </div>
          <div className="h-[100vh] flex flex-col gap-4 p-[100px] py-[300px] justify-center">
            <h1 className="text-2xl font-medium">Predict who’s likely to buy again</h1>
            <p className="text-xl">
            Create segments of customers based on their lifetime value and likelihood to purchase.            </p>
            <a
              className="flex items-center gap-2"
              href="#"
            >
              Learn more
              <span className="rounded-full flex p-1 bg-pr-cl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-right-short"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                  />
                </svg>
              </span>
            </a>
          </div>
          <div className="h-[100vh] flex flex-col gap-4 p-[100px] py-[300px] justify-center">
            <h1 className="text-2xl font-medium">Build customers for life</h1>
            <p className="text-xl">
            Create segments of customers based on their lifetime value and likelihood to purchase.            </p>
            <a
              className="flex items-center gap-2"
              href="#"
            >
              Learn more
              <span className="rounded-full flex p-1 bg-pr-cl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-right-short"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
