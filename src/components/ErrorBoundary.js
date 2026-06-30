import React from "react"

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "2rem", textAlign: "center", fontFamily: "sans-serif" }}>
          <h1>Something went wrong</h1>
          <p>We're sorry, but something unexpected happened. Please try refreshing the page.</p>
          <button
            onClick={() => {
              this.setState({ hasError: false })
              window.location.reload()
            }}
            style={{
              padding: "0.75rem 1.5rem",
              fontSize: "1rem",
              cursor: "pointer",
              marginTop: "1rem",
            }}
          >
            Refresh Page
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
