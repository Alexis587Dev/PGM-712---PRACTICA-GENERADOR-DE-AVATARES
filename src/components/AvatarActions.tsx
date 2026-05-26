import React, { useState } from 'react';
import type { AvatarConfig } from '../types/avatar.types';
import { exportConfigAsJSON } from '../utils/avatarUtils';
import styles from '../styles/AvatarActions.module.css';

interface AvatarActionsProps {
  config: AvatarConfig;
  onRandomize: () => void;
  onReset: () => void;
}

const AvatarActions: React.FC<AvatarActionsProps> = ({
  config,
  onRandomize,
  onReset,
}) => {
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    exportConfigAsJSON(config);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className={styles.actions}>
      <button type="button" className={styles.btnGhost} onClick={onReset}>
        Restablecer
      </button>
      <button type="button" className={styles.btnSecondary} onClick={onRandomize}>
        Aleatorio
      </button>
      <button
        type="button"
        className={`${styles.btnPrimary} ${saved ? styles.saved : ''}`}
        onClick={handleSave}
      >
        {saved ? '✓ Guardado' : '↓ Exportar'}
      </button>
    </div>
  );
};

export default AvatarActions;
