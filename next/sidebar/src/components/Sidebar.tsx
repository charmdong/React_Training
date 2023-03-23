import { MenuDTO } from "@/interfaces/MenuDTO";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import { AiFillHome } from "react-icons/ai";

const menuItems: MenuDTO[] = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Products",
    children: [
      {
        name: "Product 1",
        url: "/products/1",
      },
      {
        name: "Product 2",
        url: "/products/2",
      },
      {
        name: "Product 3",
        url: "/products/3",
      },
    ],
  },
  {
    name: "About Us",
    url: "/about",
  },
];

export default function SideMenubar() {
  const { collapsed, collapseSidebar } = useProSidebar();
  const [menuList, setMenuList] = useState<MenuDTO[]>([]);
  const [active, setActive] = useState<string>("");
  const [openSubMenu, setOpenSubMenu] = useState<string[]>([]);

  useEffect(() => {
    setMenuList(menuItems);

    function handleResize() {
      if (window.innerWidth < 768) {
        collapseSidebar(true);
      } else {
        collapseSidebar(false);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [collapseSidebar]);

  const handleOnclick = (event: any) => {
    const { key } = event.target; // 클릭한 MenuItem 엘리먼트의 key 값을 가져옵니다.
    setActive(key);

    // Sidebar가 축소된 상태에서만 해당 SubMenu를 열어둡니다.
    if (collapsed && openSubMenu.indexOf(key.split("-")[0]) === -1) {
      setOpenSubMenu([...openSubMenu, key.split("-")[0]]);
    }
  };

  return (
    <>
      <Sidebar>
        <Menu>
          {menuList.map((menu, index) =>
            menu.children ? (
              <SubMenu
                key={index}
                label={menu.name}
                icon={<AiFillHome />}
                defaultOpen={openSubMenu.indexOf(`${index}`) !== -1}
              >
                {menu.children.map((sub, subIndex) => (
                  <MenuItem
                    key={`${index}-${subIndex}`}
                    component={<Link href={sub.url || ""} />}
                    onClick={handleOnclick}
                    active={`${index}-${subIndex}` === active}
                  >
                    {sub.name}
                  </MenuItem>
                ))}
              </SubMenu>
            ) : (
              <MenuItem
                key={`${index}`}
                icon={<AiFillHome />}
                component={<Link href={menu.url || ""} />}
                onClick={handleOnclick}
                active={`${index}` === active}
              >
                {menu.name}
              </MenuItem>
            )
          )}
        </Menu>
      </Sidebar>
    </>
  );
}
