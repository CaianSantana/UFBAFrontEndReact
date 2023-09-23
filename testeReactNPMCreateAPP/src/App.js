import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Table from './Table';

class App extends Component {
  state = { alunos = [
      {
        nome: "Dudu",
        turma: "Programação Web",
      },
      {
        nome: "Paty",
        turma: "Análise de Algoritmos",
      },
      {
        nome: "Joãozinho",
        turma: "Programação OO",
      },
      {
        nome: "Ju",
        turma: "Engenharia de Requisitos",
      }
    ]
          }
  removerAluno = (index) =>{
    const{alunos} = this.state;
    this.setState(
      {
        alunos: alunos.filter(alunos,i)=>{
          return i !== index
        })
      }
    )
  }
    
  render(){
   const {alunos} = this.state;
    return(
      <div className="container">
        <Table alunos = {alunos}
          removerAluno = {this.removerAluno}/>
      </div>
    ) 
  }
}


export default App;
