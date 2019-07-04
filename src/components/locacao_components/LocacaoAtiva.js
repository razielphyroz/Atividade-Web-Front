import React, {Component} from 'react';
import axios from 'axios';


class LocacaoAtiva extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data : "",
            locacoes : [],
            mensagem : "Defina a Data:"
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

        var url = 'http://localhost:8080/atividade/locacao/listar-locacoes-ativas-projection/'
        url += this.state.data

        axios
        .get(url)
        .then(res => {
           this.setState({
                data : "",
                locacoes : res.data,
                mensagem : "Locações Ativas:"
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
    
                        <label>Data: </label>
                        <input type="text" name="data" onChange={this.onChange} value={this.state.data}/>
                        <br/>
                        <button type="Submit">Pesquisar</button>
    
                    </form>
                    <br/>

               <table border="1">
                    <thead>
                        <tr>
                            <th>Cliente:</th>
                            <th>Cpf:</th>
                            <th>Marca:</th>
                            <th>Placa:</th>
                            <th>Total:</th> 
                        </tr>
                    </thead>
                    
                    <tbody>
                        {this.state.locacoes.map((locacao, index) => 
                            <tr key={index}>
                                <td>{locacao.nomeCliente}</td>
                                <td>{locacao.clienteCpf}</td>
                                <td>{locacao.veiculoMarca}</td>
                                <td>{locacao.veiculoPlaca}</td>
                                <td>{locacao.valorLocacao}</td>
                            </tr>
                        )}   
                    </tbody>                
                </table>
            </div>
        );             
    }
    
}


export default LocacaoAtiva;