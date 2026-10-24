import { useState } from "react";
import "./App.css";

function App(){
  const [tarefas, setTarefas] = useState([]);
  const [texto, setTexto]  = useState("");

  function adicionar(){
    if (!texto.trim()){
      return;
    }
    setTarefas([...tarefas, texto]);
    setTexto("");
  }

  function remover(indice) {
    const novaTarefas = tarefas.filter((tarefa, i) => i !== indice);
    setTarefas(novaTarefas);
  }

  return (

    <div className="app">
      <h1>Lista de Tarefas</h1>
    <div className="formulario">
      <input className="campo" value={texto} 
        onChange={(e) => setTexto (e.target.value)}
      />
      <button className="botao-add" onClick={adicionar}>Adicionar</button>
    </div>
      <ul className="lista">
        {tarefas.map((tarefa, indice) => (
          <li className="item" key={indice}>{tarefa}
          <button className="botao-remover" onClick={() => remover(indice)}>X</button>
          </li>
        ))}

      </ul>
    </div>
  )
}

export default App;