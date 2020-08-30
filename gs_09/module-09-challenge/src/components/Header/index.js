import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/fastfeet-logo-purple.svg';

import {
  Container,
  Logo,
  NavigationList,
  NavItem,
  LoginControl,
} from './style';

import history from '~/services/history';

export default function Header() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const menuItems = [
    {
      id: 0,
      name: 'ENCOMENDAS',
      route: '/deliveries',
    },
    {
      id: 1,
      name: 'ENTREGADORES',
      route: '/deliverymans',
    },
    {
      id: 2,
      name: 'DESTINATARIOS',
      route: '/recipients',
    },
    {
      id: 3,
      name: 'PROBLEMAS',
      route: '/problems',
    },
  ];

  useEffect(() => {
    const { pathname } = history.location;

    const newIndex = menuItems.findIndex((item) =>
      pathname.includes(item.route)
    );

    setSelectedIndex(newIndex);
  }, [menuItems]);

  function handleSignOut() {
    console.tron.log('You are going to leave your session :o');
  }

  return (
    <Container>
      <div>
        <Logo onClick={() => history.push('/')}>
          <img src={logo} alt="Fastfeet" />
        </Logo>

        <NavigationList>
          {menuItems.map((item) => (
            <NavItem
              key={String(item.id)}
              onClick={() => setSelectedIndex(item.id)}
              selected={selectedIndex === item.id}
            >
              <Link to={item.route}>{item.name}</Link>
            </NavItem>
          ))}
        </NavigationList>
      </div>

      <LoginControl>
        <strong>Admin FastFeet</strong>
        <button onClick={handleSignOut} type="button">
          sair do sistema
        </button>
      </LoginControl>
    </Container>
  );
}
