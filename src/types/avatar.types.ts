export type Sex = 'man' | 'woman';
export type EarSize = 'small' | 'big';
export type HairStyle =
  | 'normal'
  | 'thick'
  | 'mohawk'
  | 'womanLong'
  | 'womanShort'
  | 'shortCurl';
export type EyeStyle = 'circle' | 'oval' | 'smile';
export type EyeBrowStyle = 'up' | 'upWoman';
export type NoseStyle = 'short' | 'long' | 'round';
export type MouthStyle = 'laugh' | 'smile' | 'peace' | 'nervous';
export type GlassesStyle = 'none' | 'round' | 'square';
export type HatStyle = 'none' | 'beanie' | 'turban' | 'wavyTom';
export type EarringStyle = 'none' | 'stud' | 'hoop';
export type ShirtStyle = 'hoody' | 'short' | 'polo';
export type AvatarShape = 'circle' | 'rounded' | 'square';

export interface AvatarConfig {
  sex: Sex;
  faceColor: string;
  earSize: EarSize;
  hairColor: string;
  hairStyle: HairStyle;
  hatColor: string;
  hatStyle: HatStyle;
  eyeStyle: EyeStyle;
  eyeBrowStyle: EyeBrowStyle;
  glassesStyle: GlassesStyle;
  noseStyle: NoseStyle;
  mouthStyle: MouthStyle;
  shirtStyle: ShirtStyle;
  shirtColor: string;
  bgColor: string;
  earringStyle: EarringStyle;
  shape: AvatarShape;
}

export interface SwatchOption {
  value: string;
  label?: string;
}

export interface ChipOption<T extends string> {
  value: T;
  label: string;
}
