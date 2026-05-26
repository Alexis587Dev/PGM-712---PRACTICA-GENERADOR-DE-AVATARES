import React from 'react';
import styles from './OptionRow.module.css';

interface OptionRowProps {
  label: string;
  children: React.ReactNode;
}

const OptionRow: React.FC<OptionRowProps> = ({ label, children }) => {
  return (
    <div className={styles.row}>
      <span className={styles.label}>{label}</span>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default OptionRow;
