import Image from "next/image";
import CloseIcon from '../../../../public/icons/close.png'
import ArrowLeft from '../../../../public/icons/arrow-left.png'
import styles from './ContractNav.module.css'
export default function ContractNav() {
  return (
    <nav className={styles.contractNav}>
       <Image src={CloseIcon} alt="close" width={20} height={20}/> 
       <Image src={ArrowLeft} alt="arrow" width={20} height={20}/> 
    </nav>
  );
}
