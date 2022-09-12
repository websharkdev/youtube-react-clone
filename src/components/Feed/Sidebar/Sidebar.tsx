import { Box, Stack } from "@mui/material";
import { FC } from "react";
import { categories } from "../../../utils/constants";
import { SidebarItem } from "./SidebarItem";

type Props = {
  selectedCategory: string;
  setSelectedCategory: any;
};

type CategoriesItemProps = {
  name: string;
  id: number;
  icon: React.ReactNode;
};

export const Sidebar: FC<Props> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <Stack
      direction={{ sm: "row", md: "column" }}
      sx={{ overflowY: "auto", height: { sm: "auto", md: "95%" } }}
    >
      {categories.map((item: CategoriesItemProps) => (
        <Box sx={{ mb: 2 }} key={item.id}>
          <SidebarItem
            name={item.name}
            icon={item.icon}
            id={item.id}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </Box>
      ))}
    </Stack>
  );
};