import React from "react";
import { convert } from "../../utils/calculator_utils";

import { LocaleText } from "../../../locale/components/LocaleText";

import styles from "./Unit.module.css";

const Unit = ({ type, activeType, value, onChange }) => {
  const result =
    type === activeType
      ? value
      : convert({ from: activeType, to: type })(value);
  const handleChange = (e) => {
    const value = e.target.value;
    if (isNaN(value)) return 0;
    onChange({ type, value });
  };

  return (
    <div className={styles.unit}>
      <h3 className="title">
        <LocaleText tid={`calculator__unit__${type}`} />
      </h3>
      <input type="text" value={result} onChange={handleChange} />
    </div>
  );
};

export default Unit;
