import { useCallback, useState } from 'react';
import type { AvatarConfig } from '../types/avatar.types';
import { DEFAULT_CONFIG } from '../constants/avatarOptions';
import { generateRandomConfig } from '../utils/avatarUtils';

export function useAvatarConfig() {
  const [config, setConfig] = useState<AvatarConfig>(DEFAULT_CONFIG);

  const updateConfig = useCallback(
    <K extends keyof AvatarConfig>(key: K, value: AvatarConfig[K]) => {
      setConfig((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const randomize = useCallback(() => {
    setConfig(generateRandomConfig());
  }, []);

  const reset = useCallback(() => {
    setConfig(DEFAULT_CONFIG);
  }, []);

  return { config, updateConfig, randomize, reset };
}
