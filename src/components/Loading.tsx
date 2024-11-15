import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center text-4xl font-bold">
      <Image
        src={"/icons/spinner-icon.svg"}
        alt="Loading..."
        width={100}
        height={100}
        className="animate-spin"
      />
    </div>
  );
};

export default Loading;
