import { TextField, Chip } from "@mui/material";
import { useState } from "react";

interface MultipleValuesInputProps{
    values: string[];
    setValues:  React.Dispatch<React.SetStateAction<string[]>>
}


export const MultipleValuesInput = ({values, setValues}: MultipleValuesInputProps) => {
  const [inputValue, setInputValue] = useState('');
 
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue) {
      setValues([...values, inputValue]);
      setInputValue('');
    }
  };

  const handleChipDelete = (chipToDelete: string) => () => {
    setValues((chips: string[]) => chips.filter((chip: string) => chip !== chipToDelete));
  };

  return (
    <div>
      <TextField
        label="Add Value"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
      />
      <div>
        {values.map((value, index) => (
          <Chip
            key={index}
            label={value}
            onDelete={handleChipDelete(value)}
            color="primary"
          />
        ))}
      </div>
    </div>
  );
};

export default MultipleValuesInput;
