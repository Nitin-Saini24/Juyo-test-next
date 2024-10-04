"use client";
import { useTab } from "../../Components/Context/ContextTabs";
import { Header } from "@/Components/header/Header";
import { Sidebar } from "@/Components/sidebar/Sidebar";
import { Box, Tabs, Text } from "@radix-ui/themes";
// import { Tabs } from "@radix-ui/react-tabs";
// import { Box, Text } from "@radix-ui/themes";

export default function Dashboard() {
  const { selectedTab } = useTab();
  return (
    <>
      <Tabs.Root value={selectedTab}>
        <Box pt="3">
          <Tabs.Content value="overview" className="TabsContent">
            <Text size="2">overview</Text>
          </Tabs.Content>

          <Tabs.Content value="sleep" className="TabsContent">
            <Text size="2">sleep.</Text>
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
