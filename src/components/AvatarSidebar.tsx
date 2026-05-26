import React from 'react';
import type { AvatarConfig } from '../types/avatar.types';
import {
  BG_COLORS,
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
  EARRING_STYLE_OPTIONS,
  SHIRT_COLORS,
  SHIRT_STYLE_OPTIONS,
  SHAPE_OPTIONS,
  SKIN_COLORS,
} from '../constants/avatarOptions';
import SectionPanel from './SectionPanel';
import OptionRow from './OptionRow';
import ChipSelector from './ChipSelector';
import ColorSwatch from './ColorSwatch';
import styles from '../styles/AvatarSidebar.module.css';

const IconUser = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
  </svg>
);

const IconFace = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M9 9.5c0-.3.2-.5.5-.5s.5.2.5.5" />
    <path d="M14 9.5c0-.3.2-.5.5-.5s.5.2.5.5" />
    <path d="M9 15c.8 1.2 5.2 1.2 6 0" />
  </svg>
);

const IconHair = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3C8 3 5 6 5 10v2c0 3.9 3.1 7 7 7s7-3.1 7-7v-2c0-4-3-7-7-7z" />
    <path d="M5 10c-1.5-.5-2.5-2-2-3.5C3.5 5 5 4 6.5 4.5" />
    <path d="M19 10c1.5-.5 2.5-2 2-3.5C20.5 5 19 4 17.5 4.5" />
    <path d="M9 3.5C9 5 10 6 12 6s3-1 3-2.5" />
  </svg>
);

const IconEye = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const IconMouth = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 13s1.5 3 4 3 4-3 4-3" />
    <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="12" cy="12" r="9" />
  </svg>
);

const IconAccessory = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12h3m15 0h-3" />
    <circle cx="8" cy="12" r="3" />
    <circle cx="16" cy="12" r="3" />
    <path d="M11 12h2" />
  </svg>
);

const IconShirt = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.57a1 1 0 00.99.84H6v10a1 1 0 001 1h10a1 1 0 001-1V10h2.15a1 1 0 00.99-.84l.58-3.57a2 2 0 00-1.34-2.23z" />
  </svg>
);

const IconPalette = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="13.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    <circle cx="17.5" cy="10.5" r="1" fill="currentColor" stroke="none" />
    <circle cx="8.5" cy="7.5" r="1" fill="currentColor" stroke="none" />
    <circle cx="6.5" cy="12.5" r="1" fill="currentColor" stroke="none" />
    <path d="M12 2C6.5 2 2 6.5 2 12a10 10 0 0010 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 011.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
  </svg>
);

interface AvatarSidebarProps {
  config: AvatarConfig;
  onChange: <K extends keyof AvatarConfig>(key: K, value: AvatarConfig[K]) => void;
}

