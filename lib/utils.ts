import { User } from '@stytch/core/public';
import { deleteUser } from './api';

// eslint-disable-next-line
export const deleteCurrentUser = async (user: User | null, stytch: any) => {
  if (user === null) {
    return;
  }

  try {
    stytch.session.revoke();
    await deleteUser(user.user_id);
    window.location.href = '/login';
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }
};
