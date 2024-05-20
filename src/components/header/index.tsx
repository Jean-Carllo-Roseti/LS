import { Cabecalho, HeaderNav } from './styles'
import Logo from '../../assets/images/Logo.png'
import LogoCompleto from '../../assets/images/LGcompleto.png'

export const Header = () => {
  return (
    <Cabecalho>
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
