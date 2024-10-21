import React from "react";

const Timeline = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={`${
        React.Children.count(children) > 1 ? "timeline" : ""
      } relative flex flex-col gap-32 m-5 max-lg:gap-20`}
    >
      {React.Children.map(children, (child, index) => {
        if (index % 2 == 1) {
          return (
            <div className="flex" key={index}>
              <div className="flex-1 relative">
                <div className="lg:hidden pl-5">{child}</div>
                <div className="lg:hidden w-3 h-3 rotate-45 bg-shade-gray absolute left-0 -translate-x-[50%] top-1/2 -translate-y-[50%]"></div>
              </div>
              <div className="max-lg:hidden flex-1 relative">
                <div className="pl-5">{child}</div>
                <div className="w-3 h-3 rotate-45 bg-shade-gray absolute left-0 -translate-x-[50%] top-1/2 -translate-y-[50%]"></div>
              </div>
            </div>
          );
        } else {
          return (
            <div className="flex" key={index}>
              <div className="max-lg:hidden flex-1 relative">
                <div className="w-3 h-3 rotate-45 bg-shade-gray absolute right-0 translate-x-[50%] top-1/2 -translate-y-[50%]"></div>
                <div className="pr-5">{child}</div>
              </div>
              <div className="flex-1 relative">
                <div className="lg:hidden w-3 h-3 rotate-45 bg-shade-gray absolute left-0 -translate-x-[50%] top-1/2 -translate-y-[50%]"></div>
                <div className="lg:hidden pl-5">{child}</div>
              </div>
            </div>
          );
        }
      })}
      {/* <div className="flex ">
        <div className="flex-1 relative">
          <div className="w-3 h-3 rotate-45 bg-shade-gray absolute right-0 translate-x-[50%] top-1/2 -translate-y-[50%]"></div>
          <div className="pr-10">
            <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora in
                eligendi perferendis voluptates possimus dignissimos optio quod
                deleniti quis ab accusantium obcaecati fugiat, eius animi pariatur
                placeat illum repudiandae maxime?
            </div>
          </div>
        </div>
        <div className="flex-1 "></div>
      </div>
      <div className="flex ">
        <div className="flex-1 "></div>
        <div className="flex-1 relative">
          <div className="w-3 h-3 rotate-45 bg-shade-gray absolute left-0 -translate-x-[50%] top-1/2 -translate-y-[50%]"></div>
          <div className="pl-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora in
            eligendi perferendis voluptates possimus dignissimos optio quod
            deleniti quis ab accusantium obcaecati fugiat, eius animi pariatur
            placeat illum repudiandae maxime?
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Timeline;
