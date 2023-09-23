import React, { Component } from 'react';

class Form extends Component {

    initialState = {
        name: '',
        classe: '',
    }

    state = this.initialState;

    handleChange = (e) => {
        const {name, value} = e.target
        
        this.setState({
            [name]: value,
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    render(){
        const{name, classe} = this.state;

        return (
            <form>
                <label htmlFor="name">Nome</label>
                <input 
                    type="text" 
                    name="name"
                    id="name"
                    value={name}
                    onChange={this.handleChange}
                />
                <label htmlFor="name">Turma</label>
                <input 
                    type="text" 
                    name="classe"
                    id="classe"
                    value={classe}
                    onChange={this.handleChange}
                />
            </form>
        )
    }
}
  
export default Form;