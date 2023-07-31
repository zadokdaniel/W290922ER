import logo from "./logo.svg";
import "./App.css";

import UserInfo from "./components/userInfo";

function App() {
  return (
    <div className="App">
      <UserInfo name="Daniel" age={29} email="zadok@gmail.com" />
      <UserInfo name="Shalom" age={29} email="zadok@gmail.com" />
      <UserInfo name="Avi" age={29} email="zadok@gmail.com" />
      <UserInfo name="Yoram" age={29} email="zadok@gmail.com" />
      <UserInfo name="Lora" age={29} email="zadok@gmail.com" />
      <UserInfo name="Stav" age={29} email="zadok@gmail.com" />
    </div>
  );
}

export default App;
