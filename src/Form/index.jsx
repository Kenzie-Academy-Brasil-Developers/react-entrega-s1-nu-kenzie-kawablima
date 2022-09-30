import { useState } from "react";
import "./style.css";

const Form = ({ listTransaction, setListTransaction, setTransaction }) => {
  const [description, setDescription] = useState("");
  const [type, setType] = useState("entrada");
  const [value, setValue] = useState(0);
  const [id, setId] = useState(0)

  function createTransaction(event) {
    event.preventDefault();

    if (description !== "" && value > 0) {
      setListTransaction([...listTransaction, { description, type, value, id }]);
      setTransaction([...listTransaction, { description, type, value, id }]);
      setId(id + 1)
    }else{
      alert('ERRO: Verifique as informações inseridas.')
    }
  }

  return (
    <form onSubmit={(event) => createTransaction(event)}>
      <h1 className="titleForm">Descrição</h1>
      <input
        type="text"
        className="description"
        placeholder="Digite aqui sua descrição"
        onChange={(event) => setDescription(event.target.value)}
      />
      <p className="textForm">Ex: Compra de roupas</p>

      <h1 className="titleForm">Valor</h1>
      <input
        type="number"
        className="value"
        placeholder="R$"
        onChange={(event) => setValue(event.target.value)}
      />

      <h1 className="titleForm">Tipo de valor</h1>
      <select 
        className="type"
        onChange={(event) => setType(event.target.value)}
      >
        <option value="entrada">Entrada</option>
        <option value="despesa">Despesa</option>
      </select>

      <button type="submit" className="buttonForm">Inserir valor</button>
    </form>
  );
};

export default Form;
