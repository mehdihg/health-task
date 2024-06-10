import Image from "next/image";
import styles from "./MainBanner.module.css";
import banner from '../../../../public/images/banner.png'

function MainBanner() {
    return (
      <div className={styles.BannerContainer}>
            <Image src={banner} alt="banner"  height={'100'}/>
      </div>
    );
  }
  export default MainBanner