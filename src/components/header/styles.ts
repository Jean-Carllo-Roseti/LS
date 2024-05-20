import styled from 'styled-components'

export const Cabecalho = styled.header`
  background-color: #f5fffb;
  margin-bottom: 48px;
`
export const HeaderNav = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 96px;
  padding: 24px 162px;
  align-items: center;

  ul {
    display: flex;

    li {
      padding: 10.5px 32px;
      cursor: pointer;
      color: green;

      &:nth-child(3) {
        border-radius: 8px;
        background-color: green;
        color: #fff;
      }

      &:nth-child(2) {
        margin: 0 16px;
      }
  }
`
