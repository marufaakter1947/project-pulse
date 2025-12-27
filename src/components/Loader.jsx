"use client";

import { FadeLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <FadeLoader
        color="#2563EB"   // Blue color
        height={15}
        width={5}
        radius={2}
        margin={2}
        loading={true}
      />
    </div>
  );
}
