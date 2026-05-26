import React, { useState } from 'react';
import styles from '../styles/SectionPanel.module.css';

interface SectionPanelProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const SectionPanel: React.FC<SectionPanelProps> = ({
  title,
  icon,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={styles.section}>
      <button
        type="button"
        className={styles.header}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        <span className={styles.iconTitle}>
          <span className={styles.icon} aria-hidden="true">{icon}</span>
          <span className={styles.title}>{title}</span>
        </span>
        <span className={`${styles.chevron} ${isOpen ? styles.open : ''}`}>▾</span>
      </button>
      {isOpen && <div className={styles.body}>{children}</div>}
    </div>
  );
};

export default SectionPanel;