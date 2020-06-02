import { useSelector } from 'react-redux';
import { RootState } from '../redux/modules/reducer';

export default function useToken() {
  const token: string = useSelector((state: RootState) => state.auth.token);
  return token;
}