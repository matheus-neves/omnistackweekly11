import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import { Container, Form } from './styles';
import Button from '../../components/Button/styles';
import BackLink from '../../components/BackLink/styles';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon() {
  return (
    <Container>
      <section>
        <img src={logoImg} alt="Be The Hero" />

        <Form>
          <h1>Faça seu logon</h1>
          <input placeholder="Sua ID" />
          <Button type="submit">Entrar</Button>

          <BackLink to="/register">
            <FiLogIn size={16} color="#e02041" /> Não tenho cadastro
          </BackLink>
        </Form>
      </section>

      <img src={heroesImg} alt="Heroes" />
    </Container>
  );
}
