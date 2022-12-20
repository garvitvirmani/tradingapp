/*eslint-disable*/
import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Tab, Tabs } from "@mui/material";
import { width } from "@mui/system";
import ArticleIcon from "@mui/icons-material/Article";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import LogoutIcon from "@mui/icons-material/Logout";
import "./Navbar.css";

function Navbar() {
  const [navBarSelected, setSelected] = useState();

  return (
    <AppBar sx={{ background: "#1e1f25" }} position="sticky" elevation={0}>
      <Toolbar>
        <div className="logo">
          {" "}
          <img
            style={{ height: "10%", marginTop: "14%" }}
            src={require("./assets/Group.png")}
          />
          <img src={require("./assets/density.png")}></img>
        </div>
        <Tabs
          sx={{ marginLeft: "10%" }}
          textColor="white"
          value={navBarSelected}
          indicatorColor="white"
          onChange={(e, value) => setSelected(value)}
        >
          <Tab sx={{ width: "20%", fontSize: 12 }} label="Onboarding" />
          <Tab sx={{ width: "20%", fontSize: 12 }} label="Deposit" />
          <Tab sx={{ width: "20%", fontSize: 12 }} label="Withdraw" />
          <Tab sx={{ width: "20%", fontSize: 12 }} label="Adjust" />
        </Tabs>
        <Tabs sx={{ marginLeft: "6%" }}>
          <Tab
            sx={{ width: 10 }}
            icon={<ArticleIcon color="primary"></ArticleIcon>}
          />
          <Tab
            sx={{ width: "10%" }}
            icon={
              <AccountBalanceWalletIcon color="primary"></AccountBalanceWalletIcon>
            }
          />
          <Tab
            sx={{ width: "10%" }}
            icon={<AccountBoxIcon color="primary"></AccountBoxIcon>}
          />
          <Tab
            sx={{ width: "10%" }}
            icon={
              <NotificationsActiveIcon color="primary"></NotificationsActiveIcon>
            }
          />
          <Tab
            sx={{ width: "10%" }}
            icon={<LogoutIcon color="primary"></LogoutIcon>}
          />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
