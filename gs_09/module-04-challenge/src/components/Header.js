import React, { Component } from "react";

import { MdAccountCircle } from 'react-icons/md';

import facebook from '../assets/facebook.png';


class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <img src={facebook} />

          <div>
            <span>Meu perfil</span>
            <MdAccountCircle size={30} />
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;