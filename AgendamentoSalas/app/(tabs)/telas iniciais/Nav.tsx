import React from 'react';
import { useColor } from "@/Temas/Temas";
import styles from '../styles/navStyle.css';

const Nav = () => {
  const theme = useColor();

  return (
    <nav className={styles.navbar}>
      <div className="logo2">
        <img src="/media/logo/logosenaivermelha.png" alt="" style={{ maxWidth: 200, maxHeight: 200 }} />
      </div>
      <div className="navLinks">
        <div className="dropdown custom-dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{
              border: 0,
              letterSpacing: 3,
              fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
              backgroundColor: theme.bgPrimary,
              color: theme.textColorPrimary,
            }}
          >
            Gerenciamento de Usuários
          </button>
          <ul className="dropdown-menu">
            <li>
              <a
                className="dropdown-item"
                style={{
                  fontWeight: 'bold',
                  color: theme.textColorPrimary,
                }}
                href="{% url 'cadastro' %}"
              >
                Cadastro
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                style={{
                  fontWeight: 'bold',
                  color: theme.textColorPrimary,
                }}
                href="{% url 'listaU' %}"
              >
                Lista Cadastros
              </a>
            </li>
          </ul>
        </div>
        <div className="dropdown custom-dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{
              border: 0,
              letterSpacing: 3,
              fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
              backgroundColor: theme.bgPrimary,
              color: theme.textColorPrimary,
            }}
          >
            Reserva
          </button>
          <ul className="dropdown-menu">
            <li>
              <a
                className="dropdown-item"
                style={{
                  fontWeight: 'bold',
                  color: theme.textColorPrimary,
                }}
                href="{% url 'reserva' %}"
              >
                Reservar
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                style={{
                  fontWeight: 'bold',
                  color: theme.textColorPrimary,
                }}
                href="{% url 'listaReserva' %}"
              >
                Lista Reservas
              </a>
            </li>
          </ul>
        </div>
        <a
          href="{% url 'login' %}"
          style={{
            fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
            color: theme.textColorPrimary,
          }}
        >
          Login
        </a>
        <a
          href="{% url 'disponibilidade' %}"
          style={{
            fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
            color: theme.textColorPrimary,
          }}
        >
          Disponibilidade
        </a>
      </div>
    </nav>
  );
};

export default Nav;