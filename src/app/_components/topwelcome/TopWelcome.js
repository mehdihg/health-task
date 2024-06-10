import Image from "next/image";
import styles from "./TopWelcome.module.css";
import userIcon from '../../../../public/icons/user.png'
import menuIcon from '../../../../public/icons/menu.png'
function TopWelcome() {
    return (
      <div className={styles.welcomeContainer}>
         <div  className={styles.navbar}>
            <Image src={menuIcon} alt="menu"/>
            <Image src={userIcon} alt="user"/>
            
         </div>
         <div className={styles.welcomeTextContainer}>
            <div  className={styles.welcomeTextRight}>
                <span  className={styles.welcomeText}>خوش اومدی!</span>
                <span className={styles.welcomeInventory}>افزایش موجودی</span>
                
            </div>
            <div className={styles.welcomeTextLeft}>
                <span className={styles.welcomeTextName}>مریم عزیز</span>
                <span className={styles.welcomePrice}>12,456,000<span>تومان</span></span>
            </div>
         </div>
      </div>
    );
  }
  export default TopWelcome