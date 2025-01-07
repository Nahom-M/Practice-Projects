"use client";

import React, { useState } from "react";
import { tabs } from "@/utils/globalData";

const Experiences = () => {
  const [activeTab, setActiveTab] = useState("Tab1");
  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className="w-screen h-screen flex flex-col bg-standard text-gray-200">
      <h3 className="text-6xl mt-10 mb-10 text-center bg-gradient-to-r from-blue-600 to-purple-400 bg-clip-text text-transparent">
        Experiences
      </h3>
      {/* Tabs */}
      <div className="flex justify-center border-b border-gray-800 bg-standard">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex-1 px-4 py-3 text-lg font-medium text-center ${
              activeTab === tab.id
                ? "text-blue-400 border-b-4 border-blue-400 bg-gray-900"
                : "text-gray-500 hover:text-blue-400 hover:bg-gray-900"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center bg-standard">
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-bold text-blue-400">
            {activeTabData.title}
          </h2>
          <p className="text-xl text-gray-400">{activeTabData.time}</p>
          <p className="text-xl text-gray-300 px-10">{activeTabData.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
