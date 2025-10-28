import { useContext, useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { LoginContext } from '../../contexts/LoginContext';

function Menu() {
  const { isLoggedIn, logout } = useContext(LoginContext);

  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn]);

  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-start items-center">
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="text-white hover:text-gray-300">
                Liste des utilisateurs
              </a>
            </li>
          </ul>
          <div className="w-250"></div>
          <button
            className="text-white hover:text-gray-300"
            onClick={() => logout()}
          >
            Se déconnecter
          </button>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Menu;
