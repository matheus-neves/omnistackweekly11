import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import { Container, Header, List } from './styles';
import Button from '../../components/Button/styles';
import logoImg from '../../assets/logo.svg';

export default function Profile() {
  const [incidents, setIncidents] = useState([]);
  const history = useHistory();

  const ongId = localStorage.getItem('ongId');
  const ongName = localStorage.getItem('ongName');

  useEffect(() => {
    api
      .get('profile', {
        headers: {
          Authorization: ongId,
        },
      })
      .then((response) => {
        const data = response.data.map((incident) => ({
          ...incident,
          valueFormatted: Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(incident.value),
        }));

        setIncidents(data);
      });
  }, [ongId]);

  const handleDeleteIncident = async (id) => {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId,
        },
      });

      setIncidents(incidents.filter((incident) => incident.id !== id));
    } catch (error) {
      alert('Erro ao deletar caso, tente novamente.');
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <Container>
      <Header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Bem vinda, {ongName}</span>

        <Button as={Link} to="/incidents/new">
          Cadastrar novo caso
        </Button>

        <button type="button" onClick={handleLogout}>
          <FiPower size={18} color="#e02041" />
        </button>
      </Header>

      <h1>Casos Cadastrados</h1>

      <List>
        {incidents.map((incident) => (
          <li key={incident.id}>
            <strong>Caso:</strong>
            <p>{incident.title}</p>

            <strong>Descrição:</strong>
            <p>{incident.description}</p>

            <strong>Valor:</strong>
            <p>{incident.valueFormatted}</p>

            <button
              onClick={() => handleDeleteIncident(incident.id)}
              type="button"
            >
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </List>
    </Container>
  );
}
