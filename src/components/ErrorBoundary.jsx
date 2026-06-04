import React from 'react'
import PropTypes from 'prop-types'

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', textAlign: 'center', background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', border: '1px dashed #ef4444', borderRadius: '8px', margin: '20px 0' }}>
          <h4>Something went wrong in this section.</h4>
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node,
}