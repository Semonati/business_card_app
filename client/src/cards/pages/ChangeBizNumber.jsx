import React from "react";
import Input from "../../forms/components/Input";

const ChangeBizNumber = ({ errors, onInputChange, data }) => {

  return (
    <Input
      name="bizNumber"
      label="bizNumber"
      type="number"
      error={errors.bizNumber}
      onChange={onInputChange}
      data={data}
      sm={6}
      required={false}
    />
  );
};

export default ChangeBizNumber;
