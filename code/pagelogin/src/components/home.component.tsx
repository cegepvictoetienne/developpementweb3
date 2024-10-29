import { Button } from '@mui/material';
import { auth, getToken, logout } from '../firebase';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { IUser } from '../models/User';

export const Home = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [user, loading] = useAuthState(auth);

  const fetchUsers = async () => {
    const token = await getToken();
    console.log('token:', token);
    const response = await fetch('http://localhost:3000/api/users/all', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    console.log('data:', data.users);
    setUsers(data.users as IUser[]);
  };

  useEffect(() => {
    if (!user) return;
    fetchUsers();
  }, [user, loading]);

  console.log('users:', users);
  return (
    <>
      <h1>Page sécurisée</h1>
      {users.length !== 0 ? (
        users.map((user) => <p key={user.id}>{user.name}</p>)
      ) : (
        <p>Aucun utilisateur</p>
      )}
      <Button onClick={() => logout()}>Se déconnecter</Button>
    </>
  );
};
