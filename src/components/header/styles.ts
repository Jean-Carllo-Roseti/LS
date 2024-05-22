import styled from 'styled-components'
import { cores } from '../../styles'

export const Cabecalho = styled.header`
  background-color: ${cores.bgHeader};
  margin-bottom: 48px;
`
export const HeaderNav = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 96px;
  padding: 24px;
  align-items: center;
`
export const NavList = styled.ul`
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }

  li {
    padding: 10.5px 32px;
    cursor: pointer;
    color: ${cores.verde};

    &:nth-child(3) {
      border-radius: 8px;
      background-color: ${cores.verde};
      color: #fff;
      transition: box-shadow 0.3s ease; /* Adiciona uma transição suave para a sombra */

      box-shadow: 0 5px 10px rgba(0, 0, 0, 0); /* Sombra inicial (sem sombra) */

      &:hover {
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3); /* Sombra ao passar o mouse */
      }
    }

    &:nth-child(2) {
      margin: 0 16px;
    }
  }
`

export const HambuHeader = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
  }
`

export const Hamburguer = styled.div`
  width: 32px;
  margin-bottom: 8px;
  cursor: pointer;
  span {
    height: 2px;
    display: block;
    width: 100%;
    background-color: ${cores.verde};
    margin-bottom: 4px;

    @media (min-width: 768px) {
      display: none;
    }
  }

  @media (max-width: 768px) {
    display: block;
  }
`
export const HamList = styled.ul`
  display: none;
  color: ${cores.verde};
  font-weight: 600;

  &.is-open {
    display: block;
  }
`
