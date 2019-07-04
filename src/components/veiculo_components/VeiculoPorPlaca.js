import React, {Component} from 'react';
import axios from 'axios';


class VeiculoPorPlaca extends Component {

    constructor(props) {
        super(props);
  
        this.state = {
          placa : "",
          veiculo : null,
          mensagem : "Pesquisa Por Placa:"
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

        var url = 'http://localhost:8080/atividade/veiculo/buscar-por-placa/'
        url += this.state.placa

        axios
        .get(url)
        .then(res => {
           this.setState({
                placa : "",
                veiculo : res.data,
                mensagem : "Veículo Encontrado:"
           });
        })
        .catch(error => {
            this.setState({
                mensagem: "[Erro]: Deu ruim..."
            });
        })
    }
  
    render() {
        const veiculo = this.state.veiculo

        if (veiculo == null) {
            return (
                <div>
                    {this.state.mensagem && (
                        <div><p>{this.state.mensagem}</p></div>
                    )}
    
                    <form onSubmit={this.pesquisar}>
    
                        <label>Placa: </label>
                        <input type="text" name="placa" onChange={this.onChange} value={this.state.placa}/>
                        <br/>
                        <button type="Submit">Pesquisar</button>
    
                    </form>
                </div>
            );
        }

        return (
           <div>
               
            <table border="1">
                <tbody>
                    <tr>
                        <th> Marca: </th>
                        <th> Modelo: </th>
                        <th> Ano: </th>
                        <th> Cor: </th>
                        <th> Placa: </th>
                        <th> KMs: </th>
                        <th> Combustivel: </th>
                        <th> Valor Diária: </th>
                        <th> Tipo: </th>
                    </tr>
                    <tr>
                        <td> {veiculo.marca} </td>
                        <td> {veiculo.modelo}</td>
                        <td> {veiculo.ano}</td>
                        <td> {veiculo.cor}</td>
                        <td> {veiculo.placa}</td>
                        <td> {veiculo.quilometragem}</td>
                        <td> {veiculo.combustivel}</td>
                        <td> {veiculo.valorDiaria}</td>
                        <td> {veiculo.tipo}</td>  
                    </tr>
                </tbody>
            </table>
            
                <p></p>
                 
    
            </div>
        );             
    }
    
}


export default VeiculoPorPlaca;