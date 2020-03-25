import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import {
  Container,
  Section,
  Form,
} from '../../components/ContainerForm/styles';
import Button from '../../components/Button/styles';
import BackLink from '../../components/BackLink/styles';

import logoImg from '../../assets/logo.svg';

export default function Register() {
  return (
    <Container>
      <div>
        <Section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>
          <BackLink to="/">
            <FiArrowLeft size={16} color="#e02041" /> Voltar para o logon
          </BackLink>
        </Section>

        <Form>
          <input placeholder="Nome da ONG" />
          <input type="email" placeholder="E-mail" />
          <input placeholder="Whatsapp" />

          <div>
            <input placeholder="Cidade" />
            <input placeholder="UF" style={{ width: 80 }} />
          </div>

          <Button type="submit">Cadastrar</Button>
        </Form>
      </div>
    </Container>
  );
}
