import { TabPanel } from "@mui/base/TabPanel";

export default function TaskTab({
  value,
  children,
}: {
  value: string | number;
  children: React.ReactNode;
}) {
  return (
    <TabPanel value={value} style={{ marginLeft: "0.5rem" }}>
      {children}
    </TabPanel>
  );
}
