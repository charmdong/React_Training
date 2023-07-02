import React, { useState } from "react";
import type { AppProps } from "next/app";
import { Box } from "@mui/system";
import Header from "../components/header/Header";
import NestedList from "../components/menu/List";

function MyApp({ Component, pageProps }: AppProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header
        open={sidebarOpen}
        onClick={() => setSidebarOpen((prev) => !prev)}
      />
      <Box sx={{ display: "flex", flex: 1, alignItems: "stretch" }}>
        <NestedList isDisplay={sidebarOpen} />
        <Box component="main" sx={{ flex: 1, backgroundColor: "#f5f5f5" }}>
          <Component {...pageProps} />
        </Box>
      </Box>
    </Box>
  );
}
export default MyApp;
