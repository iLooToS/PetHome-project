"use client";
import * as React from "react";
import { useRouter } from 'next/navigation'
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ForumIcon from '@mui/icons-material/Forum';
import "./Footer.css";

export default function Footer() {
	const router = useRouter()
  const [value, setValue] = React.useState("recents");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="footer-container">
      <BottomNavigation
        className="footer-wrapper"
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          label="Home"
          value="home"
          icon={<HomeIcon />}
		  onClick={()=> router.push('/')}
        />
        <BottomNavigationAction
          label="Search"
          value="search"
          icon={<SearchIcon />}
		  onClick={()=> router.push('/search')}
        />
        <BottomNavigationAction
          label="Messages"
          value="messages"
          icon={<ForumIcon />}
        />
      </BottomNavigation>
    </div>
  );
}
