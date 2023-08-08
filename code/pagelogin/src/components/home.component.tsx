import { Button } from '@mui/material';
import { logout } from '../firebase';

export const Home = () => {
  return (
    <>
      <h1>Page sécurisée</h1>
      <Button onClick={() => logout()}>Se déconnecter</Button>
    </>
  );
};
