"use client";
import React, { createContext, useContext, useState } from "react";

export const TabProvider = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState("overview"); // Default tab

  return (
    <TabContext.Provider value={{ selectedTab, setSelectedTab }}>
      {children}
    </TabContext.Provider>
  );
};

const TabContext = createContext();

export const useTab = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error("useTab must be used within a TabProvider");
  }
  return context;
};
