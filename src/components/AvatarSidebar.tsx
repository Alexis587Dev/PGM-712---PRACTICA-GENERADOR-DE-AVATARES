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
import styles from './AvatarSidebar.module.css';

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
        <SectionPanel title="General" icon="👤" defaultOpen>
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

        <SectionPanel title="Cara" icon="🎨" defaultOpen>
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

        <SectionPanel title="Cabello" icon="💇">
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

        <SectionPanel title="Ojos" icon="👁️">
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

        <SectionPanel title="Nariz y boca" icon="😊">
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

        <SectionPanel title="Accesorios" icon="🎩">
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

        <SectionPanel title="Ropa" icon="👕">
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

        <SectionPanel title="Fondo" icon="🌈">
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
