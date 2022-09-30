import './style.css';
import Lixeira from '../img/trash.png'

const Card = ({ transactionCard, listTransaction, setListTransaction, setTransaction }) => {
  
  function excluirCard(transaction) {
    const filtro = listTransaction.filter(listTransactionCard => listTransactionCard.id !== transaction.id)
    setListTransaction(filtro)
    setTransaction(filtro)
  }

  return (
    <div className='mainCard'>
      <div className='divCard'>
        <h1 className='cardDescription'>{transactionCard.description}</h1>
        <p className='cardValue'>R$ {transactionCard.value},00</p>
        <button className='excluirCard' onClick={() => excluirCard(transactionCard)}><img src={Lixeira} alt="Lixeira" /></button>
      </div>
      <p className='cardType'>{transactionCard.type}</p>
    </div>
  );
}

export default Card;