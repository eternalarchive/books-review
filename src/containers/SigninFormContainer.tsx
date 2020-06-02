import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SigninForm from '../components/SigninForm';
import { startLoginSaga } from '../redux/modules/auth';
import { RootState } from '../redux/modules/reducer';

function SigninFormContainer(props) {
  const loading = useSelector((state: RootState) => state.auth.loading);
  const error = useSelector((state: RootState) => state.auth.error);
  const dispatch = useDispatch();

  const login = useCallback(
    (email: string, password: string) => {
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
