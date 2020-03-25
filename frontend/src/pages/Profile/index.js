import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import { Container, Header, List } from './styles';
import Button from '../../components/Button/styles';
import logoImg from '../../assets/logo.svg';

export default function Profile() {
  return (
    <Container>
      <Header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Bem vinda, APAD</span>

        <Button as={Link} to="/incidents/new">
          Cadastrar novo caso
        </Button>

        <button type="button">
          <FiPower size={18} color="#e02041" />
        </button>
      </Header>

      <h1>Casos Cadastrados</h1>

      <List>
        <li>
          <strong>Caso:</strong>
          <p>Caso teste</p>

          <strong>Descrição:</strong>
          <p>Descrição teste</p>

          <strong>Valor:</strong>
          <p>R$120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>Caso:</strong>
          <p>Caso teste</p>

          <strong>Descrição:</strong>
          <p>Descrição teste</p>

          <strong>Valor:</strong>
          <p>R$120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>Caso:</strong>
          <p>Caso teste</p>

          <strong>Descrição:</strong>
          <p>Descrição teste</p>

          <strong>Valor:</strong>
          <p>R$120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>Caso:</strong>
          <p>Caso teste</p>

          <strong>Descrição:</strong>
          <p>Descrição teste</p>

          <strong>Valor:</strong>
          <p>R$120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
      </List>
    </Container>
  );
}
