import React from "react";

export default function ClientCard({
  title,
  total,
  rate,
  levelUp,
  levelDown,
  children,
  backgroundColor,
}) {
  return (
    <div
      className={`flex justify-between rounded-lg border border-stroke ${
        backgroundColor ? backgroundColor : "bg-white"
      } py-4 px-5 shadow-md dark:border-strokedark dark:bg-boxdark`}
    >
      <div className="flex items-end w-1/2 justify-start">
        <div>
          <span className="text-sm font-medium">{title}</span>
          <h4 className="text-2xl font-bold text-black dark:text-white">
            {total}
          </h4>
        </div>
      </div>
      <div className="flex h-full w-1/2 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
        <span
          className={`flex items-center gap-1 text-sm font-medium border border-green-400 rounded-xl px-2  ${
            levelUp && "text-green-500"
          } ${levelDown && "text-red-500"} `}
        >
          {rate}

          {levelUp && (
            <svg
              className="fill-meta-3"
              width="10"
              height="11"
              viewBox="0 0 10 11"
              fill="green"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z"
                fill=""
              />
            </svg>
          )}
          {levelDown && (
            <svg
              className="fill-meta-5"
              width="10"
              height="11"
              viewBox="0 0 10 11"
              fill="red"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.64284 7.69237L9.09102 4.33987L10 5.22362L5 10.0849L-8.98488e-07 5.22362L0.908973 4.33987L4.35716 7.69237L4.35716 0.0848701L5.64284 0.0848704L5.64284 7.69237Z"
                fill=""
              />
            </svg>
          )}
        </span>
      </div>
    </div>
  );
}
