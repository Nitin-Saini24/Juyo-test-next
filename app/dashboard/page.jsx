"use client";
import { useTab } from "../../Components/Context/ContextTabs";
import { Header } from "@/Components/header/Header";
import { Sidebar } from "@/Components/sidebar/Sidebar";
import { Box, Tabs, Text } from "@radix-ui/themes";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Dashboard() {
  const { selectedTab } = useTab();
  return (
    <>
      <Tabs.Root value={selectedTab}>
        <Box pt="3">
          <Tabs.Content value="overview" className="TabsContent">
            <div className="flex gap-5">
              <Card className="w-60 h-60 bg-violet-100">
                <CardContent>
                  <p>Card Content</p>
                </CardContent>
              </Card>
              <Card className="w-60 h-60 bg-white">
                <CardContent>
                  <p>Card Content</p>
                </CardContent>
              </Card>
              <Card className="w-60 h-60 bg-white">
                <CardContent>
                  <p>Card Content</p>
                </CardContent>
              </Card>
            </div>
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
