import React from 'react';
import styles from './progressContract.module.css'

export default function ProgressContract({ currentStep, totalSteps }) {
    const percentage = (currentStep / totalSteps) * 100;
 
          

return (
    <div className={styles.progressContainer}>
        <span className={styles.progressText}>مرحله {currentStep} از {totalSteps}</span>
        <div className={styles.progress}>
    
    <div className={styles.progressBar} style={{ width: `${percentage}%` }} />
  </div>
    </div>

);
   
    
 
}