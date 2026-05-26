import React from 'react';
import NiceAvatar from 'react-nice-avatar';
import type { AvatarConfig } from '../types/avatar.types';
import styles from './AvatarPreview.module.css';

interface AvatarPreviewProps {
  config: AvatarConfig;
  size?: number;
}

const AvatarPreview: React.FC<AvatarPreviewProps> = ({ config, size = 160 }) => {
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.ring}
        style={{ width: size + 16, height: size + 16 }}
      >
        <NiceAvatar
          style={{ width: size, height: size }}
          {...config}
        />
      </div>
      <div className={styles.glow} style={{ background: config.bgColor }} />
    </div>
  );
};

export default AvatarPreview;
