import Card from '../Card';
import './style.css';

const List = ({ listTransaction, setListTransaction, transaction, setTransaction }) => {
  
  
  function filterTodos(){
    setTransaction(listTransaction)
  }

  function filterEntradas(){
    const filtro = listTransaction.filter((transaction) => transaction.type === 'entrada')
    setTransaction(filtro)
  }

  function filterDespesas(){
    const filtro = listTransaction.filter((transaction) => transaction.type === 'despesa')
    setTransaction(filtro)
  }

  return (
    <>
    <div className='mainList'>
      <h1 className='titleList'>Resumo financeiro</h1>

    
      <button className="buttonList todos" onClick={() => filterTodos()}>Todos</button>
      <button className="buttonList entradas" onClick={() => filterEntradas()}>Entradas</button>
      <button className="buttonList despesas" onClick={() => filterDespesas()}>Despesas</button>
    </div>

    <div>
    {transaction.map((transactionCard, index) => (
      <Card 
      setListTransaction={setListTransaction}
      listTransaction={listTransaction}
      setTransaction={setTransaction}
      transactionCard={transactionCard} 
      key={index}
      />
    ))}

    </div>
    </>
  );
}

export default List;