import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  //function for opening the file manager
  let openFileManager;

  useEffect(() => {
    openFileManager = async () => {
      // Have the user select a file.
      const [handle] = await window.showOpenFilePicker();
      // Get the File object from the handle.
      const file = await handle.getFile();
    };
  }, []);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>Click the button to open a file picker</h2>
      <div className="card">
        <button onClick={openFileManager}>Open File Manager</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
