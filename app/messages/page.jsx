"use client";
import ChatContactList from "@/Components/ChatContact/ChatContactList";
import React from "react";
import { useState } from "react";

export default function Page() {
  const [selectedChat, setselectedChat] = useState(null);
  const [mobileChatlist, setMobileChatlist] = useState(false);
  return (
    <div className="w-full h-full flex justify-center items-center shadow rounded-xl">
      <div className="grid grid-cols-12 w-full ">
        {/* Sidebar */}
        <div
          className={`lg:col-span-4 col-span-12 ${
            mobileChatlist ? "lg:block hidden" : "lg:block block"
          } w-full 2xl:col-span-3 `}
        >
          <ChatContactList
            setselectedChat={setselectedChat}
            setMobileChatlist={setMobileChatlist}
            mobileChatlist={mobileChatlist}
          />
        </div>
      </div>
    </div>
  );
}
