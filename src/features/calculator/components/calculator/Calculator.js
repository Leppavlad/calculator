import { Component } from "react";

import Unit from "../unit/Unit";

// import { LangConsumer } from "../../../context/language";
import { LocaleText } from "../../../locale/components/LocaleText";

import styles from "./Calculator.module.css";

class Calculator extends Component {
  state = {
    activeType: "c",
    value: 0,
  };
  onChange = ({ type, value }) => {
    this.setState({ activeType: type, value });
  };
  render() {
    const { activeType, value } = this.state;
    return (
      <div className={styles.wrapper}>
        <h2>
          <LocaleText tid="header__title" />
        </h2>
        <Unit
          type="c"
          activeType={activeType}
          value={value}
          onChange={this.onChange}
        />
        <Unit
          type="f"
          activeType={activeType}
          value={value}
          onChange={this.onChange}
        />
        <Unit
          type="k"
          activeType={activeType}
          value={value}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default Calculator;
