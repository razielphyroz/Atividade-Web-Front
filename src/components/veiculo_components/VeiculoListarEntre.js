import React, {Component} from 'react';
import axios from 'axios';


class VeiculoListarEntre extends Component {

    constructor(props) {
        super(props);
  
        this.state = {
          valorMin : "",
          valorMax : "",
          veiculos : [],
          mensagem : "Defina os Valores:"
        };
  
        this.pesquisar = this.pesquisar.bind(this);
    }
  
      onChange = (e) => {
          this.setState({
              [e.target.name]: e.target.value
          });
      }
      
      pesquisar(e) {
        e.preventDefault();

        var url = 'http://localhost:8080/atividade/veiculo/listar-por-valor-entre/'
        url += (this.state.valorMin + "/" + this.state.valorMax)

        axios
        .get(url)
        .then(res => {
           this.setState({
                valorMin : "",
                valorMax : "",
                veiculos : res.data,
                mensagem : "Veiculos Disponíveis:"
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
    
                    <form onSubmit={this.pesquisar}>
    
                        <label>Valor Min: </label>
                        <input type="text" name="valorMin" onChange={this.onChange} value={this.state.valorMin}/>
                        <br/>
                        <label>Valor Max: </label>
                        <input type="text" name="valorMax" onChange={this.onChange} value={this.state.valorMax}/>
                        <br/>
                        <button type="Submit">Pesquisar</button>
    
                    </form>
                    <br/>
        
               <table border="1">
                    <thead>
                        <tr>
                            <th>Marca:</th>
                            <th>Modelo:</th>
                            <th>Ano:</th>
                            <th>Cor:</th>
                            <th>Placa:</th>
                            <th>KMs:</th>
                            <th>Combustivel:</th>
                            <th>Valor Diária:</th>
                            <th>Tipo:</th>    
                        </tr>
                    </thead>
                    
                    <tbody>
                        {this.state.veiculos.map(veiculo => 
                            <tr key={veiculo.idVeiculo}>
                                <td>{veiculo.marca}</td>
                                <td>{veiculo.modelo}</td>
                                <td>{veiculo.ano}</td>
                                <td>{veiculo.cor}</td>
                                <td>{veiculo.placa}</td>
                                <td>{veiculo.quilometragem}</td>
                                <td>{veiculo.combustivel}</td>
                                <td>{veiculo.valorDiaria}</td>
                                <td>{veiculo.tipo}</td>
                            </tr>
                        )}   
                    </tbody>                
                </table>
            </div>
        );             
    }
    
}


export default VeiculoListarEntre;