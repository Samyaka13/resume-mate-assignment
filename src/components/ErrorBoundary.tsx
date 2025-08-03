import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                this.props.fallback || (
                    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-white dark:bg-gray-900 text-center">
                        <h2 className="text-xl sm:text-2xl font-bold text-red-600 dark:text-red-400 mb-4">
                            Something went wrong.
                        </h2>
                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 max-w-md">
                            An unexpected error occurred. You can try reloading the page.
                        </p>
                        <button
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-md text-sm sm:text-base"
                            onClick={() => window.location.reload()}
                        >
                            Reload Page
                        </button>
                    </div>
                )
            );
        }

        return this.props.children;
    }
}
