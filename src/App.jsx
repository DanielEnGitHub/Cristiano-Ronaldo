import Routes from "./routes/Routes";
import { Toaster } from "react-hot-toast";
import { Context } from "./components/Context/Contex";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={true} />
      <Context>
        <Routes />
      </Context>
    </>
  );
}

export default App;
