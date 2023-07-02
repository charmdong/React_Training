import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Box,
} from "@mui/material";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

interface HeaderProps {
  open?: boolean;
  onClick?: () => void;
}

function Header(props: HeaderProps) {
  const { open, onClick } = props;

  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <IconButton color="inherit" onClick={onClick}>
            {open ? (
              <KeyboardDoubleArrowLeftIcon />
            ) : (
              <KeyboardDoubleArrowRightIcon />
            )}
          </IconButton>
        </Box>
        <Box sx={{ flexGrow: 1, textAlign: "center" }}>
          <Typography variant="h6" component="div">
            시스템명
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1, textAlign: "end" }}>
          <Button color="inherit">로그인</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
