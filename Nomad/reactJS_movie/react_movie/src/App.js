import Button from "./Button";
import Styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={Styles.title}>Welcome back!</h1>
      <Button text={"Continue"} />
    </div>
  );
}

export default App;
