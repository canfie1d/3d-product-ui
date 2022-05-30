import { useState } from 'react';
import styles from '../styles/components/color-chooser.module.css';
import ColorInput from './ColorInput';

const ColorChooser = ({onChange, colors}: {onChange: (color: string) => void, colors: string[]}) => {
  const [value, setValue] = useState('#ffffff');
  const handleChange = (color: string) => {
    setValue(color);
    onChange(color);
  }
  return (
    <fieldset id="color-chooser" className={styles['container']}>
      <legend>Color</legend>
      {colors.map((color: string, i: number) => {
        if (color === 'custom') {
          return (
            <ColorInput
              key={`color-input-${i}`}
              onChange={handleChange}
              className={`${styles['color']} ${!colors.includes(value) && styles['color-selected']}`}
              inputClassName={styles['hidden']}
              labelClassName={styles['color-label']}
              showGradient
            />
          );
        }

        return (
          <div key={`color-input-${i}`} className={`${styles['color']} ${value === color && styles['color-selected']}`} style={{backgroundColor: color}}>
            <label className={styles['color-label']} htmlFor={`color-${i}`} />
            <input
              id={`color-${i}`}
              type="radio"
              value={color}
              onChange={() => handleChange(color)}
              checked={value === color}
              className={styles['hidden']}
            />
          </div>
        );
      })}
    </fieldset>
  )
}

export default ColorChooser;
