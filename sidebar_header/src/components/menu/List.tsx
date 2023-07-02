import React, { useState } from "react";
import {
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  IconButton,
  Box,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Menu, menuList } from "../../constants/sampleData";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import IndeterminateCheckBoxOutlinedIcon from "@mui/icons-material/IndeterminateCheckBoxOutlined";
import { useRouter } from "next/router";

const menus: Menu[] = menuList;

interface NestedListProps {
  isDisplay?: boolean;
}

export default function NestedList(props: NestedListProps) {
  const { isDisplay } = props;
  const [open, setOpen] = useState<Record<number, boolean>>({});
  const [selected, setSelected] = useState<number | null>(null);
  const router = useRouter();

  const handleClick = (menu: Menu) => {
    setOpen((prevOpen) => ({
      ...prevOpen,
      [menu.id]: !prevOpen[menu.id],
    }));
    handleSelect(menu);
  };

  const handleSelect = (menu: Menu) => {
    setSelected(menu.id);
    if (menu.url) {
      router.push(menu.url);
    }
  };

  const initializeOpenState = (menus: Menu[], spread: boolean) => {
    setSelected(null);
    const openState: Record<number, boolean> = {};

    menus.forEach((menu) => {
      openState[menu.id] = spread;
      if (menu.children) {
        const childOpenState = initializeOpenState(menu.children, spread);
        Object.assign(openState, childOpenState);
      }
    });

    return openState;
  };

  const renderMenus = (menus: Menu[], depth: number = 0) =>
    menus.map((menu) => (
      <React.Fragment key={menu.id}>
        <ListItemButton
          selected={menu.id === selected}
          onClick={() => handleClick(menu)}
          sx={{ pl: 2 + 2 * depth }}
        >
          <ListItemText primary={menu.title} />
          {menu.children && (open[menu.id] ? <ExpandLess /> : <ExpandMore />)}
        </ListItemButton>
        {menu.children && (
          <Collapse in={open[menu.id]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {renderMenus(menu.children, depth + 1)}
            </List>
          </Collapse>
        )}
      </React.Fragment>
    ));

  return (
    <Box sx={{ display: isDisplay ? "flex" : "none", flexDirection: "column" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <IconButton onClick={() => setOpen(initializeOpenState(menus, true))}>
          <AddBoxOutlinedIcon />
        </IconButton>
        <IconButton onClick={() => setOpen(initializeOpenState(menus, false))}>
          <IndeterminateCheckBoxOutlinedIcon />
        </IconButton>
      </Box>
      <List>{renderMenus(menus)}</List>
    </Box>
  );
}
