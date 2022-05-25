import { useState } from "react";

const ColorInput = ({
  id='colorPicker',
  className,
  onChange,
  labelClassName,
  inputClassName,
  showGradient
} : {
  id?: string,
  className?: string,
  value?: string,
  onChange: (e: any) => void,
  labelClassName?: string,
  inputClassName?: string,
  showGradient?: boolean
}) => {
  const [value, setValue] = useState('#ffffff');

  const handleChange = (e: any) => {
    const value = e.target.value;
    setValue(value);
    onChange(value);
  }

  if (showGradient) {
    const color = 'linear-gradient(60deg, red, orange, yellow, green, blue, indigo, violet)';
    return (
      <div className={className} style={{background: color}}>
        <input
          id={id}
          type="color"
          value={value}
          onChange={handleChange}
          className={inputClassName}
        />
        <label className={labelClassName} htmlFor={id} />
      </div>
    );
  }

  return (
    <div className={className}>
      <label
        className={labelClassName}
        style={{paddingRight: '10px'}}
        htmlFor="colorPicker"
      >
        Color
      </label>
      <input
        id={id}
        type="color"
        value={value}
        onChange={handleChange}
        className={inputClassName}
      />
    </div>
  )
}
export default ColorInput;
