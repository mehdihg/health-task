'use client'
import styles from "./BottomNav.module.css";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';

import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import { useState } from "react";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

 function BottomNav() {
    const router = useRouter();
    const [value, setValue] = useState(router.pathname || '/');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
  return (
    <div className={styles.bottomNav}>
        <BottomNavigation showLabels value={value} onChange={handleChange} sx={{width:'100%'}} >
          <BottomNavigationAction label="خانه"  icon={<HomeIcon />} value='/' component={Link}
          href="/" classes={{ selected: styles.selectedBottomNav }} sx={{padding:'0 2px'}}/>
          <BottomNavigationAction label="درخواست ها"  icon={<TextSnippetIcon />} value='/requests' component={Link}
          href="/requests" classes={{ selected: styles.selectedBottomNav }} sx={{padding:'0 2px'}}/>
          <BottomNavigationAction label="قراردادها"  icon={<BookmarkIcon /> } value='/contracts' component={Link}
          href="/contracts" classes={{ selected: styles.selectedBottomNav }} sx={{padding:'0 2px'}}/>
          <BottomNavigationAction label="بیشتر"  icon={<AutoAwesomeMosaicIcon />} value='more' component={Link}
          href="/more" classes={{ selected: styles.selectedBottomNav }} sx={{padding:'0 2px'}}/>
        </BottomNavigation>
    </div>
  );
}
export default BottomNav