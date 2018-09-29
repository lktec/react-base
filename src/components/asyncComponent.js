import React, { Component } from "react";

export default (comp, loading) =>
  class extends Component {
    constructor() {
      super(...arguments);
      this.state = {
        Comp: null
      };
    }

    async componentDidMount() {
      const { default: Comp } = await comp();
      this.setState({ Comp });
    }

    render() {
      const { Comp } = this.state;
      const Loading = loading;
      if (Comp) return <Comp {...this.props} />;
      if (Loading) return <Loading {...this.props} />;
      return null;
    }
  };
