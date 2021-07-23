import { Component } from "react";

const WithContext = (
  ContextComponent,
  contextDataset,
  { category, active, activeDataset }
) =>
  class WithContext extends Component {
    constructor(props) {
      super(props);
      this.state = {
        active: window.localStorage.getItem(category) || active,
        activeDataset:
          contextDataset[window.localStorage.getItem(category)] ||
          activeDataset,
      };
    }
    setActive = (active) => {
      this.setState({ active, activeDataset: contextDataset[active] });
      window.localStorage.setItem(category, active);
    };
    render() {
      const { active, activeDataset } = this.state;
      return (
        <ContextComponent.Provider
          value={{ active, activeDataset, setActive: this.setActive }}
        >
          {this.props.children}
        </ContextComponent.Provider>
      );
    }
  };

export default WithContext;
