import React, { Component } from 'react';
import axios from 'axios';

class LocacaoSalvar extends Component {
  constructor(props) {
      super(props);

      this.value = ""

      this.state = {
        cpfCliente : "",
	    idVeiculo : "",
	    inicioLocacao :"",
	    terminoLocacao :"",
        mensagem : "Cadastre Uma Locacao:"
      };

      this.salvar = this.salvar.bind(this);
  }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    

  salvar(e) {
      e.preventDefault();

      const locacao = {
        cpfCliente : this.state.cpfCliente,
	    idVeiculo : this.state.idVeiculo,
	    inicioLocacao : this.state.inicioLocacao,
	    terminoLocacao : this.state.terminoLocacao
       }
      
      axios
        .post('http://localhost:8080/atividade/locacao/salvar', locacao)
        .then(res => {
            this.setState({
                cpfCliente :"",
                idVeiculo : "",
                inicioLocacao :"",
                terminoLocacao :"",
                mensagem : "Locação Realizada!"
            });
        })
        .catch(error => {
            this.setState({
                mensagem: "[Erro]: Cliente e/ou Veículo Inexistente(s)!"
            });
        })
  }

  render() {
    return (
		<div>
            {this.state.mensagem && (
                <div><p>{this.state.mensagem}</p></div>
            )}

            <form onSubmit={this.salvar}>

                <label>CPF Cliente: </label>
                <input type="text" name="cpfCliente" onChange={this.onChange} value={this.state.cpfCliente}/>
                <br/>

                <label>ID Veículo: </label>
                <input type="text" name="idVeiculo" onChange={this.onChange} value={this.state.idVeiculo} />
                <br/>

                <label>Inicio da Locação: </label>
                <input type="text" name="inicioLocacao" onChange={this.onChange} value={this.state.inicioLocacao}/>
                <br/>

                <label>Término da Locação: </label>
                <input type="text" name="terminoLocacao" onChange={this.onChange} value={this.state.terminoLocacao}/>
                <br/>

                <button type="Submit">Salvar</button>

            </form>

		</div>
	  );
  }
}

export default LocacaoSalvar;
