import { OAuthCredential, User } from 'firebase/auth';
import { useSelector } from 'react-redux';
import { selectors } from '../store/slices/userSlice';

interface AuthUserInfo {
  isAuth: boolean;
  user: User | null;
  credential: OAuthCredential | null;
}

export const useAuth = (): AuthUserInfo => {
  const user = useSelector(selectors.getUserInfo);
  const credential = useSelector(selectors.getUserСredential);

  return {
    isAuth: !!user,
    user,
    credential,
  };
};
