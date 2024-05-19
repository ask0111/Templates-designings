import React from "react";

export const SectionSix = () => {
  return (
    <div className="flex flex-col h-[130vh] py-16 gap-16 items-center">
      <h1 className="text-4xl w-[50%] font-medium text-center">
        Generate up to 7x more orders* with Customer Journey Builder automations
      </h1>
      <div className="flex h-[100vh] ">
        <div className=" flex w-1/2 h-[98vh]">
          <img className="img-full" src="/img/section6/1.png" />
        </div>
        <div className="flex flex-col overflow-y-scroll example w-1/2 h-[100vh]">
          <div className="h-[100vh] flex flex-col gap-4 p-[100px] py-[300px] justify-center">
            <h1 className="text-2xl font-medium">Convert more customers at scale</h1>
            <p className="text-xl">
              Drive more traffic and sales by setting up automations that
              trigger emails based on customer behavior with our Customer
              Journey Builder.
            </p>
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
            <h1 className="text-2xl font-medium">Discover new ways to automate</h1>
            <p className="text-xl">
            Get a head start with pre-built journeys that help you cross-sell your products, recover abandoned carts, re-engage existing customers, and win new ones.
            </p>
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
            <h1 className="text-2xl font-medium">Keep your emails relevant and your brand growing</h1>
            <p className="text-xl">
            Deliver personalized emails based on their buying behavior, survey responses, chat interactions, and support tickets to promote loyalty and growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
