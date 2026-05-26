import type {
  AvatarConfig,
  ChipOption,
  EarSize,
  EyeBrowStyle,
  EyeStyle,
  GlassesStyle,
  HairStyle,
  HatStyle,
  MouthStyle,
  NoseStyle,
  EarringStyle,
  Sex,
  ShirtStyle,
  AvatarShape,
} from '../types/avatar.types';

export const SKIN_COLORS: string[] = [
  '#FFDBB4',
  '#EDB98A',
  '#D08B5B',
  '#AE5D29',
  '#614335',
  '#F8D5C2',
  '#FFCBA4',
];

export const HAIR_COLORS: string[] = [
  '#2C1810',
  '#4A3728',
  '#8B4513',
  '#D2691E',
  '#FFD700',
  '#FF6B6B',
  '#9B59B6',
  '#1A1A2E',
  '#E8E8E8',
];

export const SHIRT_COLORS: string[] = [
  '#9B8DD8',
  '#E74C3C',
  '#2ECC71',
  '#3498DB',
  '#F39C12',
  '#1ABC9C',
  '#E91E63',
  '#607D8B',
];

export const HAT_COLORS: string[] = [
  '#AFA9EC',
  '#FF6B6B',
  '#4ECDC4',
  '#2C3E50',
  '#F7DC6F',
  '#E74C3C',
  '#8E44AD',
];

export const BG_COLORS: string[] = [
  '#EEEDFE',
  '#E1F5EE',
  '#FAECE7',
  '#E6F1FB',
  '#FAEEDA',
  '#F1EFE8',
  '#FBEAF0',
  '#EAF3DE',
  '#FCE4D6',
  '#D6EAF8',
];

export const SEX_OPTIONS: ChipOption<Sex>[] = [
  { value: 'man', label: 'Hombre' },
  { value: 'woman', label: 'Mujer' },
];

export const EAR_SIZE_OPTIONS: ChipOption<EarSize>[] = [
  { value: 'small', label: 'Pequeña' },
  { value: 'big', label: 'Grande' },
];

export const HAIR_STYLE_OPTIONS: ChipOption<HairStyle>[] = [
  { value: 'normal', label: 'Normal' },
  { value: 'thick', label: 'Grueso' },
  { value: 'mohawk', label: 'Mohawk' },
  { value: 'womanLong', label: 'Largo' },
  { value: 'womanShort', label: 'Corto' },
  { value: 'shortCurl', label: 'Rizado' },
];

export const EYE_STYLE_OPTIONS: ChipOption<EyeStyle>[] = [
  { value: 'circle', label: 'Círculo' },
  { value: 'oval', label: 'Oval' },
  { value: 'smile', label: 'Sonrisa' },
];

export const EYEBROW_STYLE_OPTIONS: ChipOption<EyeBrowStyle>[] = [
  { value: 'up', label: 'Arriba' },
  { value: 'upWoman', label: 'Curvado' },
];

export const NOSE_STYLE_OPTIONS: ChipOption<NoseStyle>[] = [
  { value: 'short', label: 'Corta' },
  { value: 'long', label: 'Larga' },
  { value: 'round', label: 'Redonda' },
];

export const MOUTH_STYLE_OPTIONS: ChipOption<MouthStyle>[] = [
  { value: 'laugh', label: 'Risa' },
  { value: 'smile', label: 'Sonrisa' },
  { value: 'peace', label: 'Paz' },
  { value: 'nervous', label: 'Nervioso' },
];

export const GLASSES_STYLE_OPTIONS: ChipOption<GlassesStyle>[] = [
  { value: 'none', label: 'Ninguno' },
  { value: 'round', label: 'Redondo' },
  { value: 'square', label: 'Cuadrado' },
];

export const HAT_STYLE_OPTIONS: ChipOption<HatStyle>[] = [
  { value: 'none', label: 'Ninguno' },
  { value: 'beanie', label: 'Gorro' },
  { value: 'turban', label: 'Turbante' },
  { value: 'wavyTom', label: 'Wavytom' },
];

export const EARRING_STYLE_OPTIONS: ChipOption<EarringStyle>[] = [
  { value: 'none', label: 'Ninguno' },
  { value: 'stud', label: 'Tachón' },
  { value: 'hoop', label: 'Argolla' },
];

export const SHIRT_STYLE_OPTIONS: ChipOption<ShirtStyle>[] = [
  { value: 'hoody', label: 'Hoodie' },
  { value: 'short', label: 'Camiseta' },
  { value: 'polo', label: 'Polo' },
];

export const SHAPE_OPTIONS: ChipOption<AvatarShape>[] = [
  { value: 'circle', label: 'Círculo' },
  { value: 'rounded', label: 'Redondeado' },
  { value: 'square', label: 'Cuadrado' },
];

export const DEFAULT_CONFIG: AvatarConfig = {
  sex: 'man',
  faceColor: SKIN_COLORS[0],
  earSize: 'small',
  hairColor: HAIR_COLORS[0],
  hairStyle: 'normal',
  hatColor: HAT_COLORS[0],
  hatStyle: 'none',
  eyeStyle: 'circle',
  eyeBrowStyle: 'up',
  glassesStyle: 'none',
  noseStyle: 'short',
  mouthStyle: 'smile',
  shirtStyle: 'hoody',
  shirtColor: SHIRT_COLORS[0],
  bgColor: BG_COLORS[0],
  earringStyle: 'none',
  shape: 'circle',
};
