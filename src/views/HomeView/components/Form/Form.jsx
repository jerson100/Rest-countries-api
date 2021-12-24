import React from "react";
import Search from "../../../../components/common/Search";
import Select from "../../../../components/common/Select";
import { FormStyle } from "./formStyle.style";

const Form = ({ regions }) => {
  return (
    <FormStyle>
      <Search />
      <Select placeholder={"Filter by Region"} data={regions} />
    </FormStyle>
  );
};

export default Form;
