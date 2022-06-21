import { OAuthCredential, User } from 'firebase/auth';
import { useSelector } from 'react-redux';
import { selectors } from '../store/slices/userSlice';

interface AuthUserInfo {
  isAuth: boolean;
  user: User | null;
  credentional: OAuthCredential | null;
}

export const useAuth = (): AuthUserInfo => {
  const info = useSelector(selectors.getUserInfo);

  return {
    isAuth: !!info.user,
    user: info.user,
    credentional: info.credential,
  };
};
