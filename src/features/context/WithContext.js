import { Component } from "react";

const WithContext = (ContextComponent, contextDataset, initialState) =>
  class WithContext extends Component {
    constructor(props) {
      super(props);
      this.state = {
        active: initialState.active,
        activeDataset: initialState.activeDataset,
      };
    }
    setActive = (active) => {
      const { category } = initialState;
      window.localStorage.setItem(category, active);
      this.setState({ active, activeDataset: contextDataset[active] });
    };
    render() {
      const { Provider } = ContextComponent;
      const { active, activeDataset } = this.state;
      const activeState =
        window.localStorage.getItem(initialState.category) || active;
      return (
        <Provider
          value={{
            active: activeState,
            activeDataset,
            setActive: this.setActive,
          }}
        >
          {this.props.children}
        </Provider>
      );
    }
  };

export default WithContext;
