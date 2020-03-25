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

export default function NewIncident() {
  return (
    <Container>
      <div>
        <Section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>
          <BackLink to="/profile">
            <FiArrowLeft size={16} color="#e02041" /> Voltar para home
          </BackLink>
        </Section>

        <Form>
          <input placeholder="Título do caso" />
          <textarea placeholder="Descrição" />
          <input placeholder="Valor em reais" />

          <Button type="submit">Cadastrar</Button>
        </Form>
      </div>
    </Container>
  );
}
