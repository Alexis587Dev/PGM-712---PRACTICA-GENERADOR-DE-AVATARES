import React from 'react';
import styles from '../styles/ColorSwatch.module.css';

interface ColorSwatchProps {
  colors: string[];
  selected: string;
  onChange: (color: string) => void;
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({ colors, selected, onChange }) => {
  return (
    <div className={styles.swatches}>
      {colors.map((color) => (
        <button
          key={color}
          type="button"
          className={`${styles.swatch} ${selected === color ? styles.active : ''}`}
          style={{ backgroundColor: color }}
          onClick={() => onChange(color)}
          aria-label={`Color ${color}`}
          aria-pressed={selected === color}
        />
      ))}
    </div>
  );
};

export default ColorSwatch;
