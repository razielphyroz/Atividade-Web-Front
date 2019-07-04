import React, { Component } from 'react';
import axios from 'axios';

class VeiculoExcluir extends Component {
  constructor(props) {
      super(props);

      this.state = {
        placa : "",
        mensagem : "Remova Um Veículo:"
      };

      this.excluir = this.excluir.bind(this);
  }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    excluir(e) {
      e.preventDefault();

      const placa = this.state.placa
      
      axios
        .delete('http://localhost:8080/atividade/veiculo/remover-por-placa/' + placa)
        .then(res => {
            this.setState({
                placa : "",
                mensagem: "Sucesso!"
            });
        })
        .catch(error => {
            this.setState({
                mensagem: "[Erro]: Deu ruim..."
            });
        })
  }

  render() {
    return (
		<div>
            {this.state.mensagem && (
                <div><p>{this.state.mensagem}</p></div>
            )}

            <form onSubmit={this.excluir}>

                <label>Placa: </label>
                <input type="text" name="placa" onChange={this.onChange} value={this.state.placa}/>
                <br/>
                <button type="Submit">Excluir</button>

            </form>
		</div>
	  );
  }
}

export default VeiculoExcluir;