const AvatarSidebar: React.FC<AvatarSidebarProps> = ({ config, onChange }) => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>
        <h2 className={styles.headerTitle}>Personalización</h2>
      </div>

      <div className={styles.sections}>
        <SectionPanel title="General" icon={<IconUser />} defaultOpen>
          <OptionRow label="Género">
            <ChipSelector
              options={SEX_OPTIONS}
              selected={config.sex}
              onChange={(v) => onChange('sex', v)}
            />
          </OptionRow>
          <OptionRow label="Forma">
            <ChipSelector
              options={SHAPE_OPTIONS}
              selected={config.shape}
              onChange={(v) => onChange('shape', v)}
            />
          </OptionRow>
        </SectionPanel>

        <SectionPanel title="Cara" icon={<IconFace />} defaultOpen>
          <OptionRow label="Tono de piel">
            <ColorSwatch
              colors={SKIN_COLORS}
              selected={config.faceColor}
              onChange={(v) => onChange('faceColor', v)}
            />
          </OptionRow>
          <OptionRow label="Tamaño de orejas">
            <ChipSelector
              options={EAR_SIZE_OPTIONS}
              selected={config.earSize}
              onChange={(v) => onChange('earSize', v)}
            />
          </OptionRow>
        </SectionPanel>

        <SectionPanel title="Cabello" icon={<IconHair />}>
          <OptionRow label="Estilo">
            <ChipSelector
              options={HAIR_STYLE_OPTIONS}
              selected={config.hairStyle}
              onChange={(v) => onChange('hairStyle', v)}
            />
          </OptionRow>
          <OptionRow label="Color">
            <ColorSwatch
              colors={HAIR_COLORS}
              selected={config.hairColor}
              onChange={(v) => onChange('hairColor', v)}
            />
          </OptionRow>
        </SectionPanel>

        <SectionPanel title="Ojos" icon={<IconEye />}>
          <OptionRow label="Estilo de ojos">
            <ChipSelector
              options={EYE_STYLE_OPTIONS}
              selected={config.eyeStyle}
              onChange={(v) => onChange('eyeStyle', v)}
            />
          </OptionRow>
          <OptionRow label="Cejas">
            <ChipSelector
              options={EYEBROW_STYLE_OPTIONS}
              selected={config.eyeBrowStyle}
              onChange={(v) => onChange('eyeBrowStyle', v)}
            />
          </OptionRow>
        </SectionPanel>

        <SectionPanel title="Nariz y boca" icon={<IconMouth />}>
          <OptionRow label="Nariz">
            <ChipSelector
              options={NOSE_STYLE_OPTIONS}
              selected={config.noseStyle}
              onChange={(v) => onChange('noseStyle', v)}
            />
          </OptionRow>
          <OptionRow label="Boca">
            <ChipSelector
              options={MOUTH_STYLE_OPTIONS}
              selected={config.mouthStyle}
              onChange={(v) => onChange('mouthStyle', v)}
            />
          </OptionRow>
        </SectionPanel>

        <SectionPanel title="Accesorios" icon={<IconAccessory />}>
          <OptionRow label="Anteojos">
            <ChipSelector
              options={GLASSES_STYLE_OPTIONS}
              selected={config.glassesStyle}
              onChange={(v) => onChange('glassesStyle', v)}
            />
          </OptionRow>
          <OptionRow label="Sombrero">
            <ChipSelector
              options={HAT_STYLE_OPTIONS}
              selected={config.hatStyle}
              onChange={(v) => onChange('hatStyle', v)}
            />
          </OptionRow>
          {config.hatStyle !== 'none' && (
            <OptionRow label="Color de sombrero">
              <ColorSwatch
                colors={HAT_COLORS}
                selected={config.hatColor}
                onChange={(v) => onChange('hatColor', v)}
              />
            </OptionRow>
          )}
          <OptionRow label="Aretes">
            <ChipSelector
              options={EARRING_STYLE_OPTIONS}
              selected={config.earringStyle}
              onChange={(v) => onChange('earringStyle', v)}
            />
          </OptionRow>
        </SectionPanel>

        <SectionPanel title="Ropa" icon={<IconShirt />}>
          <OptionRow label="Estilo">
            <ChipSelector
              options={SHIRT_STYLE_OPTIONS}
              selected={config.shirtStyle}
              onChange={(v) => onChange('shirtStyle', v)}
            />
          </OptionRow>
          <OptionRow label="Color">
            <ColorSwatch
              colors={SHIRT_COLORS}
              selected={config.shirtColor}
              onChange={(v) => onChange('shirtColor', v)}
            />
          </OptionRow>
        </SectionPanel>

        <SectionPanel title="Fondo" icon={<IconPalette />}>
          <OptionRow label="Color">
            <ColorSwatch
              colors={BG_COLORS}
              selected={config.bgColor}
              onChange={(v) => onChange('bgColor', v)}
            />
          </OptionRow>
        </SectionPanel>
      </div>
    </aside>
  );
};

export default AvatarSidebar;