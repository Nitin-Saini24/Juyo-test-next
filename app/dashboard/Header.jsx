"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Box, Tabs, Text, Theme } from "@radix-ui/themes";
// import { Box } from "lucide-react";
import { TbSmartHome } from "react-icons/tb";
import { CiCamera } from "react-icons/ci";
import { PiPhoneCallLight } from "react-icons/pi";
import { TiMessages } from "react-icons/ti";
import { useTab } from "../../Components/Context/ContextTabs";
// import { Button } from "shadcn-ui";

export const Header = () => {
  const { selectedTab, setSelectedTab } = useTab();
  return (
    <header className="sticky top-0 z-[999] flex w-full bg-white  dark:bg-boxdark dark:drop-shadow-none pt-5">
      <div className="w-full">
        <div className="bg-white ">
          <div>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">
                    <TbSmartHome className="w-5 h-5" />
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/component">Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex justify-between w-1/2">
            <div className="mt-4 mb-2">
              <p className="font-semibold">Walter White</p>
              <p className="text-sm text-gray-500">50.M He/Him</p>
            </div>
            <div className="mt-4 mb-2 flex gap-3 justify-center items-center">
              <span className="text-violet-900 bg-violet-200 rounded-md p-2">
                <PiPhoneCallLight className="w-5 h-5  " />
              </span>
              <span className="text-violet-900 bg-violet-200 rounded-md p-2">
                <CiCamera className="w-5 h-5" />
              </span>
              <span className="text-violet-900 bg-violet-200 rounded-md p-2">
                <TiMessages className="w-5 h-5" />
              </span>
            </div>
          </div>
          <Tabs.Root value={selectedTab} onValueChange={setSelectedTab}>
            <Tabs.List className="TabsList">
              <Tabs.Trigger value="overview" className="TabsTrigger">
                Overview
              </Tabs.Trigger>
              <Tabs.Trigger value="sleep" className="TabsTrigger">
                Sleep
              </Tabs.Trigger>
              <Tabs.Trigger value="activity" className="TabsTrigger">
                Activity
              </Tabs.Trigger>
              <Tabs.Trigger value="nutrition" className="TabsTrigger">
                Nutrition
              </Tabs.Trigger>
              <Tabs.Trigger value="mind" className="TabsTrigger">
                Mind
              </Tabs.Trigger>
              <Tabs.Trigger value="reports" className="TabsTrigger">
                Reports
              </Tabs.Trigger>
              <Tabs.Trigger value="consultations" className="TabsTrigger">
                Consultations
              </Tabs.Trigger>
            </Tabs.List>
          </Tabs.Root>
          <div className="space-x-4"></div>
        </div>
      </div>
    </header>
  );
};
