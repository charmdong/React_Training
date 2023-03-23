import SideMenubar from "@/components/Sidebar";
import type { AppProps } from "next/app";
import { ProSidebarProvider } from "react-pro-sidebar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div style={{ display: "flex", height: "100%" }}>
      <ProSidebarProvider>
        <SideMenubar />
      </ProSidebarProvider>
      <Component {...pageProps} />
    </div>
  );
}
