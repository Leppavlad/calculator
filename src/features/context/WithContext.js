import { Component } from "react";

const WithContext = (ContextComponent, contextDataset, initialState) =>
  class WithContext extends Component {
    constructor(props) {
      super(props);
      this.state = {
        active:
          window.localStorage.getItem(initialState.category) ||
          initialState.active,
        activeDataset:
          contextDataset[window.localStorage.getItem(initialState.category)] ||
          initialState.activeDataset,
      };
    }
    setActive = (active) => {
      window.localStorage.setItem(initialState.category, active);
      this.setState({ active, activeDataset: contextDataset[active] });
    };
    render() {
      const { Provider } = ContextComponent;
      const active =
        window.localStorage.getItem(initialState.category) || this.state.active;
      const activeDataset =
        contextDataset[window.localStorage.getItem(initialState.category)] ||
        initialState.activeDataset;
      return (
        <Provider value={{ active, activeDataset, setActive: this.setActive }}>
          {this.props.children}
        </Provider>
      );
    }
  };

export default WithContext;
