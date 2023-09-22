import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Table from './Table';

class App extends Component {
  render(){
    const alunos = [
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
    return(
      <div className="container">
        <Table alunos = {alunos}/>
      </div>
    ) 
  }
}


export default App;
