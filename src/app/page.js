"use client";
import styles from "./page.module.css";
import BottomNav from "./_components/bottomnav/BottomNav";
import TopWelcome from "./_components/topwelcome/TopWelcome";
import CategoryCard from "./_components/categorycard/CategoryCard";
import MainBanner from "./_components/mainbanner/MainBanner";
import Protect from "../../public/icons/protect.png";
import Service from "../../public/icons/service.png";
import Nurse from "../../public/icons/nurse.png";
import Heart from "../../public/icons/heart.png";

import HeartBeat from "../../public/icons/heartbeat.png";
import Music from "../../public/icons/music.png";
import AnnouncementCardRight from "./_components/announcement/AnnouncementCardRight";
import AnnouncementCardLeft from "./_components/announcement/AnnouncementCardLeft";

const CategoryData = [
  {
    title: "مراقبتی",
    image: Protect,
  },
  {
    title: "خدماتی",
    image: Service,
  },
  {
    title: "پرستاری",
    image: Nurse,
  },
  {
    title: "پزشکی",
    image: Heart,
  },
];
const CategoryDataRight = [
  {
    title: "پرستار کودک",
    image: Music,
  },
  {
    title: "پرستار سالمند",
    image: HeartBeat,
  },
];
export default function Home() {
  return (
    <div className={styles.main}>
      <TopWelcome />
      <div className={styles.categoryCardContainer}>
        {CategoryData.map((items) => {
          return <CategoryCard item={items} key={items.title} />;
        })}
      </div>

      <MainBanner />
      <div className={styles.announcements}>
        <div className={styles.announcementCardRightContainer}>
          {CategoryDataRight.map((items) => {
            return <AnnouncementCardRight item={items} key={items.title} />;
          })}
        </div>
        <div className={styles.announcementCardLeftContainer}>
          <AnnouncementCardLeft />
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
