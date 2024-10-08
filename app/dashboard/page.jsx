"use client";
import { useTab } from "../../Components/Context/ContextTabs";
import { Header } from "@/Components/header/Header";
import { Sidebar } from "@/Components/sidebar/Sidebar";
import { Box, Flex, Tabs, Text } from "@radix-ui/themes";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import ChartOne from "@/Components/Charts/ChartOne";
import ChartTwo from "@/Components/Charts/ChartTwo";

export default function Dashboard() {
  const { selectedTab } = useTab();
  const [openItem, setOpenItem] = useState("item-1");

  return (
    <>
      <Tabs.Root value={selectedTab} className="py-4">
        <Box>
          <Tabs.Content value="overview" className="TabsContent">
            <div className="flex gap-5">
              <Card className="w-72 h-60 bg-violet-100 ">
                <CardContent>
                  <p className="mt-3">AI Summery</p>
                  <p className="mt-3 text-sm DMSans">
                    Get to bed early today to meet your sleep goal between
                    8:45pm-9:30pm Get to bed early today to meet your sleep goal
                    between 8:45pm-9:30pm
                  </p>
                </CardContent>
              </Card>
              <Accordion
                type="single"
                collapsible
                className="w-80 h-60 ac_svg max-h-60 overflow-auto no-scrollbar"
                value={openItem}
                onValueChange={(value) => setOpenItem(value)}
              >
                <AccordionItem
                  value="item-1"
                  className={`border-0 px-3  ${
                    openItem === "item-1"
                      ? "bg-white shadow-sm rounded-md border-gray-100 border h-44"
                      : ""
                  }`}
                >
                  <AccordionTrigger>Onboarding</AccordionTrigger>
                  <AccordionContent className="text-sm DMSans">
                    Get to bed early today to meet your sleep goal between
                    8:45pm-9:30pm Get to bed early today to meet your sleep goal
                    between 8:45pm-9:30pm
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-2"
                  className={`border-0 px-3 ${
                    openItem === "item-2"
                      ? "bg-white shadow-sm rounded-md border-gray-100 border"
                      : ""
                  }`}
                >
                  <AccordionTrigger>Goals</AccordionTrigger>
                  <AccordionContent className="DMSans">
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-3"
                  className={`border-0 px-3 ${
                    openItem === "item-3"
                      ? "bg-white shadow-sm rounded-md border-gray-100 border"
                      : ""
                  }`}
                >
                  <AccordionTrigger>Key Insights</AccordionTrigger>
                  <AccordionContent className="DMSans">
                    Yes. It adheres to the WAI-ARIA design pattern. Yes. It
                    adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="mt-5 flex gap-10">
              <div>
                <div className="flex justify-between">
                  <p className="mb-3">Key Markers</p>
                  <button className="mb-3">dive </button>
                </div>
                <Flex
                  direction="column"
                  gap="3"
                  maxWidth="350px"
                  className="max-h-[260px] overflow-auto scrollbar_1px pr-2 w-[350px]"
                >
                  <Card variant="surface" className="mb-2 px-2 py-1 flex">
                    <div className=" bg-red-500 w-2 rounded-md mr-2"></div>
                    <div>
                      <Text as="div" size="2" weight="bold">
                        Sleep
                      </Text>
                      <div className="flex items-center gap-2">
                        <Text as="div" color="gray" size="2">
                          Average
                        </Text>
                        <Text as="div" color="red" className="text-xs">
                          · 7.5 hours
                        </Text>
                      </div>
                    </div>
                  </Card>

                  <Card variant="classic" className="mb-2 px-2 py-1 flex">
                    <div className=" bg-red-500 w-2 rounded-md mr-2"></div>
                    <div>
                      <Text as="div" size="2" weight="bold">
                        Sleep
                      </Text>
                      <div className="flex items-center gap-2">
                        <Text as="div" color="gray" size="2">
                          Average
                        </Text>
                        <Text as="div" color="red" className="text-xs">
                          · 7.5 hours
                        </Text>
                      </div>
                    </div>
                  </Card>
                  <Card variant="classic" className="mb-2 px-2 py-1 flex">
                    <div className=" bg-red-500 w-2 rounded-md mr-2"></div>
                    <div>
                      <Text as="div" size="2" weight="bold">
                        Sleep
                      </Text>
                      <div className="flex items-center gap-2">
                        <Text as="div" color="gray" size="2">
                          Average
                        </Text>
                        <Text as="div" color="red" className="text-xs">
                          · 7.5 hours
                        </Text>
                      </div>
                    </div>
                  </Card>
                  <Card variant="classic" className="mb-2 px-2 py-1 flex">
                    <div className=" bg-red-500 w-2 rounded-md mr-2"></div>
                    <div>
                      <div className=" bg-red-500 w-2 rounded-md mr-2"></div>
                      <div>
                        <Text as="div" size="2" weight="bold">
                          Sleep
                        </Text>
                        <div className="flex items-center gap-2">
                          <Text as="div" color="gray" size="2">
                            Average
                          </Text>
                          <Text as="div" color="red" className="text-xs">
                            · 7.5 hours
                          </Text>
                        </div>
                      </div>
                    </div>
                  </Card>
                  <Card variant="classic" className="mb-2 px-2 py-1 flex">
                    <div className=" bg-red-500 w-2 rounded-md mr-2"></div>
                    <div>
                      <Text as="div" size="2" weight="bold">
                        Sleep
                      </Text>
                      <div className="flex items-center gap-2">
                        <Text as="div" color="gray" size="2">
                          Average
                        </Text>
                        <Text as="div" color="red" className="text-xs">
                          · 7.5 hours
                        </Text>
                      </div>
                    </div>
                  </Card>
                  <Card variant="classic" className="mb-2 px-2 py-1 flex">
                    <div className=" bg-red-500 w-2 rounded-md mr-2"></div>
                    <div>
                      <Text as="div" size="2" weight="bold">
                        Sleep
                      </Text>
                      <div className="flex items-center gap-2">
                        <Text as="div" color="gray" size="2">
                          Average
                        </Text>
                        <Text as="div" color="red" className="text-xs">
                          · 7.5 hours
                        </Text>
                      </div>
                    </div>
                  </Card>
                  <Card variant="classic" className="mb-2 px-2 py-1 flex">
                    <div className=" bg-red-500 w-2 rounded-md mr-2"></div>
                    <div>
                      <Text as="div" size="2" weight="bold">
                        Sleep
                      </Text>
                      <div className="flex items-center gap-2">
                        <Text as="div" color="gray" size="2">
                          Average
                        </Text>
                        <Text as="div" color="red" className="text-xs">
                          · 7.5 hours
                        </Text>
                      </div>
                    </div>
                  </Card>
                </Flex>
              </div>
              <div>
                <div className="flex justify-between">
                  <p className="mb-3">Wearable data</p>
                  <button className="mb-3">dive </button>
                </div>
                <Flex
                  direction="column"
                  gap="3"
                  maxWidth="350px"
                  className="max-h-[260px] overflow-auto scrollbar_1px pr-2 w-[350px]"
                >
                  <Card variant="surface" className="mb-2 px-2 py-1 flex">
                    <div className=" bg-red-500 w-2 rounded-md mr-2"></div>
                    <div>
                      <Text as="div" size="2" weight="bold">
                        Sleep
                      </Text>
                      <div className="flex items-center gap-2">
                        <Text as="div" color="gray" size="2">
                          Average
                        </Text>
                        <Text as="div" color="red" className="text-xs">
                          · 7.5 hours
                        </Text>
                      </div>
                    </div>
                  </Card>

                  <Card variant="classic" className="mb-2 px-2 py-1 flex">
                    <div className=" bg-green-500 w-2 rounded-md mr-2"></div>
                    <div>
                      <Text as="div" size="2" weight="bold">
                        Sleep
                      </Text>
                      <div className="flex items-center gap-2">
                        <Text as="div" color="gray" size="2">
                          Average
                        </Text>
                        <Text as="div" color="green" className="text-xs">
                          · 7.5 hours
                        </Text>
                      </div>
                    </div>
                  </Card>
                  <Card variant="classic" className="mb-2 px-2 py-1 flex">
                    <div className=" bg-green-500 w-2 rounded-md mr-2"></div>
                    <div>
                      <Text as="div" size="2" weight="bold">
                        Sleep
                      </Text>
                      <div className="flex items-center gap-2">
                        <Text as="div" color="gray" size="2">
                          Average
                        </Text>
                        <Text as="div" color="green" className="text-xs">
                          · 7.5 hours
                        </Text>
                      </div>
                    </div>
                  </Card>
                  <Card variant="classic" className="mb-2 px-2 py-1 flex">
                    <div className=" bg-green-500 w-2 rounded-md mr-2"></div>
                    <div>
                      <Text as="div" size="2" weight="bold">
                        Sleep
                      </Text>
                      <div className="flex items-center gap-2">
                        <Text as="div" color="gray" size="2">
                          Average
                        </Text>
                        <Text as="div" color="green" className="text-xs">
                          · 7.5 hours
                        </Text>
                      </div>
                    </div>
                  </Card>
                  <Card variant="classic" className="mb-2 px-2 py-1 flex">
                    <div className=" bg-red-500 w-2 rounded-md mr-2"></div>
                    <div>
                      <Text as="div" size="2" weight="bold">
                        Sleep
                      </Text>
                      <div className="flex items-center gap-2">
                        <Text as="div" color="gray" size="2">
                          Average
                        </Text>
                        <Text as="div" color="red" className="text-xs">
                          · 7.5 hours
                        </Text>
                      </div>
                    </div>
                  </Card>
                  <Card variant="classic" className="mb-2 px-2 py-1 flex">
                    <div className=" bg-red-500 w-2 rounded-md mr-2"></div>
                    <div>
                      <Text as="div" size="2" weight="bold">
                        Sleep
                      </Text>
                      <div className="flex items-center gap-2">
                        <Text as="div" color="gray" size="2">
                          Average
                        </Text>
                        <Text as="div" color="red" className="text-xs">
                          · 7.5 hours
                        </Text>
                      </div>
                    </div>
                  </Card>
                  <Card variant="classic" className="mb-2 px-2 py-1 flex">
                    <div className=" bg-red-500 w-2 rounded-md mr-2"></div>
                    <div>
                      <Text as="div" size="2" weight="bold">
                        Sleep
                      </Text>
                      <div className="flex items-center gap-2">
                        <Text as="div" color="gray" size="2">
                          Average
                        </Text>
                        <Text as="div" color="red" className="text-xs">
                          · 7.5 hours
                        </Text>
                      </div>
                    </div>
                  </Card>
                </Flex>
              </div>
            </div>
          </Tabs.Content>
          <Tabs.Content value="sleep" className="TabsContent">
            <div className="flex gap-5">
              <Card className="w-60 h-60 bg-violet-100 ">
                <CardContent>
                  <p className="mt-3">AI Summery</p>
                  <p className="mt-3 text-sm">
                    Get to bed early today to meet your sleep goal between
                    8:45pm-9:30pm Get to bed early today to meet your sleep goal
                    between 8:45pm-9:30pm
                  </p>
                </CardContent>
              </Card>
              <ChartTwo />
              <ChartOne />
            </div>
            <div className="mt-5 flex gap-10">
              <div>
                <div className="flex justify-between">
                  <p className="mb-3">Key Markers</p>
                  <button className="mb-3">dive </button>
                </div>
                <Flex
                  direction="column"
                  gap="3"
                  maxWidth="350px"
                  className="max-h-[360px] overflow-auto scrollbar_1px pr-2 w-[350px]"
                >
                  <Card variant="surface" className="mb-2 px-2 py-1 flex">
                    <div className=" bg-red-500 w-2 rounded-md mr-2"></div>
                    <div>
                      <Text as="div" size="2" weight="bold">
                        Sleep
                      </Text>
                      <div className="flex items-center gap-2">
                        <Text as="div" color="gray" size="2">
                          Average
                        </Text>
                        <Text as="div" color="red" className="text-xs">
                          · 7.5 hours
                        </Text>
                      </div>
                    </div>
                  </Card>

                  <Card variant="classic" className="mb-2 px-2 py-1 flex">
                    <div className=" bg-red-500 w-2 rounded-md mr-2"></div>
                    <div>
                      <Text as="div" size="2" weight="bold">
                        Sleep
                      </Text>
                      <div className="flex items-center gap-2">
                        <Text as="div" color="gray" size="2">
                          Average
                        </Text>
                        <Text as="div" color="red" className="text-xs">
                          · 7.5 hours
                        </Text>
                      </div>
                    </div>
                  </Card>
                  <Card variant="classic" className="mb-2 px-2 py-1 flex">
                    <div className=" bg-red-500 w-2 rounded-md mr-2"></div>
                    <div>
                      <Text as="div" size="2" weight="bold">
                        Sleep
                      </Text>
                      <div className="flex items-center gap-2">
                        <Text as="div" color="gray" size="2">
                          Average
                        </Text>
                        <Text as="div" color="red" className="text-xs">
                          · 7.5 hours
                        </Text>
                      </div>
                    </div>
                  </Card>
                  <Card variant="classic" className="mb-2 px-2 py-1 flex">
                    <div className=" bg-red-500 w-2 rounded-md mr-2"></div>
                    <div>
                      <div className=" bg-red-500 w-2 rounded-md mr-2"></div>
                      <div>
                        <Text as="div" size="2" weight="bold">
                          Sleep
                        </Text>
                        <div className="flex items-center gap-2">
                          <Text as="div" color="gray" size="2">
                            Average
                          </Text>
                          <Text as="div" color="red" className="text-xs">
                            · 7.5 hours
                          </Text>
                        </div>
                      </div>
                    </div>
                  </Card>
                  <Card variant="classic" className="mb-2 px-2 py-1 flex">
                    <div className=" bg-red-500 w-2 rounded-md mr-2"></div>
                    <div>
                      <Text as="div" size="2" weight="bold">
                        Sleep
                      </Text>
                      <div className="flex items-center gap-2">
                        <Text as="div" color="gray" size="2">
                          Average
                        </Text>
                        <Text as="div" color="red" className="text-xs">
                          · 7.5 hours
                        </Text>
                      </div>
                    </div>
                  </Card>
                  <Card variant="classic" className="mb-2 px-2 py-1 flex">
                    <div className=" bg-red-500 w-2 rounded-md mr-2"></div>
                    <div>
                      <Text as="div" size="2" weight="bold">
                        Sleep
                      </Text>
                      <div className="flex items-center gap-2">
                        <Text as="div" color="gray" size="2">
                          Average
                        </Text>
                        <Text as="div" color="red" className="text-xs">
                          · 7.5 hours
                        </Text>
                      </div>
                    </div>
                  </Card>
                  <Card variant="classic" className="mb-2 px-2 py-1 flex">
                    <div className=" bg-red-500 w-2 rounded-md mr-2"></div>
                    <div>
                      <Text as="div" size="2" weight="bold">
                        Sleep
                      </Text>
                      <div className="flex items-center gap-2">
                        <Text as="div" color="gray" size="2">
                          Average
                        </Text>
                        <Text as="div" color="red" className="text-xs">
                          · 7.5 hours
                        </Text>
                      </div>
                    </div>
                  </Card>
                </Flex>
              </div>
              <div>
                <div className="flex justify-between">
                  <p className="mb-3">Wearable data</p>
                  <button className="mb-3">dive </button>
                </div>
                <Flex
                  direction="column"
                  gap="3"
                  maxWidth="350px"
                  className="max-h-[360px] overflow-auto scrollbar_1px pr-2 w-[350px]"
                >
                  <Card variant="surface" className="mb-2 px-2 py-1 flex">
                    <div className=" bg-red-500 w-2 rounded-md mr-2"></div>
                    <div>
                      <Text as="div" size="2" weight="bold">
                        Sleep
                      </Text>
                      <div className="flex items-center gap-2">
                        <Text as="div" color="gray" size="2">
                          Average
                        </Text>
                        <Text as="div" color="red" className="text-xs">
                          · 7.5 hours
                        </Text>
                      </div>
                    </div>
                  </Card>

                  <Card variant="classic" className="mb-2 px-2 py-1 flex">
                    <div className=" bg-green-500 w-2 rounded-md mr-2"></div>
                    <div>
                      <Text as="div" size="2" weight="bold">
                        Sleep
                      </Text>
                      <div className="flex items-center gap-2">
                        <Text as="div" color="gray" size="2">
                          Average
                        </Text>
                        <Text as="div" color="green" className="text-xs">
                          · 7.5 hours
                        </Text>
                      </div>
                    </div>
                  </Card>
                  <Card variant="classic" className="mb-2 px-2 py-1 flex">
                    <div className=" bg-green-500 w-2 rounded-md mr-2"></div>
                    <div>
                      <Text as="div" size="2" weight="bold">
                        Sleep
                      </Text>
                      <div className="flex items-center gap-2">
                        <Text as="div" color="gray" size="2">
                          Average
                        </Text>
                        <Text as="div" color="green" className="text-xs">
                          · 7.5 hours
                        </Text>
                      </div>
                    </div>
                  </Card>
                  <Card variant="classic" className="mb-2 px-2 py-1 flex">
                    <div className=" bg-green-500 w-2 rounded-md mr-2"></div>
                    <div>
                      <Text as="div" size="2" weight="bold">
                        Sleep
                      </Text>
                      <div className="flex items-center gap-2">
                        <Text as="div" color="gray" size="2">
                          Average
                        </Text>
                        <Text as="div" color="green" className="text-xs">
                          · 7.5 hours
                        </Text>
                      </div>
                    </div>
                  </Card>
                  <Card variant="classic" className="mb-2 px-2 py-1 flex">
                    <div className=" bg-red-500 w-2 rounded-md mr-2"></div>
                    <div>
                      <Text as="div" size="2" weight="bold">
                        Sleep
                      </Text>
                      <div className="flex items-center gap-2">
                        <Text as="div" color="gray" size="2">
                          Average
                        </Text>
                        <Text as="div" color="red" className="text-xs">
                          · 7.5 hours
                        </Text>
                      </div>
                    </div>
                  </Card>
                  <Card variant="classic" className="mb-2 px-2 py-1 flex">
                    <div className=" bg-red-500 w-2 rounded-md mr-2"></div>
                    <div>
                      <Text as="div" size="2" weight="bold">
                        Sleep
                      </Text>
                      <div className="flex items-center gap-2">
                        <Text as="div" color="gray" size="2">
                          Average
                        </Text>
                        <Text as="div" color="red" className="text-xs">
                          · 7.5 hours
                        </Text>
                      </div>
                    </div>
                  </Card>
                  <Card variant="classic" className="mb-2 px-2 py-1 flex">
                    <div className=" bg-red-500 w-2 rounded-md mr-2"></div>
                    <div>
                      <Text as="div" size="2" weight="bold">
                        Sleep
                      </Text>
                      <div className="flex items-center gap-2">
                        <Text as="div" color="gray" size="2">
                          Average
                        </Text>
                        <Text as="div" color="red" className="text-xs">
                          · 7.5 hours
                        </Text>
                      </div>
                    </div>
                  </Card>
                </Flex>
              </div>
            </div>
          </Tabs.Content>

          <Tabs.Content value="activity" className="TabsContent">
            <Text size="2">activity</Text>
          </Tabs.Content>
          <Tabs.Content value="nutrition" className="TabsContent">
            <Text size="2">nutritions.</Text>
          </Tabs.Content>
          <Tabs.Content value="mind" className="TabsContent">
            <Text size="2">mind</Text>
          </Tabs.Content>
          <Tabs.Content value="reports" className="TabsContent">
            <Text size="2">Reports</Text>
          </Tabs.Content>
          <Tabs.Content value="consultations" className="TabsContent">
            <Text size="2">consultation</Text>
          </Tabs.Content>
        </Box>
      </Tabs.Root>
    </>
  );
}
