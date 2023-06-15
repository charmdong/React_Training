import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            SPS
          </Typography>
          <Button
            color="inherit"
            onClick={() => router.push("reservation/status")}
          >
            예약 현황
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
