import React from "react";
import { BeatLoader } from "react-spinners";

const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <BeatLoader color="#36d7b7" />
    </div>
  );
};

export default Loading;
