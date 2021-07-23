import { Component } from "react";

const WithContext = (ContextComponent, contextDataset, initialState) =>
  class WithContext extends Component {
    constructor(props) {
      super(props);
      this.state = {
        active: initialState.active,
        activeDataset: initialState.activeDataset,
      };
      console.log("WithContext-contextDataset", contextDataset);
    }
    setActive = (active) => {
      this.setState({ active, activeDataset: contextDataset[active] });
    };
    render() {
      const { Provider } = ContextComponent;
      const { active, activeDataset } = this.state;
      console.log("WithContext-active", active);
      console.log("WithContext-activeDataset", activeDataset);
      return (
        <Provider value={{ active, activeDataset, setActive: this.setActive }}>
          {this.props.children}
        </Provider>
      );
    }
  };

export default WithContext;
