import React, {Component} from 'react';
import axios from 'axios';


class LocacaoListar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            locacoes : [],
            mensagem : "Defina a Data:"
        };
    }
  
      onChange = (e) => {
          this.setState({
              [e.target.name]: e.target.value
          });
      }
      
      componentWillMount() {

        var url = 'http://localhost:8080/atividade/locacao/listar-todas-locacoes'

        axios.get(url)
            .then(res => {
                this.setState({
                    locacoes : res.data,
                    mensagem : "Locações Ativas:"
                });
            });
        }

    
    render() {
        return (
     
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
       
        );             
    }
    
}


export default LocacaoListar;