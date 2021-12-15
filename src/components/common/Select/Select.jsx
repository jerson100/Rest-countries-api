import React from "react";

import { SelectStyle } from "./select.style";

const Select = ({ data, placeholder }) => {
  return (
    <SelectStyle>
      <option value="0">{placeholder}</option>
      {data.map(({ id, country }) => {
        return (
          <option key={id} value={country}>
            {country}
          </option>
        );
      })}
    </SelectStyle>
  );
};

export default Select;
