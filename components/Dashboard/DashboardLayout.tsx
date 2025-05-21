"use client";

import { useState } from "react";
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";

// Icons
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AnalyticsIcon from '@mui/icons-material/Analytics';


import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

  const navigationItems = [
    { text: "Home", icon: <HomeIcon />, href: "/" },
    { text: "Information", icon: <AssignmentIcon/>, href: "/information" },
    { text: "Academic results", icon: <PeopleIcon />, href: "/academic" },
    { text: "Calculate academic results", icon: <AnalyticsIcon />, href: "/calculate" },
    { text: "Report", icon: <CollectionsBookmarkIcon />, href: "/report" },
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
          <Box sx={{ mt: 0.2, ml: 0.5 }}>
            <img src="/picture/logo.png" alt="KU Logo" className="w-45 h-auto" />
          </Box>
        </Box>
      </Box>
      <Divider />
      <List component="nav">
        {navigationItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={Link}
              href={item.href}
              selected={pathname === item.href}
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
                  color: pathname === item.href ? "primary.main" : "inherit",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontWeight: pathname === item.href ? 600 : 400,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
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
        {/* Mobile Drawer */}
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
          bgcolor: "background.default",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
