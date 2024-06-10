
import ContractNav from "@/app/_components/contractnav/ContractNav";
import styles from './contracts.module.css'
export default function ContractLayout({ children }) {

  return (
    <div className={styles.contractsContainer}>
      <ContractNav/>
      
      {children}
    </div>
  );
}
