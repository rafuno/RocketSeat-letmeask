import ilustrationImg from "../assets/images/illustration.svg";
import Logo from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";
import { ContainerHome } from "./styles";

const Home: React.FC = () => {
  return (
    <ContainerHome>
      <div>
        <aside>
          <img
            src={ilustrationImg}
            alt="ilustração simbolizando perguntas e respostas"
          />
          <strong>Crie salas de Q&amp;A ao vivo</strong>
          <p>Tire Dúvidas da sua audiência em tempo real</p>

          <main>
            <div>
              <img src={Logo} alt="" />
              <button>
                <img src={googleIconImg} alt="Logo do Google" />
                Crie sua sala com o Google
              </button>
              <div>Ou Entre em uma sala</div>
              <form>
                <input type="text" placeholder="Digite o código da sala" />
                <button type="submit">Entrar na sala</button>
              </form>
            </div>
          </main>
        </aside>
      </div>
    </ContainerHome>
  );
};
export default Home;
