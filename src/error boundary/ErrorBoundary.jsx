import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }
    getDerivedStateFromError(error) {
        this.state = { hasError: true }
    }
    render() {
        if (this.state.hasError) {
            return <h1>some error occured</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary