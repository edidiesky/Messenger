import React, { useState } from "react";

const LoaderIndex: React.FC<{ type?: string }> = ({ type }) => {

  if (type === "small") {
    return (
      <div
        className="flex item-center justify-center"
      >
        <div className="loading small"></div>
      </div>
    );
  }
  return (
    <div
      className="flex item-center justify-center column gap-1"
      style={{ width: "100vw",
       zIndex: "200000",
        position: "fixed", height: "100vh", top: 0, left: 0,
         background: "rgba(255, 255, 255, 0.422)" }}
    >
      <div className="loading small"></div>
    </div>
  );
}

export default LoaderIndex
