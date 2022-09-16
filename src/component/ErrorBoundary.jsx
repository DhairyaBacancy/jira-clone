import React, { PureComponent } from 'react';

export default class ErrorBoundary extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      errorInfo: null
    };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({ error, errorInfo });

    // You can also log error messages to an error reporting service here
  }

  render() {
    const { children } = this.props;
    const { error } = this.state;

    if (!error) {
      return children;
    }

    return (
      <div>
        <h1>Something went wrong</h1>
        {error ? <p>{error.toString()}</p> : null}
      </div>
    );
  }
}
