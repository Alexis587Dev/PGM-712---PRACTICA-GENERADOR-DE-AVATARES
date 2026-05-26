import React from 'react';
import { useAvatarConfig } from '../hooks/useAvatarConfig';
import AvatarSidebar from './AvatarSidebar';
import AvatarPreview from './AvatarPreview';
import AvatarActions from './AvatarActions';
import styles from './AvatarEditor.module.css';

const AvatarEditor: React.FC = () => {
  const { config, updateConfig, randomize, reset } = useAvatarConfig();

  return (
    <div className={styles.editor}>
      <AvatarSidebar config={config} onChange={updateConfig} />

      <div className={styles.main}>
        <div className={styles.previewArea}>
          <AvatarPreview config={config} size={160} />
          <p className={styles.hint}>Personalizá tu avatar desde el panel izquierdo</p>
        </div>

        <AvatarActions config={config} onRandomize={randomize} onReset={reset} />
      </div>
    </div>
  );
};

export default AvatarEditor;
