import './style.css';

const TotalMoney = ({ listTransaction }) => {
  console.log(listTransaction)
  const valorTotal = listTransaction.reduce((valorInicial, valorAtual) => 
    valorAtual.type === 'despesa' ? valorInicial - Number(valorAtual.value) : valorInicial + Number(valorAtual.value), 0) 
    return (
      <div className='mainTM'>
      <div className='valueTotal'>
        <h1 className='titleTM'>Valor total:</h1>
        <h1 className='valueTM'> $ {valorTotal}</h1>
      </div>
      <p className='textTM'>O valor se refere ao saldo</p>
      

    </div>
  );
}

export default TotalMoney;