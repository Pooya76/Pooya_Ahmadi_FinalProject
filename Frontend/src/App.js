import { Provider } from "./Context";
import { Actions } from "./Actions";
import Header from "./components/Header"
import Routes from './router'
function App() {
  const data = Actions();
  return (
    <Provider value={data}>
      <Header />
      <Routes/>
    </Provider>
  );
}

export default App;