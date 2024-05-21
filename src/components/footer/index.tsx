import FbIcon from '../../assets/images/FbIcon.png'
import IgIcon from '../../assets/images/iGIcon.png'
import LinkeInIcon from '../../assets/images/LinkdInIcon.png'
import emailIcon from '../../assets/images/emailIcon.png'
import LogoInteiro from '../../assets/images/LogoInteiro.png'
import ButtonAba from '../../assets/images/ButtonAba.png'

import {
  Botao,
  Detalhes,
  Infos,
  Itens,
  Links,
  LogoLinks,
  LogoMarca,
  Redes,
  TotalInfos
} from './styles'

export const Footer = () => {
  return (
    <TotalInfos>
      <span></span>
      <Infos>
        <LogoLinks>
          <div>
            <LogoMarca
              src={LogoInteiro}
              alt="logo tipo da marca Lacrei Saúde"
            />
          </div>
          <Redes>
            <li>
              <img src={FbIcon} alt="icone de facebook" />
            </li>
            <li>
              <img src={IgIcon} alt="icone de Isntagram" />
            </li>
            <li>
              <img src={LinkeInIcon} alt="icone de LinkeIn" />
            </li>
            <li>
              <img src={emailIcon} alt="icone de um envelope" />
            </li>
          </Redes>
        </LogoLinks>
        <Links>
          <Itens>
            <li>Lacrei Saúde</li>
            <li>Quem somos</li>
            <li>Nosso propósito</li>
            <li>missão, visão, valor</li>
            <li>Acessibilidade</li>
          </Itens>
          <Itens>
            <li>Saúde</li>
            <li>Buscar Atendimento</li>
            <li>Oferecer atendimento</li>
          </Itens>
          <Itens>
            <li>Políica de Privacidade</li>
            <li>Segurança e provacidade</li>
            <li>Termos de uso</li>
            <li>Direito de titItensar</li>
          </Itens>
        </Links>
      </Infos>
      <span></span>
      <Detalhes>
        <p>
          A Lacrei não oferece tratamento médico emergencial. Em caso de
          emergência procure o hospital mais próximo.
        </p>
        <p>
          Em caso de problemas psicológicos, ligue para 188 (CVV) ou acesse o
          site www.cvv.org.br
        </p>
        <p>
          Copyright © 2021 Lacrei. Todos os direitos reservados. CNPJ:
          51.265.351/0001-65
        </p>
        <Botao
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img
            src={ButtonAba}
            alt="imagem de um botao com um icone de seta para cima"
          />
        </Botao>
      </Detalhes>
    </TotalInfos>
  )
}

export default Footer
