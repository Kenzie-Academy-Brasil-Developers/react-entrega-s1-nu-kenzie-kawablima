import { useState } from 'react';
import './App.css';
import Image from './img/logo2NU.png'
import Form from './Form';
import List from './List';
import TotalMoney from './TotalMoney';


const App = () => {
  const [listTransaction, setListTransaction] = useState([
    
  ])

  const [transaction, setTransaction] = useState([
    
  ])

  return (
    <>
      <header>
          <h1 className="logo"><img src={Image} alt="Logo NuKenzie" /></h1>
          <button className="buttonHome">Inicio</button>
        </header>

      <div className='App'>
        <main className="main">
          <Form 
            listTransaction={listTransaction}
            setListTransaction={setListTransaction}
            setTransaction={setTransaction}
          />
          <TotalMoney 
            listTransaction={listTransaction}
          />
        </main>

        <aside>
          <List 
            listTransaction={listTransaction}
            setListTransaction={setListTransaction}
            transaction={transaction}
            setTransaction={setTransaction}
          />
        </aside>
      </div>
    </>
  );
}

export default App;
