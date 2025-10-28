import { useContext, useEffect, useState } from 'react';
import { LoginContext } from '../../contexts/LoginContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface IUser {
  name: string;
  email: string;
  password: string;
}

function UserList() {
  const listeVide: IUser[] = [];
  const { isLoggedIn, token } = useContext(LoginContext);
  const [userList, setUserList] = useState(listeVide);

  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      axios
        .get('http://localhost:3001/api/users/all', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => setUserList(response.data.users));
    }
  }, [isLoggedIn]);

  return (
    <>
      {userList &&
        userList.map((user) => {
          return (
            <div
              key={user.name}
              className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{user.name}</div>
                <p className="text-gray-700 text-base">{user.email}</p>
                <p className="text-gray-700 text-base">{user.password}</p>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default UserList;
