import Routes from "./routes/Routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={true} />
      <Routes />
    </>
  );
}

export default App;
