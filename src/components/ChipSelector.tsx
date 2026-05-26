import React from 'react';
import type { ChipOption } from '../types/avatar.types';
import styles from '../styles/ChipSelector.module.css';

interface ChipSelectorProps<T extends string> {
  options: ChipOption<T>[];
  selected: T;
  onChange: (value: T) => void;
}

function ChipSelector<T extends string>({
  options,
  selected,
  onChange,
}: ChipSelectorProps<T>) {
  return (
    <div className={styles.chips}>
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          className={`${styles.chip} ${selected === opt.value ? styles.active : ''}`}
          onClick={() => onChange(opt.value)}
          aria-pressed={selected === opt.value}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

export default ChipSelector;
