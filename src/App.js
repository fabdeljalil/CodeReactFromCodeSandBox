import "./styles.css";
import Header from "./Header/header";
import Footer from "./Footer/footer";
export default function App() {
  const user = {
    firstName: "fadoua"
  };
  const monMessage = {
    message: "Bonjour"
  };
  const title = "Hello CodeSandbox";
  const nomClass = "App";

  return (
    <>
      <div className={nomClass}>
        <Header nomUtilisateur={user.firstName} message={monMessage.message}>
          <span>Partie Droite</span>
          <p>Test</p>
        </Header>
        <h1>{title}</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
      <Footer></Footer>
    </>
  );
}
