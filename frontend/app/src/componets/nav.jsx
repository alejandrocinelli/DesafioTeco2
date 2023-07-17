import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../css/nav.css';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav>
        <div className="nav-toggle" onClick={toggleMenu}>
          <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} />
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li>
            <Link exact to="/">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/cargar-cliente">
              Cargar Nuevo Cliente
            </Link>
          </li>
          <li>
            <Link to="/consultar-cliente">
              Consultar Cliente
            </Link>
          </li>
          <li>
            <Link to="/clientes">
              Ver Clientes
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;