import styled from 'styled-components'

export const TotalInfos = styled.div`
  padding: 0 162px;
`

export const Infos = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Redes = styled.ul`
  display: flex;
  margin-top: 56px;
  gap: 16px;

  li {
    cursor: pointer;
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
`

export const Itens = styled.ul`
  li {
    font-size: 16px;
    margin-bottom: 16px;
    color: #2d2d2d;

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
    color: #515151;
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
`
