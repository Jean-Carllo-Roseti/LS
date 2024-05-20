import { Conteudo, Foto, TotalPrincipal } from './styles'
import medica from '../../assets/images/medicaAtende.jpg'

export const Principal = () => {
  return (
    <TotalPrincipal>
      <Conteudo>
        <div className="convite">
          <h1>
            Junte-se à<br /> nossa comunidade
          </h1>
          <span className="linha"></span>
          <p>
            Encontre atendimento clínico de qualidade ou entre para o time de
            profissionais da Lacrei Saúde.
          </p>
        </div>
        <div>
          <form action="">
            <button>Buscar Atendimento</button>
            <button>Oferecer Atendimento</button>
          </form>
        </div>
      </Conteudo>
      <Foto src={medica} alt="foto de uma médica prestando atendimento" />
    </TotalPrincipal>
  )
}

export default Principal
