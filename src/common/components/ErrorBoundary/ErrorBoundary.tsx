'use client'
import {
    Component,
    type PropsWithChildren,
    type ErrorInfo,
    type ReactNode,
} from 'react'

interface Props {
    fallback?: ReactNode
}

interface State {
    hasError: boolean
}

class ErrorBoundary extends Component<PropsWithChildren<Props>, State> {
    public state: State = {
        hasError: false,
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public static getDerivedStateFromError(error: Error): State {
        // Update state so the next render will show the fallback UI.
        return { hasError: true }
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error(error, errorInfo)
    }

    public render() {
        if (this.state.hasError) {
            return this.props.fallback
        }

        return this.props.children
    }
}

export default ErrorBoundary
