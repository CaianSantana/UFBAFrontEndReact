import React, {Component} from 'react';
import './App.css';
import Table from './Table.js';
import Form from './Form'

class App extends Component {
  
  state = { alunos: [
      /*{
        name: 'Dudu',
        classe: 'Programação Web',
      },
      {
        name: 'Paty',
        classe: 'Análise de Algoritmos',
      },
      {
        name: 'Joãozinho',
        classe: 'Programação 00',
      },
      {
        name: 'Ju',
        classe: 'Engenharia de Requisitos',
      },*/
    ]
  }

  removerAlunos = (index) => {
    const {alunos} = this.state
    this.setState(
      {
        alunos: alunos.filter((aluno, i) => {
          return i !== index
        })
      }
    )
  }

  render() {
    const {alunos} = this.state;

    return (
      <>
        <div className="container">
          <h1>Tabela de Alunos</h1>
          <Table 
            alunos = {alunos} 
            removerAlunos= {this.removerAlunos}/>
            <Form />
        </div>
      </>
    );
  }
}

export default App;

