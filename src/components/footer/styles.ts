import styled from 'styled-components'
import { cores } from '../../styles'

export const TotalInfos = styled.div`
  span {
    width: 100%;
    height: 2px;
    border-bottom: 1px solid green;
    display: inline-block;
  }
`

export const Infos = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 48px 0;

  @media (max-width: 1024px) {
    display: block;
  }
`
export const Redes = styled.ul`
  display: flex;
  margin-top: 56px;
  gap: 16px;

  li {
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    display: inline-flex;
  }
`

export const LogoLinks = styled.div``

export const LogoMarca = styled.img`
  width: 169px;
  height: 48px;
`

export const Links = styled.ul`
  display: flex;
  gap: 110.5px;

  @media (max-width: 1024px) {
    margin-top: 24px;
    justify-content: space-around;
  }

  @media (max-width: 768px) {
    margin-top: 24px;
    display: block;
  }
`

export const Itens = styled.ul`
  li {
    font-size: 16px;
    margin-bottom: 16px;
    color: ${cores.textColor};

    &: first-child {
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 24px;
    }
  }
`

export const Detalhes = styled.div`
  margin-top: 48px;
  margin-bottom: 24px;

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #${cores.textCinza};
  }

  & > p:nth-child(1) {
    margin-bottom: 8px;
  }

  & > p:nth-child(3) {
    margin-top: 24px;
  }

  position: relative;
`
export const Botao = styled.button`
  position: absolute;
  background: transparent;
  border: none;
  cursor: pointer;

  right: 0;
  top: 0;

  @media (max-width: 1024px) {
    display: none;
  }
`
