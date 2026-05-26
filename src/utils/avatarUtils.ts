import type { AvatarConfig } from '../types/avatar.types';
import {
  BG_COLORS,
  DEFAULT_CONFIG,
  EARRING_STYLE_OPTIONS,
  EAR_SIZE_OPTIONS,
  EYEBROW_STYLE_OPTIONS,
  EYE_STYLE_OPTIONS,
  GLASSES_STYLE_OPTIONS,
  HAIR_COLORS,
  HAIR_STYLE_OPTIONS,
  HAT_COLORS,
  HAT_STYLE_OPTIONS,
  MOUTH_STYLE_OPTIONS,
  NOSE_STYLE_OPTIONS,
  SEX_OPTIONS,
  SHIRT_COLORS,
  SHIRT_STYLE_OPTIONS,
  SKIN_COLORS,
} from '../constants/avatarOptions';

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function generateRandomConfig(): AvatarConfig {
  return {
    ...DEFAULT_CONFIG,
    sex: pickRandom(SEX_OPTIONS).value,
    faceColor: pickRandom(SKIN_COLORS),
    earSize: pickRandom(EAR_SIZE_OPTIONS).value,
    hairColor: pickRandom(HAIR_COLORS),
    hairStyle: pickRandom(HAIR_STYLE_OPTIONS).value,
    hatColor: pickRandom(HAT_COLORS),
    hatStyle: pickRandom(HAT_STYLE_OPTIONS).value,
    eyeStyle: pickRandom(EYE_STYLE_OPTIONS).value,
    eyeBrowStyle: pickRandom(EYEBROW_STYLE_OPTIONS).value,
    glassesStyle: pickRandom(GLASSES_STYLE_OPTIONS).value,
    noseStyle: pickRandom(NOSE_STYLE_OPTIONS).value,
    mouthStyle: pickRandom(MOUTH_STYLE_OPTIONS).value,
    shirtStyle: pickRandom(SHIRT_STYLE_OPTIONS).value,
    shirtColor: pickRandom(SHIRT_COLORS),
    bgColor: pickRandom(BG_COLORS),
  };
}

export function exportConfigAsJSON(config: AvatarConfig): void {
  const blob = new Blob([JSON.stringify(config, null, 2)], {
    type: 'application/json',
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'avatar-config.json';
  a.click();
  URL.revokeObjectURL(url);
}
