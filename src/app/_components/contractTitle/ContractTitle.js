import Image from "next/image";
import styles from './ContractTitle.module.css'
import { Container } from "@mui/material";

export default function ContractTitle({image,title}) {
  return (
    <div className={styles.contractTitleContainer}>
        <Image src={image} alt='message' className={styles.contractImageTitle}/>
       <h2 className={styles.contractTitle}>{title}</h2>
    </div>
  );
}
