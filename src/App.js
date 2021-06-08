import "./styles.css";
import Header from "./Header/header";

export default function App() {
  const title = "Hello CodeSandbox";
  const nomClass = "App";
  return (
    <div className={nomClass}>
      <Header></Header>
      <h1>{title}</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
