import Image from "next/image";
import styles from './AnnouncementCardRight.module.css'
import { Card, CardContent, Typography } from "@mui/material";

function AnnouncementCardRight({item}) {
    return (
    
      <Card className={styles.announcementCardRight}>
        <CardContent className={styles.announcementCardRightContent}>
            <Image src={item.image} alt="menu" width={'48'} height={'48'}/>
            <Typography className={styles.announcementCardRightText}>
                {item.title}
            </Typography>
        </CardContent>
      </Card>
      
        

    );
  }
  export default AnnouncementCardRight