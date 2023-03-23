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
  const { collapsed, collapseSidebar, toggleSidebar } = useProSidebar();
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
    // TODO: 접속한 화면의 크기가 애초에 작은 경우에는 시작부터 collapse되어야 함
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [collapseSidebar]);

  const handleOnclick = (
    event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    const { key } = event.target as HTMLButtonElement & { key: string };
    setActive(key);

    if (collapsed) {
      // Sidebar가 축소된 상태에서 MenuItem을 클릭한 경우
      if (
        event.currentTarget.parentElement?.className === "pro-inner-list-item"
      ) {
        setOpenSubMenu([]);
      }
      toggleSidebar();
    } else {
      // Sidebar가 확장된 상태에서 MenuItem을 클릭한 경우
      if (
        event.currentTarget.parentElement?.className !== "pro-inner-list-item"
      ) {
        setOpenSubMenu([]);
      }
    }

    const parentNode = event.currentTarget.parentElement;
    if (parentNode && parentNode.className === "pro-inner-list-item") {
      const parentKey = parentNode.getAttribute("data-parentkey") as string;
      const subMenuIndex = openSubMenu.indexOf(parentKey);
      if (subMenuIndex !== -1) {
        setOpenSubMenu([
          ...openSubMenu.slice(0, subMenuIndex),
          ...openSubMenu.slice(subMenuIndex + 1),
        ]);
      } else {
        setOpenSubMenu([...openSubMenu, parentKey]);
      }
    }
  };

  const handleSubmenuClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const { className } = event.target as HTMLDivElement;
    if (className !== "pro-inner-list-item") {
      setOpenSubMenu([]);
    }
  };

  return (
    <>
      <Sidebar>
        <Menu>
          {menuList.map((menu, index: number) =>
            menu.children ? (
              <SubMenu
                key={index}
                label={menu.name}
                icon={<AiFillHome />}
                data-parentkey={`${index}`}
                open={openSubMenu.indexOf(`${index}`) !== -1}
              >
                {menu.children.map((sub, subIndex: number) => (
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
