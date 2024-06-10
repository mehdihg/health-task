import React from "react";
import {
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
} from "@mui/material";

const GenderForm = ({ selectedGender, handleGenderChange, genderOptions }) => {
  return (
    <FormControl component="fieldset" sx={{ width: "100%", marginTop: "40px" }}>
      <FormLabel component="legend" sx={{ color: 'rgba(128, 128, 128, 0.9)', pointerEvents: 'none' }}>جنسیت مراقب</FormLabel>
      <RadioGroup
        aria-label="gender"
        name="gender"
        defaultValue="noPreference"
        value={selectedGender}
        onChange={handleGenderChange}
      >
        {genderOptions.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio />}
            label={option.label}
            sx={{ margin: "2px 0 2px 0", padding: "9px 0 9px 9px" }}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default GenderForm;
