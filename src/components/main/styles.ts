import styled from 'styled-components'

export const Foto = styled.img`
width; 400px;
height: 492px;
border-radius: 8px;
margin-left: 226px;
`
export const TotalPrincipal = styled.div`
  display: flex;
  padding: 0 162px;
  height: 492px;
  margin-bottom: 64px;
`

export const Conteudo = styled.div`
  height: 330px;
  margin: 80px 0;

  .convite {
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
    border-bottom: 2px solid green; /* Adiciona uma borda na parte inferior */
    display: inline-block;
  }


  p {
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    margin-bottom; 32px;
  }

  form {
    margin-top: 32px;

    button {
      font-size: 18px;
      line-height: 26px;
      text-align: center;
      font-weight: 700;
      padding: 10.5px 24.5px;
      border: solid 2px green;
      border-radius: 8px;
      background-color: green;
      color: #fff;

      &:nth-child(2) {
        background-color: #fff;
        color: green;
        margin-left: 24px;
      }
    }
  }




`
