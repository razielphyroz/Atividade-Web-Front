import React, { Component } from 'react';
import axios from 'axios';

class VeiculoSalvar extends Component {
  constructor(props) {
      super(props);

      this.state = {
        idveiculo : "",
        marca : "",
        modelo : "",
        ano : "",
        cor : "",
        placa : "",
        quilometragem : "",
        combustivel : "",
        valordiaria : "",
        tipo : "",
        mensagem : "Cadastre Um Veículo:"
      };

      this.salvar = this.salvar.bind(this);
  }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    componentWillMount() {
        var placa = this.props.match.params.placa;
        if (placa) {
            axios.get(`http://localhost:8080/atividade/veiculo/buscar-por-placa/${placa}`)
            .then(res => {
                const veiculo = res.data;
                this.setState({
                    
                    idveiculo : veiculo.idVeiculo,
                    marca : veiculo.placa,
                    modelo : veiculo.modelo,
                    ano : veiculo.ano,
                    cor : veiculo.cor,
                    placa : veiculo.placa,
                    quilometragem : veiculo.quilometragem,
                    combustivel : veiculo.combustivel,
                    valordiaria : veiculo.valorDiaria,
                    tipo : veiculo.tipo
   
                })
            }).catch(res => {
                console.log(res);
            })
        }
    }


  salvar(e) {
      e.preventDefault();

      const veiculo = {

          idVeiculo: this.state.idveiculo,
          marca: this.state.marca,
          modelo: this.state.modelo,
          ano: this.state.ano,
          cor: this.state.cor,
          placa: this.state.placa,
          quilometragem: this.state.quilometragem,
          combustivel: this.state.combustivel,
          valorDiaria: this.state.valordiaria,
          tipo: this.state.tipo,
    }
      
      axios
        .post('http://localhost:8080/atividade/veiculo/salvar', veiculo)
        .then(res => {
            this.setState({
                idVeiculo : null,
                marca : "",
                modelo : "",
                ano : "",
                cor : "",
                placa : "",
                quilometragem : "",
                combustivel : "",
                valordiaria : "",
                tipo : "",
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

            <form onSubmit={this.salvar}>

                <label>Marca: </label>
                <input type="text" name="marca" onChange={this.onChange} value={this.state.marca}/>
                <br/>

                <label>Modelo: </label>
                <input type="text" name="modelo" onChange={this.onChange} value={this.state.modelo} />
                <br/>

                <label>Ano: </label>
                <input type="text" name="ano" onChange={this.onChange} value={this.state.ano}/>
                <br/>

                <label>Cor: </label>
                <input type="text" name="cor" onChange={this.onChange} value={this.state.cor}/>
                <br/>

                <label>Placa: </label>
                <input type="text" name="placa" onChange={this.onChange} value={this.state.placa}/>
                <br/>

                <label>Quilometragem: </label>
                <input type="text" name="quilometragem" onChange={this.onChange} value={this.state.quilometragem}/>
                <br/>

                <label>Combustivel: </label>
                <input type="text" name="combustivel" onChange={this.onChange} value={this.state.combustivel}/>
                <br/>

                <label>Valor da Diaria: </label>
                <input type="text" name="valordiaria" onChange={this.onChange} value={this.state.valordiaria}/>
                <br/>

                <label>Tipo: </label>
                <input type="text" name="tipo" onChange={this.onChange} value={this.state.tipo}/>
                <br/>

                <button type="Submit">Salvar</button>

            </form>

		</div>
	  );
  }
}

export default VeiculoSalvar;
