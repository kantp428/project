"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";


// Icons
import HomeIcon from "@mui/icons-material/Home";
import BarChartIcon from "@mui/icons-material/BarChart";
import PeopleIcon from "@mui/icons-material/People";
import TaskIcon from "@mui/icons-material/Task";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Info";
import FeedbackIcon from "@mui/icons-material/Feedback";
import StarIcon from "@mui/icons-material/Star";
import Link from "next/link";
import next from "next";

const drawerWidth = 240;

type DashboardLayoutProps = {
  children: React.ReactNode;
  header: React.ReactNode;
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
};

export default function DashboardLayout({
  children,
  header,
  mobileOpen,
  handleDrawerToggle,
}: DashboardLayoutProps) {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (index: number) => {
    setSelectedIndex(index);
  };

  const navigationItems = [
    { text: "Home", icon: <HomeIcon />, href: "/" },
    { text: "Analytics", icon: <BarChartIcon />, href: "/Analytics" },
    { text: "Clients", icon: <PeopleIcon />, href:"/Clients" },
    { text: "Tasks", icon: <TaskIcon />, href:"/Tasks"},
  ];

  const secondaryNavigationItems = [
    { text: "Settings", icon: <SettingsIcon /> },
    { text: "About", icon: <InfoIcon /> },
    { text: "Feedback", icon: <FeedbackIcon /> },
  ];

  const drawer = (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: theme.spacing(2),
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            width: "100%",
            mb: 1,
            pt: 0.5,
          }}
        >
          <StarIcon color="primary" />
          <Typography variant="h6" fontWeight="bold" sx={{ mt: .2, ml: .5 }}>
            Student Data
          </Typography>
        </Box>
      </Box>
      <Divider />
      <List component="nav">
        {navigationItems.map((item, index) => (
          <Link href={item.href}>
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              selected={selectedIndex === index}
              onClick={() => handleListItemClick(index)}
              sx={{
                borderRadius: "8px",
                mx: 1,
                "&.Mui-selected": {
                  backgroundColor: "rgba(63, 81, 181, 0.1)",
                  "&:hover": {
                    backgroundColor: "rgba(63, 81, 181, 0.2)",
                  },
                },
              }}
              >
              <ListItemIcon
                sx={{
                  minWidth: 40,
                  color: selectedIndex === index ? "primary.main" : "inherit",
                }}
                >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontWeight: selectedIndex === index ? 600 : 400,
                }}
                />
            </ListItemButton>
          </ListItem>
        </Link>
        ))}
      </List>
      <Divider sx={{ my: 2 }} />
      <List>
        {secondaryNavigationItems.map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              selected={selectedIndex === index + navigationItems.length}
              onClick={() =>
                handleListItemClick(index + navigationItems.length)
              }
              sx={{
                borderRadius: "8px",
                mx: 1,
                "&.Mui-selected": {
                  backgroundColor: "rgba(63, 81, 181, 0.1)",
                  "&:hover": {
                    backgroundColor: "rgba(63, 81, 181, 0.2)",
                  },
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 40,
                  color:
                    selectedIndex === index + navigationItems.length
                      ? "primary.main"
                      : "inherit",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontWeight:
                    selectedIndex === index + navigationItems.length
                      ? 600
                      : 400,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {/* <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ p: 2 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            p: 2,
            bgcolor: 'background.default',
            borderRadius: 2,
            boxShadow: 1,
          }}
        >
          <Avatar
            sx={{ mr: 2, width: 40, height: 40 }}
            alt="Riley Carter"
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=40"
          />
          <Box>
            <Typography variant="subtitle2" fontWeight="bold">
              Riley Carter
            </Typography>
            <Typography variant="body2" color="text.secondary">
              riley@email.com
            </Typography>
          </Box>
        </Box>
      </Box> */}
    </>
  );

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
          boxShadow: "none",
          bgcolor: "background.paper",
          color: "text.primary",
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Toolbar>{header}</Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              borderRight: 1,
              borderColor: "divider",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 2, md: 3 },
          width: { xs: "100%", md: `calc(100% - ${drawerWidth}px)` },
          mt: "64px",
          overflow: "auto",
          height: "calc(100vh - 64px)",
          bgcolor: "Background.default",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
