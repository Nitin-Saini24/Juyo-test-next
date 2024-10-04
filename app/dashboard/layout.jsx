"use client";
import React, { useState } from "react";
import Dashboard from "./page";
import { Header } from "./Header";
import { TabProvider } from "@/Components/Context/ContextTabs";

export default function Layout({ children }) {
  return (
    <div>
      <TabProvider>
        <Header />
        {children}
      </TabProvider>
    </div>
  );
}
