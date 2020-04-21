import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SigninForm from '../components/SigninForm';
import { startLoginSaga } from '../redux/modules/auth';

const SigninFormContainer = props => {
  const loading = useSelector(state => state.auth.loading);
  const error = useSelector(state => state.auth.error);
  const dispatch = useDispatch();

  const login = useCallback(
    (email, password) => {
      dispatch(startLoginSaga({ email, password }));
    },
    [dispatch],
  );

  return (
    <SigninForm
      {...props}
      loading={loading}
      error={error}
      login={login}
    />
  );
};

export default SigninFormContainer;
