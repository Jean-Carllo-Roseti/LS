import { Cabecalho, HambuHeader, Hamburguer, HeaderNav } from './styles'
import Logo from '../../assets/images/Logo.png'
import LogoCompleto from '../../assets/images/LGcompleto.png'
import { useState } from 'react'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Cabecalho>
      <HambuHeader>
        <Hamburguer onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </Hamburguer>
        <ul className={isOpen ? 'is-open' : ''}>
          <li>Quem somos</li>
          <li>Ajuda</li>
          <li>Entrar</li>
        </ul>
      </HambuHeader>
      <HeaderNav>
        <div>
          <img src={Logo} alt="logomarca da empresa" />
          <img src={LogoCompleto} alt="Nome da empresa personalizado" />
        </div>
        <ul>
          <li>Quem somos</li>
          <li>Ajuda</li>
          <li>Entrar</li>
        </ul>
      </HeaderNav>
    </Cabecalho>
  )
}

export default Header
