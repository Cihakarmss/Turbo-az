import React from "react";
import Select from "../../ForumComponent/Select";
import { Controller, useForm } from "react-hook-form";


const { control, handleSubmit } = useForm;

const onsubmit = (data) => {
  console.log(data);
};

function Creatforum() {
  return (
    <form onsubmit={handleSubmit(onsubmit)}>
      <h1>Form Page</h1>
      <Select 
        name="marka"
        label="Marka Seçin"
        control={control}
        option={["BMW", "Mercedes", "Audi"]}
      />
    </form>
  );
}

export default Creatforum;
