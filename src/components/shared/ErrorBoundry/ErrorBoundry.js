import React, { Component } from "react";
import PropTypes from "prop-types";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    return this.state.hasError ? (
      <div>
        <p>Something went wrong!!!</p>
      </div>
    ) : (
      this.props.children
    );
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ErrorBoundary;
