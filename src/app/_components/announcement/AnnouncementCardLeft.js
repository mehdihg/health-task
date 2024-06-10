import Image from "next/image";
import styles from './AnnouncementCardLeft.module.css'
import { Card, CardContent, Typography } from "@mui/material";
import Headphone from "../../../../public/icons/headphone.png"; 
function AnnouncementCardLeft() {
    return (
    
      <Card className={styles.announcementCardLeft}>
        <CardContent className={styles.announcementCardLeftContent}>
            <Typography className={styles.announcementCardLeftTitle}>
                مشاوره رایگان
            </Typography>
            <Typography className={styles.announcementCardLeftText}>
            با ۱۵۲۷ مشاوره رایگان در تمامی ساعات روز از الوپرستار   
            </Typography>
            <Image src={Headphone} alt="menu" width={'36'} height={'36'}/>
        </CardContent>
      </Card>
      
        

    );
  }
  export default AnnouncementCardLeft