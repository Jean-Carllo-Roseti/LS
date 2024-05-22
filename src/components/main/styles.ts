import styled from 'styled-components'
import { cores } from '../../styles'

export const Foto = styled.img`
width; 400px;
height: 492px;
border-radius: 8px;
margin-left: 226px;

@media (max-width: 1024px) {
  margin: 0;
}

@media (max-width: 768px) {
  width: 300px;
  height: 300px;
  margin: 24px 0;
}


`
export const TotalPrincipal = styled.div`
  display: flex;
  margin-bottom: 64px;

  @media (max-width: 1024px) {
    display: block;
  }
`

export const Conteudo = styled.div`

  margin: 80px 0;

  @media (max-width: 768px) {
    display: block;
    margin: 0;
  }

  h1 {
    font-size: 48px;
    font-weight: 700;
    line-height: 57.6px;
    margin-bottom: 0;
  }

  span {
    width: 160px;
    height: 2px;
    border-bottom: 2px solid green;
    display: inline-block;

    @media(max-width: 1024px) {
      margin-bottom: 24px;
      margin-top: 14px;
      width: 100%;
    }
  }


  p {
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    margin-bottom; 32px;
  }

  form {
    margin-top: 32px;

    @media (max-width: 768px) {

    }

    @media (max-width: 768px) {
      margin: 40px 0;
      display: grid;
    }

    button {
      cursor: pointer;
      font-size: 18px;
      line-height: 26px;
      text-align: center;
      font-weight: 700;
      padding: 10.5px 24.5px;
      border: solid 2px ${cores.verde};
      border-radius: 8px;
      background-color: ${cores.verde};
      color: #fff;
      transition: box-shadow 0.3s ease; /* Adiciona uma transição suave para a sombra */

      box-shadow: 0 5px 10px rgba(0, 0, 0, 0); /* Sombra inicial (sem sombra) */

      &:hover {
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3); /* Sombra ao passar o mouse */
      }

      &:nth-child(2) {
        background-color: #fff;
        color: ${cores.verde};
        margin-left: 24px;

        @media (max-width: 768px) {
          margin-top: 24px;
          margin-left: 0;
        }

      }
    }
  }




`
