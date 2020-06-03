import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SigninForm from '../components/SigninForm';
import { startLoginSaga } from '../redux/modules/auth';
import { RootState } from '../redux/modules/reducer';

function SigninFormContainer(props: any) {
  const loading: boolean = useSelector((state: RootState) => state.auth.loading);
  const error: {} | null = useSelector((state: RootState) => state.auth.error);
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
