import React from "react";
import { FormControl, MenuItem, NativeSelect, Select } from "@mui/material";

const MobileFooter = () => {
  const handleChange = () => {};

  return (
    <div className="pt-2 px-1 gap-4">
      <FormControl fullWidth>
        <NativeSelect
          labelId="demo-select-small-label"
          id="demo-select-small"
          defaultValuevalue={30}
          label="Age"
          className="w-full text-lg font-bold tracking-wider px-4"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>Hobbycue</em>
          </MenuItem>
          <option value={10}>Hobbycue</option>
          <option value={20}>about us</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
      </FormControl>
      <FormControl fullWidth>
        <NativeSelect
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={1}
          label="Age"
          className="w-full text-lg font-bold tracking-wider px-4"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <option value={10}>How Do I</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
      </FormControl>
      <FormControl fullWidth>
        <NativeSelect
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={1}
          label="Age"
          className="w-full text-lg font-bold tracking-wider px-4"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <option value={10}>Quick Links</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default MobileFooter;
