import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/modules/reducer';

function withAuth(Component: any, loggedin: boolean) {
  function WrappedComponent(props: any) {
    const token = useSelector((state: RootState) => state.auth.token);

    if (loggedin) {
      if (token === null) {
        return <Redirect to="/signin" />;
      }
    } else {
      if (token !== null) {
        return <Redirect to="/" />;
      }
    }
    return <Component {...props} />;
  }
  WrappedComponent.displayName = `withAuth(${Component.name})`;
  return WrappedComponent;
}

withAuth.defaultProps = {
  loggedin: true,
}

export default withAuth;
