import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import logo from  './../../assets/images/mainlogo.png'
import { FiLogIn } from "react-icons/fi";
import { RxAvatar } from "react-icons/rx";



const Header = () => {

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`w-full z-50 transition-all duration-300 ${
        scrolled
          ? "fixed top-0 bg-white/70 backdrop-blur-md shadow-md"
          : "lg:absolute top-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        <div className="bg-white rounded-full px-6 py-3 flex items-center shadow-sm">
          <img
            src={logo}
            alt="bigbasket"
            className=""
          />
        </div>
        <div className="bg-white rounded-full px-2 py-2 flex items-center gap-2 shadow-sm hidden md:block">

          <Button
            variant="text"
            sx={{
              textTransform: "none",
              fontWeight: 500,
              color: "#65a30d",
              px: 3,
            }}
          >
            Login
            {/* <FiLogIn /> */}

          </Button>

          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              borderRadius: "9999px",
              backgroundColor: "#65a30d",
              px: 3,
              "&:hover": { backgroundColor: "#4d7c0f" },
            }}
          >
       

            Sign Up
          </Button>
        </div>
        <div className="md:hidden block">
       <IconButton onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>
       <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{ width: 280 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <IconButton sx={{ mb: 2 }}>
            <CloseIcon />
          </IconButton>

          <List>
            {["Home", "About", "Services", "Contact"].map((text) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
        </div>
      </div>
    </header>
  );
};

export default Header;
