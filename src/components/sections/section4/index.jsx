import React from "react";

export const SectionFour = () => {
  return (
    <div className="h-[78vh] flex px-12 py-16">
      <div className="w-1/2 flex flex-col items-cente px-8 justify-center gap-6">
        <h1 className="text-4xl font-medium">
          Get started easily with a personalized product tour
        </h1>
        <p>
          An onboarding specialist is here to help you get started with
          confidence—it’s included with Standard and Premium plans.*
        </p>
        <a  className="flex items-center gap-2" href="#">
          Learn more about onboarding
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
      <div className="w-1/2 h-[70vh] border">
            <img className="img-full" src="/img/section4/1.avif" />
      </div>
    </div>
  );
};
