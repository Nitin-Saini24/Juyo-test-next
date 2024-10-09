// "use client";
import Image from "next/image";
import Dashboard from "./dashboard/page";
import "@radix-ui/themes/styles.css";
import { TabProvider } from "@/Components/Context/ContextTabs";




export default function Home() {

  return (
    <div className="">
      <TabProvider>
        {/* <div>hello</div> */}
        <Dashboard />
      </TabProvider>
    </div>
  );
}
