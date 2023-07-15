import Header from "./components/Header";
import Balance from "./components/Balance";
import Expenses from "./components/Expenses";
import Transaction from "./components/Transaction";
import AddTransaction from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";
function App() {
  return (
    <GlobalProvider>
    <div className="grid justify-center items-center h-screen bg-slate-400">
       
    <div className="grid justify-center items-center">
      <Header /> 
        <Balance/>
        <Expenses/>
        <Transaction/>
        <AddTransaction/>
      </div>
    </div>
    </GlobalProvider>
  );
}

export default App;
