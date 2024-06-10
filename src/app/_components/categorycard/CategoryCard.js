import Image from "next/image";
import styles from './CategoryCard.module.css'
import { Card, CardContent, Typography } from "@mui/material";

function CategoryCard({item}) {
    return (
    
      <Card className={styles.CategoryCard}>
        <CardContent className={styles.CategoryCardContent}>
            <Image src={item.image} alt="menu" width={'36'} height={'36'}/>
            <Typography className={styles.CardText}>
                {item.title}
            </Typography>
        </CardContent>
      </Card>
      
        

    );
  }
  export default CategoryCard