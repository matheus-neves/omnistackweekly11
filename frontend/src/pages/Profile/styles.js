import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;

  h1 {
    margin-top: 80px;
    margin-bottom: 24px;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 20px;
    margin-left: 24px;
  }

  img {
    height: 64px;
  }

  a {
    width: 260px;
    margin-left: auto;
    margin-top: 0;
  }

  button {
    display: flex;
    justify-content: center;
    height: 60px;
    width: 60px;
    border-radius: 4px;
    border: 1px solid #dcdce6;
    background: transparent;
    margin-left: 16px;
    transition: border-color 0.2s;

    &:hover {
      border-color: #999;
    }
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
  list-style: none;

  li {
    background: #fff;
    padding: 24px;
    border-radius: 8px;
    position: relative;

    strong {
      display: block;
      text-transform: uppercase;
      margin-bottom: 16px;
      color: #41414d;
    }

    p {
      color: #737380;
      line-height: 21px;
      font-size: 16px;
    }

    p + strong {
      margin-top: 32px;
    }
  }

  button {
    position: absolute;
    right: 24px;
    top: 24px;
    border: 0;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`;
