import { fields } from "@hookform/resolvers/ajv/src/__tests__/__fixtures__/data.js";
import React from "react";
import { Controller } from "react-hook-form";

function Select(name, label, control, option) {
  return (
    <>
      <label>{label}</label>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={
          <select {...fields}>
            <option value="">Seçin</option>
            <option value={option}>{option}</option>
          </select>
        }
      />
    </>
  );
}

export default Select;
