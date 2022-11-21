import React from "react";
import Select from "react-select";

import { colorOptions } from "./data";

const App = () => {
  const colorStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "white" }),
    option: (styles, { data, isDisable, isFocused, isSelected }) => {
      return {
        ...styles,
        color: data.color,
        ":hover": { backgroundColor: data.colorLight },
      };
    },
    multiValue: (styles, { data }) => {
      return {
        ...styles,
        backgroundColor: data.colorLight,
        borderRadius: "5px",
      };
    },
    multiValueLabel: (styles, { data }) => {
      return {
        ...styles,
        color: data.color,
      };
    },
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center px-4">
      <div className="w-11/12 md:w-1/2">
        <Select isMulti options={colorOptions} styles={colorStyles} />
      </div>
    </div>
  );
};

export default App;
