import {
  captureException,
  init,
  showReportDialog,
  withScope
} from '@sentry/browser';
import React, { ComponentType } from 'react';

import { version } from '../../../package.json';

const {
  REACT_APP_SENTRY_KEY,
  REACT_APP_SENTRY_PROJECT_ID,
  REACT_APP_ENV_NAME = 'local',
  NODE_ENV
} = process.env;

if (NODE_ENV !== 'development') {
  init({
    release: version,
    environment: REACT_APP_ENV_NAME,
    dsn: `https://${REACT_APP_SENTRY_KEY}@sentry.yalantis.com/${REACT_APP_SENTRY_PROJECT_ID}`
  });
}

export default function withErrorBoundary(ComponentToWrap: ComponentType) {
  if (NODE_ENV !== 'development') {
    return ComponentToWrap;
  }

  WrappedComponent.displayName = `${
    ComponentToWrap.displayName
  }WithErrorBoundary`;

  return WrappedComponent;

  function WrappedComponent(props: { [key: string]: unknown }) {
    return (
      <ErrorBoundary>
        <ComponentToWrap {...props} />
      </ErrorBoundary>
    );
  }
}

class ErrorBoundary extends React.Component<
  {},
  {
    error?: unknown;
    eventId?: string;
  }
> {
  public state = { error: undefined, eventId: undefined };

  private handleBtnClick = () => {
    const { eventId } = this.state;
    showReportDialog({ eventId });
  };

  public componentDidCatch(
    error: unknown,
    errorInfo: { [key: string]: unknown }
  ) {
    this.setState({ error }, () => {
      withScope(scope => {
        scope.setExtras(errorInfo);
        const eventId = captureException(error);
        this.setState({ eventId });
      });
    });
  }

  public render() {
    const { error } = this.state;
    const { children } = this.props;

    if (!error) {
      return children;
    }

    return (
      <button type="button" onClick={this.handleBtnClick}>
        Report feedback
      </button>
    );
  }
}
