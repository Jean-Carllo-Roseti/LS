import {
  Cabecalho,
  HamList,
  HambuHeader,
  Hamburguer,
  HeaderNav,
  NavList
} from './styles'
import Logo from '../../assets/images/Logo.png'
import LogoCompleto from '../../assets/images/LGcompleto.png'
import { useState } from 'react'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Cabecalho>
      <HeaderNav>
        <div>
          <img src={Logo} alt="logomarca da empresa" />
          <img src={LogoCompleto} alt="Nome da empresa personalizado" />
        </div>
        <HambuHeader>
          <HamList className={isOpen ? 'is-open' : ''}>
            <li>Quem somos</li>
            <li>Ajuda</li>
            <li>Entrar</li>
          </HamList>
        </HambuHeader>
        <Hamburguer onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </Hamburguer>
        <NavList>
          <li>Quem somos</li>
          <li>Ajuda</li>
          <li>Entrar</li>
        </NavList>
      </HeaderNav>
    </Cabecalho>
  )
}

export default Header
