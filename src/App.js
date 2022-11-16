import './App.css';
import { Header } from './component/Header';
import Balance from './component/Balance';
import IncomeExpenses from './component/IncomeExpenses';
import { TransactionList } from './component/TransactionList';
import AddTransaction from './component/AddTransaction';

import { GlobalState } from './context/GlobalState';

function App() {
  return (
    <GlobalState >
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalState>
  );
}

export default App;
