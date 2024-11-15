import React from "react";

const History = () => {
  return (
    <main className="px-10 py-20">
      {historyList.map((point, index) => {
        return (
          <div key={index}>
            <div className="flex items-center">
              <hr className="mx-4 h-1 w-full bg-black" />
              <h2 className="flex text-4xl">
                {point.year.split("").map((val, index) => {
                  return (
                    <div
                      key={index}
                      className={
                        "animate-[wave_2s_ease-in-out_" +
                        (index + 1) * 0.3 +
                        "s_infinite]"
                      }
                    >
                      {val}
                    </div>
                  );
                })}
              </h2>
              <hr className="mx-4 h-1 w-full bg-black" />
            </div>

            <ol className="flex flex-wrap items-center justify-center gap-5">
              {point.content.map((val, index) => {
                return (
                  <li key={index} className="w-40 list-disc">
                    {val}
                  </li>
                );
              })}
            </ol>
          </div>
        );
      })}
    </main>
  );
};

export default History;

const historyList = [
  {
    year: "2000",
    content: [
      "Duis dolore reprehenderit sit eiusmod mollit aliqua id nisi minim.",
      "Enim veniam aliqua cupidatat id consequat fugiat occaecat ex deserunt mollit sunt esse.",
    ],
  },
  {
    year: "2005",
    content: [
      "Duis dolore reprehenderit sit eiusmod mollit aliqua id nisi minim.",
      "Enim veniam aliqua cupidatat id consequat fugiat occaecat ex deserunt mollit sunt esse.",
      "Enim veniam aliqua cupidatat id consequat fugiat occaecat ex deserunt mollit sunt esse.",
      "Enim veniam aliqua cupidatat id consequat fugiat occaecat ex deserunt mollit sunt esse.",
    ],
  },
  {
    year: "2010",
    content: [
      "Duis dolore reprehenderit sit eiusmod mollit aliqua id nisi minim.",
      "Enim veniam aliqua cupidatat id consequat fugiat occaecat ex deserunt mollit sunt esse.",
    ],
  },
  {
    year: "2015",
    content: [
      "Duis dolore reprehenderit sit eiusmod mollit aliqua id nisi minim.",
      "Enim veniam aliqua cupidatat id consequat fugiat occaecat ex deserunt mollit sunt esse.",
    ],
  },
];
